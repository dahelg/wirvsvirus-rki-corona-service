class RkiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async fetchCurrentData() {
        const url = 'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=&f=json';

        const response = await this.httpClient.get(
            url,
            null,
            {
                Accept: 'application/json'
            }
        );
        return response.data;
    }

    async getCurrentData() {
        const { features } = await this.fetchCurrentData();
        return features;
    }
}

export default RkiService;
