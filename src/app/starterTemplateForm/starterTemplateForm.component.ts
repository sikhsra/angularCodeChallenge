import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'starter-template-form',
    templateUrl: './starterTemplateForm.component.html'
})
export class StarterTemplateFormComponent implements OnInit {
    customer: any;
    message: string;
    submitted:boolean = false;
    constructor() { }

    ngOnInit() { 
        this.customer = {
            firstName: 'John Template',
            lastName:'Doe Template',
            address:'123',
            city:'Calgary',
            province:'Alberta',
            country:'Canada',
            postalCode:'A1A 1A1',
            phoneNumber:'111-222-3333',
            email:'jdoe@email.com'
        };
    }

    onSubmit() {
        this.submitted = true;
    }

}