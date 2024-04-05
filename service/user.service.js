const { use } = require("../routes/user.route");

const userEntity = require("../model/user").userEntity;
const dataSource = require("../connect").dataSource;

async function findAll() {
    const result = await dataSource
        .getRepository(userEntity)
        .createQueryBuilder()
        .leftJoinAndSelect("user.products", "product")
        .getMany()
    return result
}

async function findOne(id) {
    const result = await dataSource.getRepository(userEntity)
        .createQueryBuilder().select("user").from(userEntity, "user")
        .where("user.id = :userId", {userId: id})
        .getOne();
    return result;
}

module.exports = {findAll}