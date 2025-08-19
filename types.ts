
export interface Project {
    title: string;
    description: string;
}

export interface ProjectDescription {
    title: string;
    description: string;
}

export interface PortfolioContent {
    summary: string;
    projectDescriptions: ProjectDescription[];
}

export interface EducationItem {
    degree: string;
    institution: string;
    percentage: string;
}

export interface Skill {
    name: string;
}
