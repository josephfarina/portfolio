import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class NavTitleService {
    constructor(private router: Router) {}

    getCurrentUrl(): string {
        let url = this.router.url;
        return this.parseUrl(url);
    }

    // FIXME: This can probably be done better than parsing links
    parseUrl(url: string): string {
        let title: string;
        // return first part of the url
        let parsedUrl = url.split('/')[1];
        switch (parsedUrl) {
            case '':
                title = 'Home';
                break;
            case 'calculator':
                title = 'Calculator';
                break;
            case 'tictactoe':
                title = 'Tic Tac Toe';
                break;                 
        }
        return title;
    }


}
