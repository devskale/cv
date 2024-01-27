export interface Work {
    company: string;
    link: string;
    badges: readonly string[];
    title: string;
    logo: any; // Replace 'any' with the actual type of 'logo'
    start: string;
    end: string;
    description: string;
}