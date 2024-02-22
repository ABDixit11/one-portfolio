"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};
function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        src={skill?.image && urlFor(skill?.image).url()}
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 object-coer w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-100 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
