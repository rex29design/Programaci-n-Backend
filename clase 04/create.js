const fs = require("fs")

const datetime = `${new Date().toLocaleDateString}`

fs.writeFileSync("fyh.txt", datetime)
