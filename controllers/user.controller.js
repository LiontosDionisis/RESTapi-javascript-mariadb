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

exports.findOne = async(req, res) => {
    console.log("Find one user");
    let id = req.params.id; 
    try {
        const result = await userService.findOne(id);
        res.status(200).json({data: result});
        console.log("Found one user");
    } catch (err) {
        res.status(400).json({data: err});
        console.log("Error in finding user");
    }
    
}