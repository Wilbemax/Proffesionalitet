module.exports = class UserDto {
    email;
    id;
    firstName;
    lastName;
    age;
    gender;
    family;

    constructor(model) {
        this.email = model.email;
        this.id = model._id; 
        this.firstName = model.firstName;
        this.lastName = model.lastName;
        this.age = model.age;
        this.gender = model.gender;
        this.family = model.family; 
    }
};
