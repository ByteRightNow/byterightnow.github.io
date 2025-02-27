export interface Technology {
    category: string;
    stack: string[];
    icon?: string;
  }
  
  export interface TechnologyContent {
    title: string;
    text: string;
    technologies: Technology[];
  }