import { Project, ProjectStatus } from "@/src/utils/types";

export const Projects: Project[] = [
  {
    img: "https://github.com/berenteb/voltfinder/blob/main/src/app/icon.png?raw=true",
    title: "Voltfinder",
    description: "A more relevant EV charger finder.",
    stack: ["NextJS", "NestJS", "TailwindCSS", "Firebase Cloud Messaging"],
    status: ProjectStatus.ACTIVE,
    url: "https://voltfinder.berente.net",
  },
  {
    img: "https://github.com/kir-dev/kir-mail/blob/main/apps/dashboard/public/icon.png?raw=true",
    title: "Kir-Mail",
    description:
      "Microservice-based email service with multi-provider support.",
    stack: [
      "NestJS",
      "React",
      "BullMQ",
      "PostgreSQL",
      "Redis",
      "NX Monorepo",
      "Kubernetes",
    ],
    status: ProjectStatus.ACTIVE,
    url: "https://github.com/kir-dev/kir-mail",
  },
  {
    img: "/img/projects/indulasch.png",
    title: "InduláSch Native",
    description: "Multi-platform mobile app to show nearby BKK departures",
    stack: ["React-Native", "Expo", "EAS"],
    status: ProjectStatus.ACTIVE,
    url: "https://kir-dev.hu/ly/IIWQJ",
  },
  {
    img: "/img/projects/indulasch.png",
    title: "InduláSch",
    description: "Configurable information display and admin site.",
    stack: ["React", "NestJS", "MongoDB", "SwiftUI"],
    status: ProjectStatus.ACTIVE,
    url: "https://kir-dev.hu/project/indulasch/",
  },
  {
    img: "/img/projects/shorz.png",
    title: "Shorz",
    description: "Shorten, edit and track links.",
    stack: ["React", "NestJS", "MongoDB"],
    status: ProjectStatus.ACTIVE,
    url: "https://kir-dev.hu/project/shorz/",
  },
  {
    img: "/img/projects/mav.png",
    title: "MÁV Plus",
    description:
      "Refurbished application concept for the Hungarian National Railway.",
    stack: ["SwiftUI", "Combine"],
    status: ProjectStatus.INACTIVE,
    url: "https://github.com/berenteb/mav-plus",
  },
];
