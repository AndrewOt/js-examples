import { ListItem } from '../ListItem';
import { Component, OnInit } from '@angular/core';

// This registers this component with Angular.
@Component({
    /** IMPORTANT: this made me stuck for quite some time, but the 'selector' below is the NAME of
     * the tag. So if you want to use this component in another template it would look something like this:
     * <app-list-container>....</app-list-container>
     */
    selector: 'app-list-container',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})

// This component is for displaying the form to input our items and the list itself.
export class ListComponent implements OnInit {
    constructor() {}
    listItems: ListItem[] = [];
    Input = '';

    // This is a dummy lifecycle method I don't think we need, I just put here because it was in the example :P
    ngOnInit() {}

    addListItem() {
        if (this.Input !== '') {
            // Add ListItem objects to the array. Unlike React, I don't think we can store elements in an array
            // and expect Angular to render them properly, it will just spit out [object Object]. We use a for loop
            // to render these things in the template.
            this.listItems = this.listItems.concat(new ListItem(this.Input));
        }

        this.Input = '';
    }
}
