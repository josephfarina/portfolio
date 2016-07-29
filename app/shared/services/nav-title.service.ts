import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavTitleService {
    constructor(private router: Router) {}

    getCurrentUrl(): string {
        let url = this.router.url;
        return this.parseUrl(url);
    }

    // Parse the URL and return corresponding title
    parseUrl(url: string): string {
        let title: string;
        let parsedUrl = url.split('/')[1];
        switch (parsedUrl) {
            case '':
                title = 'Joey Farina';
                break;
            case 'calculator':
                title = 'Calculator';
                break;
            case 'tictactoe':
                title = 'Tic Tac Toe';
                break;
            case 'drum':
                title = 'Drum Machine';
                break;
        }
        return title;
    }
}
