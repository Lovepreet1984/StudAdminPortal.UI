import { Component, OnInit, ViewChild } from '@angular/core';

import { PremiumamountService } from './premiumamount.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee } from '../models/ui-models/employee.model';
import { Occupation } from '../models/ui-models/occupation.model';
import { PremiumCalculation } from '../models/ui-models/PremiumCalculation.model';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],

})
export class EmployeeDetailComponent implements OnInit {

occupation:Occupation[]=[];

employee:Employee={
  firstname:'',
  lastname:'',
  age:0,
  occupation:'',
  dateOfBirth:'',
  deathSumInsured:0
}
premiumcal:PremiumCalculation={
  firstname:'',
  lastname:'',
  premiumAmount:0
};
showpremiumdiv=false;
@ViewChild('employeeDetailForm') employeeDetailForm ?:NgForm;
  constructor(private premiumservice :PremiumamountService) { }

  ngOnInit(): void {
    this.premiumservice.getOccupation()
.subscribe(
  (successResponse)=>{
    console.log(successResponse);
      this.occupation=successResponse;

  },
  (errorResponse)=>{
    console.log(errorResponse);

  }
);
  }


  onQuery():void{

   if(this.employeeDetailForm?.form.valid){
    this.premiumservice.getDeathPremium(this.employee)
    .subscribe(
      (successResponse)=>{
          this.premiumcal=successResponse;
        this.showpremiumdiv=true;


      },
      (errorResponse)=>{
        console.log(errorResponse);

      }
    );

   }

  }

}
