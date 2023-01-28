import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  private readonly accountingTree = 'AccountsIndex/BuildTree'
  private readonly accentingNode = 'AccountsIndex/GetByCode/'
  constructor(private http: HttpClient) { }

  getAccountsIndex() {
    const url: string = environment.baseUrl + `${this.accountingTree}`;

    return this.http.get(url);
  }

  getAccountingNode(id: string) {
    const url: string = environment.baseUrl + `${this.accentingNode + id}`;

    return this.http.get(url);
  }
}
