import { ListItem } from '../ListItem';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-container',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})

export class ListComponent implements OnInit {
    constructor() {}
    listItems: ListItem[] = [];
    Input = '';

    ngOnInit() {}

    addListItem() {
        if (this.Input !== '') {
            this.listItems = this.listItems.concat(new ListItem(this.Input));
        }
        this.Input = '';
    }
}
