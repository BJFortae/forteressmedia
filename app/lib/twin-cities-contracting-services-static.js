import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";
import { NextResponse } from "next/server";

const TCCS_ROOT = join(process.cwd(), "public", "twin-cities-contracting-services");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function normalizeSegments(segments = []) {
  return segments.filter(Boolean).map((segment) => decodeURIComponent(segment));
}

function safePath(segments = []) {
  const normalizedSegments = normalizeSegments(segments);
  const relativePath = normalizedSegments.length > 0 ? normalize(join(...normalizedSegments)) : "";
  const filePath = join(TCCS_ROOT, relativePath);
  const rootWithSep = `${TCCS_ROOT}${sep}`;

  if (filePath !== TCCS_ROOT && !filePath.startsWith(rootWithSep)) {
    return null;
  }

  return filePath;
}

async function resolveFilePath(segments = []) {
  let filePath = safePath(segments);

  if (!filePath) {
    return null;
  }

  try {
    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) {
      if (segments.join("/") === "pitch") {
        return join(filePath, "pitch-deck.html");
      }
      return join(filePath, "index.html");
    }
    return filePath;
  } catch {
    return null;
  }
}

export function twinCitiesContractingServicesPitchRedirect(request) {
  const response = NextResponse.redirect(
    new URL("/twin-cities-contracting-services/pitch/pitch-deck.html", request.url),
  );
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export async function serveTwinCitiesContractingServicesFile(segments = []) {
  const filePath = await resolveFilePath(segments);

  if (!filePath) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const body = await readFile(filePath);
    const contentType = contentTypes[extname(filePath).toLowerCase()] || "application/octet-stream";

    return new Response(body, {
      headers: {
        "Cache-Control": "public, max-age=300",
        "Content-Type": contentType,
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
