const userEntity = require("../model/user").userEntity;
const dataSource = require("../connect").dataSource;

async function findAll() {
    const result = await dataSource
        .getRepository(userEntity)
        .createQueryBuilder()
        .select("user")
        .from(userEntity, "user")
        .getMany()
    return result
}

module.exports = {findAll}