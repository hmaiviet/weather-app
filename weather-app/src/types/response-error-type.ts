export type ResponseError = {
    success: boolean;
    error: {
        code: number;
        type: string;
        info: string;
    };
};
