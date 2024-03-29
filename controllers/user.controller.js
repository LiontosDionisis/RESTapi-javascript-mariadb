const userService = require("../service/user.service")

exports.findAll = async(req, res) => {
    console.log("Finding all users");

    try {
        const result = await userService.findAll();
        res.status(200).json({data: result});
        console.log("Found all users")
    } catch(err) {
        res.status(404).json({data: err});
        console.log("Error in finding users")
    }
}