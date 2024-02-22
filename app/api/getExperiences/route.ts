import { sanityClient } from "../../../sanity";
import type { NextApiRequest } from "next";
import { groq } from "next-sanity";
import { Experience } from "../../../typings";
import { NextRequest, NextResponse } from "next/server";

const query = groq`*[_type=="experience"]{
    ...,technologies[]->
  }`;

export async function GET(req: NextRequest) {
  const expereinces: Experience[] = await sanityClient.fetch(query);
  return NextResponse.json(expereinces, { status: 200 });
}
