export interface IResult<T> {
    success: boolean;
    responseObject: T;
    responseMessage: string;
}