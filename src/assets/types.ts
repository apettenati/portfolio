export interface IProject {
  name: string;
  description: string;
  liveUrl: string;
  codeUrl: string;
  tags: string[];
  image: string;
  date: string;
}

export interface IContactItem {
  item: {
    name: string;
    href: string;
    icon: string;
  };
}

export interface ISkill {
  name: string;
  icon: string;
}

export interface ISkillSection {
  header: string;
  skills: ISkill[];
}
