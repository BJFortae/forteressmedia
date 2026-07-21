import { serveTwinCitiesContractingServicesFile } from "../../lib/twin-cities-contracting-services-static";

export async function GET(_request, { params }) {
  const { path = [] } = await params;
  return serveTwinCitiesContractingServicesFile(path);
}
