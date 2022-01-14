import { observable, action, computed, makeObservable } from "mobx";
import { postData } from "../service/api";

export class SessionStore {
  @observable email: string = "";
  @observable password: string = "";

  constructor() {
    makeObservable(this);
  }

  @computed get info() {
    return `Input data: ${this.email}/${this.password}`;
  }

  @action setEmail(email: string): void {
    this.email = email;
  }

  @action setPassword(password: string): void {
    this.password = password;
  }

  login = async () => {
    const response = await postData("https://jako-dev.com/api/user/login", {
      authenticate_info: this.email,
      password: this.password,
      device_uuid: "1234567890111213"
    })
    console.log("response: ", response);
    // save response.data.token
    // save response.data.user
    return true;
  }
}