"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { isRouteMatch } from "next/dist/server/future/route-matches/route-match";

// import { useTheme } from "@/context/theme-context";

export default function Experience() {
  return (
   <section
   id="experience"
   className="mx-auto text-center scroll-mt-[10rem]">
    <SectionHeading >My Experience</SectionHeading>
    <VerticalTimeline lineColor="gray">
        {
            experiencesData.map((exp,index)=>(
                <React.Fragment key={index} >
                <VerticalTimelineElement
                contentStyle={{
                    background: "#f3f4f6",
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,0.05)",
                    textAlign:"left",
                    padding: "1.3rem"
                }}
                date={exp.date}
                icon={exp.icon}
                iconStyle={{
                    background: "white",
                    fontSize: "1.5rem",
                }}
                contentArrowStyle={{
                    borderRight: "0.4rem solid #9ca3af"
                }}
                >
                    <h3 className="font-semibold capitalize">{exp.title}</h3>
                    <p className="font-normal !mt-0">{exp.location}</p>
                    <p className="!mt-0">{exp.description}</p>
                </VerticalTimelineElement>
                </React.Fragment>
            ))
        }
    </VerticalTimeline>
   </section>
  )
}
