import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import youtube from "@/public/youtube.png"
import telehealth from "@/public/tele1.png"
import boredom from "@/public/boredom.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: `Computer Science`,
    location: "Don Bosco Egmore",
    description:
      "Marks: 94.5% (12th) Class Topper",
    icon: React.createElement(LuGraduationCap),
    date: "2008-2022",
  },
  {
    title: `Electronics and Communication Engineering`,
    location: "RMK Engineering College",
    description:
      "GPA: 8.83 (First Year) Class Topper",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2026",
  },
  {
    title: "Project Developer and Video Creator",
    location: "Locofy.ai",
    description:
      "Responsible for coming up with note worthy project ideas, and developing them using Locofy's Figma plugin and Creating a quick build video explaining the entire process.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2022 - Present",
  },
  {
    title: "News Letter and Social Media Admin",
    location: "Inno CareerTech",
    description:
      "Involved in developing and managing email newsletter Website and Creating content for all Social Media Handles",
      icon: React.createElement(CgWorkAlt),
    date: "June 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Youtube Clone",
    description:
      "Cloned the Popular Youtube Application and made it functional using ReactJS, used Locofy to Convert Figma design to Frontend",
    tags: ["React", "API", "JavaScript", "Locofy", "Figma"],
    imageUrl: youtube,
  },
  {
    title: "Telehealth Application",
    description:
      "Created a Telehealth Application for Doctors and Patients using React Native. Used Locofy to Convert Figma to Code",
    tags: ["React Native", "JavaScript","Locofy","Figma"],
    imageUrl: telehealth,
  },
  {
    title: "Boredom Detection",
    description:
      "A Machine Learning Application to detect boredom in students and alert. Used OpenCV and Mediapipe",
    tags: ["Python", "OpenCV", "Mediapipe"],
    imageUrl: boredom,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Python",
  "Git",
  "Tailwind",
  "Flutter",
  "Machine Learning",
  "Numpy",
  "Pandas",
  "Postman",
  "TypeScript",
  "Java",
  "C",
  "C++",
  "Adobe Premier Pro",
  "Arduino"

] as const;