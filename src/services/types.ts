export interface WorkFormat {
    id: 'remote' | 'onsite' | 'hybrid';
    name: string;
}

export interface JobType {
    id: string;
    name: string;
    area: {name: string};
    employer: {name: string}; 
    salary: {from: number; to: number; currency: string} | null;
    experience: {name: string};
    workFormat: WorkFormat[];
    alternativeUrl: string;
}

export interface JobsResponse {
    found: number;
    pages: number;
    items: JobType[];
}