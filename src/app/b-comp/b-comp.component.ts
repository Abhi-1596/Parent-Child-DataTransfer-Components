import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-b-comp',
    templateUrl: './b-comp.component.html',
    styleUrls: ['./b-comp.component.css']
})

export class B_CompComponent {
    @Input('parentValue') compA: any;

    userInput_B: any;

    @Output() compB = new EventEmitter();


    callButton_B() {
        document.getElementById('compA').innerHTML = this.userInput_B;
    }
}