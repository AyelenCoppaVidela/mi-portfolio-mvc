const path = require('path')

let homeController = (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'))
    }

module.exports = {
    homeController: homeController
};