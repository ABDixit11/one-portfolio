import { sanityClient } from "../../../sanity";
import { groq } from "next-sanity";
import { Social } from "../../../typings";
import { NextRequest, NextResponse } from "next/server";

const query = groq`*[_type=="social"]`;

export async function GET(req: NextRequest) {
  const socials: Social[] = await sanityClient.fetch(query);
  return NextResponse.json(socials, { status: 200 });
}
