import { Skill } from "@/typings";
export const fetchSkills = async () => {
  const baseUrl: any =
    process.env.VERCEL_URL || process.env.SANITY_STUDIO_BASE_URL;
  const apiUrl = `${
    baseUrl.startsWith("http") ? baseUrl : "https://" + baseUrl
  }/api/getSkills`;
  const res = fetch(apiUrl, { cache: "no-store" });

  const data: any = (await res).json();
  return data;
};
