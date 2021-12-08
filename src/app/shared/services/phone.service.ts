import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PhoneService extends BaseService {

  constructor(
    protected httpClient: HttpClient,
  ) {
    super(httpClient, environment.url, 'phones');
  }

  async getListPhoneByManufacturerId(id: number) {
    let params = new HttpParams();
    params = params.append("manufacturerId", id + "")
    const res = await this.getCustomApi('manufacturer', params);
    return res;
  }
}
