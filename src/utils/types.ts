export interface Project {
  title: string;
  description: string;
  url: string;
  img: string;
  status: ProjectStatus;
  stack: string[];
}

export enum ProjectStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}
