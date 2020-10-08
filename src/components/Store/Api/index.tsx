const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://localhost:3001/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

const ApiChats = {
    async gitAdmin() {
        await instance.get('/').then((result: any) => { }).catch((err: any) => { });
    }
}
export default ApiChats;