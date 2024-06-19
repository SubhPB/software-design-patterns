// Byimaan

/* 
The Singleton Design Pattern ensures that a class has only one instance and provides a global point of access to that instance. This is achieved by:

    Private Constructor: Prevents other objects from creating new instances.
    Static Method: Provides a way to get the single instance of the class.
    Static Variable: Holds the single instance of the class.
*/

// CMD npx ts-node src/creational/singleton/index.ts

class ConfigurationManager {
    
    // `priate static` means this variable will be limited to the class & can be used without creating the instance
    private static instance : ConfigurationManager;

    // only available witin class
    private settings: {[key: string]: string};

    private constructor(){
        this.settings = {};
    };

    // static methods can be called without creating the instance of class.
    // same wih static variables can be used with creating the instance of class
    public static getInstance(){
        if (!this.instance){
            this.instance = new ConfigurationManager();
        };
        return this.instance
    };

    public setSetting(key: string, value: string): void{
        this.settings[key] = value
    };

    public getSetting(key: string){
        return this.settings[key]
    }
};

const conf1 = ConfigurationManager.getInstance();
conf1.setSetting('api', 'http://example.com')
console.log("Conf1 = ", conf1.getSetting('api'))

const conf2 = ConfigurationManager.getInstance();
console.log('conf2 = ', conf2.getSetting('api'))