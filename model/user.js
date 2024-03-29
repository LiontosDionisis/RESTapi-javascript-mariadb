const EntitySchema = require("typeorm").EntitySchema;
const userEntity = new EntitySchema({
    name: "user",
    target: "user",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        username: { type: "varchar"},
        password: {type: "varchar"},
        email: {type: "varchar"}
    },
    relations: {
        categories: {
            target: "product",
            type: "many-to-many",
            joinTable: true,
            cascade: true
        }
    }
})

module.exports = {userEntity}