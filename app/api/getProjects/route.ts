import { sanityClient } from "../../../sanity";
import type { NextApiRequest } from "next";
import { groq } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";
import { Project } from "../../../typings";

const query = groq`*[_type=="project"]{...,technologies[]->}`;

export async function GET(req: NextRequest) {
  const projects: Project[] = await sanityClient.fetch(query);
  return NextResponse.json(projects, { status: 200 });
}
