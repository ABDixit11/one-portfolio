import { Social } from "@/typings";
export const fetchSocials = async () => {
  let data;
  const baseUrl: any =
    process.env.VERCEL_URL || process.env.SANITY_STUDIO_BASE_URL;
  const apiUrl = `${
    baseUrl.startsWith("http") ? baseUrl : "https://" + baseUrl
  }/api/getSocials`;
  try {
    const response = await fetch(apiUrl, { cache: "no-store" });
    data = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return data;
};
