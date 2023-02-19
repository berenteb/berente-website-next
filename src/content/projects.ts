import { Project, ProjectStatus } from "@/src/utils/types";

export const Projects: Project[] = [
  {
    img: "/img/projects/indulasch.png",
    title: "InduláSch",
    description:
      "Configurable kiosk display and admin site. Android, iOS and watchOS concept.",
    stack: ["React", "NestJS", "MongoDB", "SwiftUI"],
    status: ProjectStatus.ACTIVE,
    url: "https://github.com/kir-dev/indulasch-v3",
  },
  {
    img: "/img/projects/shorz.png",
    title: "Shorz",
    description: "Shorten, edit and track links.",
    stack: ["React", "NestJS", "MongoDB"],
    status: ProjectStatus.ACTIVE,
    url: "https://github.com/kir-dev/shorz",
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
  {
    img: "/img/projects/tramtrain.png",
    title: "Tram-train",
    description:
      "A web application to display information about the tramtrain line between Szeged and Hódmezővásárhely.",
    stack: ["React", "Express", "Node"],
    status: ProjectStatus.INACTIVE,
    url: "https://github.com/berenteb/tramtrain",
  },
  {
    img: "/img/projects/covidis.png",
    title: "Covidis",
    description:
      "Discord bot responding with coronavirus statistics and information.",
    stack: ["JS", "DiscordJS"],
    status: ProjectStatus.INACTIVE,
    url: "https://github.com/berenteb/covidis",
  },
  {
    img: "/img/projects/telekom.png",
    title: "Homebridge Telekom IPTV Plugin",
    description: "Telekom set-top-box remote control plugin for Homebridge.",
    stack: ["JS", "Homebridge", "Smarthome"],
    status: ProjectStatus.INACTIVE,
    url: "https://github.com/berenteb/homebridge-telekom-iptv",
  },
  {
    img: "/img/projects/menetrend.png",
    title: "Simple Timetable",
    description: "A simple and minimalist transit app and timetable viewer.",
    stack: ["JS", "EJS", "Node", "Express"],
    status: ProjectStatus.INACTIVE,
    url: "https://github.com/berenteb/szimpla-menetrend",
  },
];
