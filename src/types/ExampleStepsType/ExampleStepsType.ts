export interface ExampleStepType {
    title: string;
    image: string;
    description: string[];
    slug: string;
    isSecondary?: boolean;
}

export interface ExampleStepsType {
    steps: ExampleStepType[];
}
