import { Component, OnInit } from '@angular/core';
import { Weather } from '../models/ui-models/weather.model';
import { PremiumamountService } from './premiumamount.service';
import { FormsModule } from '@angular/forms';
import { Employee } from '../models/ui-models/employee.model';
import { Occupation } from '../models/ui-models/occupation.model';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],

})
export class EmployeeDetailComponent implements OnInit {
weather:Weather[]=[];
occupation:Occupation[]=[
  {Occupationame:"doctor",
Rating:"yy"},
{Occupationame:"urse",
Rating:"lly"},
];
employee:Employee={
  firstname:'',
  lastname:'',
  age:0,
  occupation:'',
  dateOfBirth:'',
  deathSumInsured:0,


}
  constructor(private premium :PremiumamountService) { }

  ngOnInit(): void {

   /*  this.premium.getDeathPremium()
    .subscribe(
(successResponse)=>{
  this.weather=successResponse;
  console.log(this.weather);

},
(errorResponse)=>{
  console.log(errorResponse);

}

    ); */
  }
  onQuery():void{
console.log(this.employee);
this.premium.getDeathPremium(this.employee)
.subscribe(
  (successResponse)=>{
    this,this.employee=successResponse;


  },
  (errorResponse)=>{
    console.log(errorResponse);

  }
);
  }

}
