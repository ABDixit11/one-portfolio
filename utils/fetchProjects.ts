import { Project } from "@/typings";
export const fetchProjects = async () => {
  const baseUrl: any =
    process.env.VERCEL_URL || process.env.SANITY_STUDIO_BASE_URL;
  const apiUrl = `${
    baseUrl.startsWith("http") ? baseUrl : "https://" + baseUrl
  }/api/getProjects`;
  const res = fetch(apiUrl, { cache: "no-store" });

  const data: any = (await res).json();
  return data;
};
