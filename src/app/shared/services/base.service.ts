import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../model/response.model';


@Injectable({
  providedIn: 'root'
})


export class BaseService {
  constructor(
    // protected snackBarService: SnackBarService,
    protected httpClient: HttpClient,
    protected urlName: string,
    protected apiName: string
  ) {
  }

  async getCustomApi(apiMethod: string, params: HttpParams): Promise<any> {
    return await this.httpClient.get<any>(`${this.urlName}/${this.apiName}/${apiMethod}`, { params }).toPromise();
  }

  async postCustomApi(apiMethod: string, model: object): Promise<any> {
    return await this.httpClient.post<any>(`${this.urlName}/${this.apiName}/${apiMethod}`, model).toPromise();
  }
}
