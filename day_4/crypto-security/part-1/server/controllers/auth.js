const bcrypt = require("bcryptjs")

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcrypt.compareSync(password, users[i].hashed_password)) {
          console.log(password, users[i].hashed_password)
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        let {username, email, firstName, lastName, password, password2} = req.body
        const hashed_password = bcrypt.hashSync(password, bcrypt.genSaltSync(12))
        new_user = {username,
                    email,
                    firstName,
                    lastName,
                    hashed_password,
                  }
        console.log(req.body)
        users.push(new_user)
        console.log(new_user)
        res.status(200).send(new_user)
        
    }
}