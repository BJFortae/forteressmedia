import { proscapesPitchRedirect } from "../lib/proscapes-static";

export function GET(request) {
  return proscapesPitchRedirect(request);
}
