"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";


export default function Projects() {


  return (
    <section  id="projects" className="max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}

        <a href="https://github.com/justinbenito" className="underline text-purple-400">and 100 more</a>
      </div>
    </section>
  );
}