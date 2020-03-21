export class User {
    name:string;
    email:string;
    phone:number;
    topic:string;
    timePreference: string;
    subscribe:boolean;
}

// below is another way to initialise the elements
// export class User {
//     constructor(
//     public name:string,
//     public email:string,
//     public phone:number,
//     public topic:string,
//     public timePreference: string,
//     public subscribe:boolean
//     ){}
// }
