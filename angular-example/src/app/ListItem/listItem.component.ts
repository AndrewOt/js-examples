import { Component, Input } from '@angular/core';
import { ListItem } from '../ListItem';

@Component({
    selector: 'app-list-item',
    templateUrl: './listItem.component.html',
    styleUrls: ['./listItem.component.scss'],
})
export class ListItemComponent {
    constructor() {}

    @Input() ThisItem: ListItem;
}
