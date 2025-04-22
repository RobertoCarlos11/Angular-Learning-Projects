export interface Question {
    id: number;
    question: string;
    options: Option[];
}

export type Option = {
    option: string;
    isCorrect: boolean;
}