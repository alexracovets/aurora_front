export interface StepType {
    title: string;
    photo: {
        url: string;
    };
    content: {
        text: {
            root: {
                children: {
                    children: {
                        text: string;
                    }[];
                }[];
            };
        };
    };
    slug: string;
    isSecondary?: boolean;
}