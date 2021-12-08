import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService extends BaseService {

  constructor(
    protected httpClient: HttpClient,
  ) {
    super(httpClient, environment.url, 'manufacturers');
  }

  async getAllManufacturer() {
    let params = new HttpParams();
    const res = await this.getCustomApi('GetAll', params);
    return res;
  }
}
