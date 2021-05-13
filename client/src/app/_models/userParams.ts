import { User } from "./user";

export class UserParams {
    gender: string;
    minAge = 18;
    maxAge = 99;
    pageNumber = 1;
    pageSize = 5;
    orderBy = 'lastActive';

    constructor(user: User) {
        if (user.gender != "male" && user.gender != "female") this.gender = user.gender; 
        this.gender = user.gender == "male" ? "female" : "male";
    }
}