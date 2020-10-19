import { Cookies } from "react-cookie";
import axios from "axios";

const endpoint = process.env.REACT_APP_API_ENDPOINT;
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

  login = async (submit_id, password) => {
    // ログイン処理
    try {
      await axios.post(
        `${endpoint}/login`,
        {
          submit_id: submit_id,
          password: password,
        },
        {
          // withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      this.set("isLoggedIn", true);
      return true;
    } catch (e) {
      console.error(e);
    }
  };

  logout = async () => {
    if (this.isLoggedIn()) {
      this.set("isLoggedIn", false);
    }
  };
}

export default new User();
