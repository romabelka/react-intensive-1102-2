import {observable, computed, action, autorun} from "mobx";

class AuthStore {
    @observable email = ''
    @observable password = ''

    constructor() {
        autorun(() => {
            console.log('email: ', this.email)
        })
    }

    @computed get isValidPassword() {
        return this.password.length > 8
    }

    @action setEmail = email => {
        this.email = email
        this.email = 'dummy email'
        this.email = email
    }
    @action setPassword = password => this.password = password
}

export default new AuthStore()
