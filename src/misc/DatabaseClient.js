/* eslint-disable no-console */
// TODO: implement database client for mongo
class DatabaseClient {
    constructor(dbClient) {
        this.dbClient = dbClient;
        this.tempStore = [];
    }

    async persist(jsonData) {
        console.log('persist not yet implemented');
        this.tempStore.push(jsonData);
        return Promise.resolve('persist finished');
    }

    async get(query) {
        console.log('get not yet implemented', query);
        return Promise.resolve(this.tempStore.pop());
    }
}

export default DatabaseClient;
