// Byimaan

/**
 * A Facade class is introduced to simplify the interactions with the subsystem. The Facade class wraps the complex subsystem and exposes a simple interface to the client
 * 
 * a) Facade: The class that provides a simplified interface to the subsystem.
 * 
 * b) Subsystem classes: The classes that perform the subsystem's actual work. These classes are not aware of the Facade and can be directly accessed if needed.
 */

import { AuthApi as AuthAPI, UserApi as UserAPI, NotfiationApi as NotificationAPI} from "./sub-classes";

class APIFacade {
    private authAPI: AuthAPI;
    private userAPI: UserAPI;
    private notificationAPI: NotificationAPI;

    constructor(){
        this.authAPI = new AuthAPI();
        this.userAPI = new UserAPI();
        this.notificationAPI = new NotificationAPI();
    };

    async loginAndFetchProfile(username: string, password: string){
        const isAuthenticated = await this.authAPI.login({username, password});
        if(isAuthenticated){
            const user = await this.userAPI.getUserData('encrypted user Id');

            this.notificationAPI.sendToUser('test@gmail.com', 'You are now logged in.')
        } else {
            console.log('Login Failed! Invalid creditionals.')
        }
    };

    // ... more relevant methods...
}