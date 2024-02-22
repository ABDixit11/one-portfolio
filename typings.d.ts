interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _tyep: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  socials: Social[];
  backgroundInformation: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  comapany: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}
