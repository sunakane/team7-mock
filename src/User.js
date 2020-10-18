class User {
  isLoggedIn = () => this.get("isLoggedIn") === "true";

  // webストレージにkey: valueで登録
  set = (key, value) => localStorage.setItem(key, value);

  get = (key) => this.getLocalStorage(key);

  getLocalStorage = (key) => {
    const ret = localStorage.getItem(key);
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
