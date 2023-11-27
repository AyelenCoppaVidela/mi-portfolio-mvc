const path = require('path')

let aboutController = (req, res) => {
        res.sendFile(path.join(__dirname, '../views/about.html'))
    }

module.exports = {
    aboutController: aboutController
};