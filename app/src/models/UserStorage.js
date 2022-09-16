"user strict";

class UserStorage {
    static #users = {
        id: ["ssunnykku", "ckamsi", "sun_hee"],
        psword: ["1234", "2351", "!234"],
        name: ["이름이", "나요", "서니"]
    };

//은닉화된 private 변수 users 받아올 수 있도록

  static getUsers() {
    return this.#users;
  }  
}

module.exports = UserStorage;