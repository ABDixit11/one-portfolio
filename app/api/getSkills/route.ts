import { sanityClient } from "../../../sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Skill } from "../../../typings";
import { NextRequest, NextResponse } from "next/server";

const query = groq`*[_type=="skill"]`;

export async function GET(req: NextRequest) {
  const skills: Skill[] = await sanityClient.fetch(query);
  return NextResponse.json(skills, { status: 200 });
}
