import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/ui-models/employee.model';
import { Occupation } from '../models/ui-models/occupation.model';
import { PremiumCalculation } from '../models/ui-models/PremiumCalculation.model';

@Injectable({
  providedIn: 'root'
})
export class PremiumamountService {

  private baseApiUrl='https://localhost:7237';

  constructor(private httpclient:HttpClient) { }

  getDeathPremium(employee:Employee):Observable<PremiumCalculation>{
      return this.httpclient.post<PremiumCalculation>(this.baseApiUrl + '/CalculatePA/MonthlyPremiumCalculate',employee);

  }
  getOccupation():Observable<Occupation[]>{
    return this.httpclient.get<Occupation[]>(this.baseApiUrl + '/CalculatePA/GetOccupation');

}
}
