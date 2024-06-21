// Byimaan


interface AuthApiTS {
    login({username, password}: {username: string, password: string}): Promise<any>;
    logout({username}: {username: string}): Promise<any>;
}

export class AuthApi implements AuthApiTS {
    public async login({ username, password }: { username: string; password: string; }): Promise<any> {
        console.log('Authenticating user...');
        // Simulating API call
        return new Promise(
            (res, rej) => {
                return setTimeout(
                    () => {
                        const isOkay = username === 'user-name' && password === 'pass-word';
                        return isOkay ? res('User successfully authenticated.') : rej('Wrong creditionals!')
                    },
                    1000
                )
            }
        )
    };

    public async logout({ username }: { username: string; }): Promise<any> {
        console.log('User logged out');
        // Simulate API call
        return new Promise((resolve) => setTimeout(() => resolve(username), 500));
    }
};

interface User {
    id: string;
    name: string;
    email: string;
}

interface UserApiTS {
    getUserData(id: string): Promise<User>
};

export class UserApi implements UserApiTS {
    async getUserData(id: string): Promise<User> {
        console.log("fetching data for user");
        // Simulate API call
        return new Promise(
            (res, rej) => setTimeout(
                () => {
                    const userInfo:User = {
                        id,
                        email: 'testuser2@gmail.com',
                        name: 'test-user'
                    }
                    return res(userInfo)
                }, 
                750
            )
        )
    }
};

interface NotfiationAPITS {
    sendToALL(message: string): Promise<void>;
    sendToUser(userId:string, message: string): Promise<void>;
};

export class NotfiationApi implements NotfiationAPITS {
    sendToALL(message: string): Promise<void> {
        console.log('sending messege to everybody ...', message)
        // Bunch of code ...
        return new Promise(
            (res, rej) => res()
        )
    };

    sendToUser(userId:string, message: string): Promise<void> {
        console.log(`Sending message to ${userId} `, message)
        // find user 
        return new Promise(
            res => res()
        )

    };
}