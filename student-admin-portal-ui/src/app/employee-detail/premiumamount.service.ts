import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/api-models/weather.model';
import { Employee } from '../models/ui-models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class PremiumamountService {

  private baseApiUrl='https://localhost:7237';

  constructor(private httpclient:HttpClient) { }

  getDeathPremium(employee:Employee):Observable<Employee>{
    console.log("LLLLLLLLLLLLLLLL");
    console.log(employee);
   return this.httpclient.get<Employee>(this.baseApiUrl + '/MonthlyPremiumCalculate/'+employee);
  }
}
