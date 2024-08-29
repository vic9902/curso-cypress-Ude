interface Credentials{
    username: string,
    password: string
}

export class loginData{
    static invalidCredentials: Credentials = {
        username: "abc",
        password: "abc"
    }
    static validCredentials: Credentials = {
        username: "pruebaQA1",
        password: "pruebaQA1"
    }
}

export default loginData;