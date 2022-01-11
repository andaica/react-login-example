import { observable, action, computed, makeObservable } from "mobx";

export class SessionStore {
  @observable email: string = "";
  @observable password: string = "";

  constructor() {
    makeObservable(this);
  }

  @computed get info() {
    console.log("computed!")
    return `Input data: ${this.email}/${this.password}`;
  }

  @action setEmail(email: string): void {
    this.email = email;
  }

  @action setPassword(password: string): void {
    this.password = password;
  }
}