export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  link: string;
}
