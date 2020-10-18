import { Cookies } from "react-cookie";

class User {
  constructor() {
    this.cookies = new Cookies();
  }

  isLoggedIn = () => this.get("isLoggedIn") === "true";

  // webストレージにkey: valueで登録
  // set = (key, value) => localStorage.setItem(key, value);
  set = (key, value) => this.cookies.set(key, value);

  // get = (key) => this.getLocalStorage(key);
  get = (key) => this.getCookies(key);

  getCookies = (key) => {
    const ret = this.cookies.get(key);
    if (ret) return ret;
    else return null;
  };

  login = async (email, password) => {
    // ログイン処理
    this.set("isLoggedIn", true);
    return true;
  };

  logout = async () => {
    if (this.isLoggedIn()) {
      this.set("isLoggedIn", false);
    }
  };
}

export default new User();
