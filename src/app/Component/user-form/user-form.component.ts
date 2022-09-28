import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() total!:number;
  @Output() checkoutSuccess = new EventEmitter();

  constructor() { }
  /* fullname!: string;
  address!: string;
  creditCard!:  string ; */

  model: any = {};

  ngOnInit(): void {
  }
  onSubmit():void{

    this.checkoutSuccess.emit( {name:this.model.fullname,total:this.total});
  }

}
