const typeorm = require("typeorm");

const userEntity = require("./model/user");
const productEntity = require("./model/product");

const dataSource = new typeorm.DataSource({
    type: "mariadb",
    host: process.env.HOST,
    port: 3000,
    username: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    entities: [userEntity, productEntity]
})

dataSource.initialize().then(function() {
    console.log("Connection to Database established")
}).catch( function(error) {
    console.log("Error in connection to Databse", error)
})

module.exports = { dataSource}