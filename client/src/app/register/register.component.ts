import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    @Output() cancelRegister = new EventEmitter();
    model: any = {};

    constructor(private accountService: AccountService) { }

    ngOnInit(): void {
    }

    registerUser(){
        this.accountService.registerUser(this.model).subscribe(response => {            
            this.cancelRegistration();
        }), error => {
            console.log("error");
        }
    }

    cancelRegistration() {
        this.cancelRegister.emit(false);
    }

}
