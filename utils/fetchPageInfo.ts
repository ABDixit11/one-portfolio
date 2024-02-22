export const fetchPageInfo = async () => {
  const baseUrl: any =
    process.env.VERCEL_URL || process.env.SANITY_STUDIO_BASE_URL;
  const apiUrl = `${
    baseUrl.startsWith("http") ? baseUrl : "https://" + baseUrl
  }/api/getPageInfo`;
  const response = await fetch(apiUrl, { cache: "no-store" });
  const data = await response.json();
  return data;
};
