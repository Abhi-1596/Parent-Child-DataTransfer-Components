import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
    selector: 'app-b-comp',
    templateUrl: './b-comp.component.html',
    styleUrls: ['./b-comp.component.css']
})

export class B_CompComponent {
    comp_B_UserInput: any;

    @Input() comp_A_UserInput: any;

    // @Output() compB: EventEmitter = new EventEmitter();


}