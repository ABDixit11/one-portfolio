import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
export const config = {
  dataset: "production",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "q8ibh7hs",
  apiVersion: "2024-01-28",
  useCdn: true,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
