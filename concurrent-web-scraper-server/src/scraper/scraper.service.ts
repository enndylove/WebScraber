import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class ScraperService {
    async scrapeUrls(urls: string[]): Promise<any[]> {
        return Promise.all(
            urls.map(async (url) => {
                try {
                    const { data } = await axios.get(url, { timeout: 5000 });
                    const $ = cheerio.load(data);
                    // for example, take the page title
                    const title = $('title').text();
                    return { url, title };
                } catch (error) {
                    return { url, error: error.message };
                }
            }),
        );
    }
}
