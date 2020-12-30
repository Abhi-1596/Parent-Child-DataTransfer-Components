import { Component } from '@angular/core';

@Component({
    selector: 'app-a-comp',
    templateUrl: './a-comp.component.html',
    styleUrls: ['./a-comp.component.css']
})

export class A_CompComponent {
    userInput_A: any;

    textData(data: any) {
        this.userInput_A = data;
    }

    callButton_A() {
        document.getElementById('compB').innerHTML = this.userInput_A;
    }
}