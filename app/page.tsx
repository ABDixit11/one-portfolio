import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExp from "./components/WorkExp";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: any;
};

export default async function Home() {
  const { props } = await getData();
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header socials={props.socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={props.pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={props.pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExp experiences={props.experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={props.skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={props.projects} />
      </section>

      <section id="contactme" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://i.imgur.com/e2yvD6A.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

const getData = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
};

async function fetchPageInfo() {
  const query = groq`*[_type=="pageInfo"]{...,socials[]->}[0]`;
  const pageInfo = await sanityClient.fetch(query, {}, { cache: "no-store" });
  return pageInfo;
}

async function fetchExperiences() {
  const query = groq`*[_type=="experience"]{...,technologies[]->}`;
  const experiences: Experience[] = await sanityClient.fetch(
    query,
    {},
    { cache: "no-store" }
  );
  return experiences;
}

async function fetchSkills() {
  const query = groq`*[_type=="skill"]`;
  const skills: Skill[] = await sanityClient.fetch(
    query,
    {},
    { cache: "no-store" }
  );
  return skills;
}

async function fetchProjects() {
  const query = groq`*[_type=="project"]{...,technologies[]->}`;
  const projects: Project[] = await sanityClient.fetch(
    query,
    {},
    { cache: "no-store" }
  );
  return projects;
}

async function fetchSocials() {
  const query = groq`*[_type=="social"]`;
  const socials: Social[] = await sanityClient.fetch(
    query,
    {},
    { cache: "no-store" }
  );
  return socials;
}
