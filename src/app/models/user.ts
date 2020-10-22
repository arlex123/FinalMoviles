export class User {

    constructor(
        public UserSchema:string,
        public user_type_id: string,
        public user_num_id: string,
        public user_city: string,
        public user_department: string,
        public user_addres: string,
        public user_gender: string,
        public user_email: string,
        public user_password: string,
        public user_role: string,

    ) {}
}