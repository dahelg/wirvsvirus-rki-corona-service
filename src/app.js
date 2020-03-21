/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import 'dotenv/config';
// import moment from 'moment';
import HttpClient from './misc/HttpClient';
import RkiService from './service/RkiService';

const {
    DEVELOPMENT_MODE
} = process.env;

async function main() {
    console.log('### START SYNC ###');

    const httpClient = new HttpClient();
    const rkiService = new RkiService(httpClient);
    const currentRkiDataForGermany = await rkiService.getCurrentData();
    console.log(currentRkiDataForGermany);
}


if (DEVELOPMENT_MODE) {
    main();
}

export default main;
