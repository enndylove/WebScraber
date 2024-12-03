import { Controller, Post, Body } from '@nestjs/common';
import { ScraperService } from './scraper.service';

@Controller('scraper')
export class ScraperController {
    constructor(private readonly scraperService: ScraperService) {}

    @Post()
    async scrape(@Body('urls') urls: string[]) {
        return this.scraperService.scrapeUrls(urls);
    }
}
