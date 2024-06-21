// Byimaan

/**
 *  The Proxy design pattern is used to control access to an object. It can be useful in various scenarios, such as lazy initialization, logging, access control, etc.
 */


class ApiService {
    async fetchData(url:string): Promise<any>{
        return fetch(url).then(res => res.json());
    }
};


class ApiServiceProxy{
    private apiService: ApiService;
    private history: string[];

    constructor(apiService: ApiService){
        this.apiService = apiService
        this.history = [];
    };

    fetchData(url:string): Promise<any>{
        console.log("Fetching data...");
        const response = this.apiService.fetchData(url).then(
            res => {
                this.history.push(
                    `Api at ${url} was fetched during (${ Date.now()})`
                );
                console.log("History saved!")
                return res;
            }
        );
        return response;
    }
};

const apiService = new ApiService();
const apiServiceProxy = new ApiServiceProxy(apiService);

apiServiceProxy.fetchData('https://jsonplaceholder.typicode.com/posts')
  .then(data => console.log(data))
  .catch(error => console.error(error));