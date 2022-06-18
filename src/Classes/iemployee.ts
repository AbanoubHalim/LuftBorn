import { Guid } from "guid-typescript";

export interface IEmployee {
        id: Guid;
        age: number;
        name: string;
        phoneNumber: string;
        address: string;
        title: string;
        jobDescription: string;
}
