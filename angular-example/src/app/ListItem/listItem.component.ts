import { Component, Input } from '@angular/core';
import { ListItem } from '../ListItem';

@Component({
    selector: 'app-list-item',
    templateUrl: './listItem.component.html',
    styleUrls: ['./listItem.component.scss'],
})
// This component is for each individual item that is added to the list. The ListItem
// property is referenced in the template file (listItem.component.html).
export class ListItemComponent {
    constructor() {}

    @Input() ThisItem: ListItem;
}
