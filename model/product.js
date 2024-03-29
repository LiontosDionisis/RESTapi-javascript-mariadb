const EntitySchema = require("typeorm").EntitySchema;
const ProductEntity = new EntitySchema({
    name: "product",
    target: "product",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        cost: { type: "int"},
        quantity: {type: "int"}
    }
})

module.exports = {ProductEntity}