import { Cookies } from "react-cookie";
import api from "./api/api";

class User {
  constructor() {
    this.cookies = new Cookies();
  }

  // TODO: サーバ側のセッションIDと一致しているかどうかを確認するべき
  isLoggedIn = async () => {
    // return this.get("isLoggedIn");
    const res = await api.get("/is_login");
    console.log(res);
    // return res.data["is_login"];
    return res.data !== null ? res.data.is_login : null;
  };

  // webストレージにkey: valueで登録
  // set = (key, value) => localStorage.setItem(key, value);
  set = (key, value) => this.cookies.set(key, value);

  remove = (key) => this.cookies.remove(key)

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
      const res = await api.post("/login", {
        submit_id: submit_id,
        password: password,
      });
      console.log(res.data);

      const sessionId = res.data.session_id;
      this.set("isLoggedIn", sessionId);
      return true;
    } catch (e) {
      const { status, statusText } = e.response;
      console.error(`Error! HTTP Status:${status} ${statusText}`);
    }
  };

  logout = async () => {
    // ログアウト処理
    try {
      const res = await api.get("/logout", {withCredentials: true});
      console.log(res.data);
      this.remove("isLoggedIn");
      return true;
    } catch (e) {
      const { status, statusText } = e.response;
      console.error(`Error! HTTP Status:${status} ${statusText}`);
    }
  };
}

export default new User();
