import { serveProscapesFile } from "../../../lib/proscapes-static";

export async function GET(_request, { params }) {
  const { path = [] } = await params;
  return serveProscapesFile(path);
}
