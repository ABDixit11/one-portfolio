import { sanityClient } from "../../../sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { PageInfo } from "../../../typings";
import { NextRequest, NextResponse } from "next/server";

const query = groq`*[_type=="pageInfo"]{...,socials[]->}[0]`;

export async function GET(req: NextRequest) {
  const pageInfo = await sanityClient.fetch(query);
  return NextResponse.json(pageInfo, { status: 200 });
}
