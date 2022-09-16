"user strict";

const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
     newUser[info] = users[info][idx];
     return newUser;
   }, {});
   
   return userInfo;
  }

//은닉화된 private 변수 users 받아올 수 있도록
  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce
    ((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log(newUsers);
    return newUsers;
  }
  
  static getUserInfo(id) {
   return fs
    .readFile("./src/databases/users.json")
    .then((data) => {
        return this.#getUserInfo(data, id);
    })
    .catch(console.error()); 

  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    console.log(users);
  }
}

module.exports = UserStorage;