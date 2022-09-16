"user strict";

class UserStorage {
    static #users = {
        id: ["ssunnykku", "ckamsi", "sun_hee"],
        psword: ["1234", "2351", "!234"],
        name: ["이름이", "나요", "서니"]
    };

//은닉화된 private 변수 users 받아올 수 있도록

  static getUsers(...fields) {
    const users = this.#users;
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
}

module.exports = UserStorage;