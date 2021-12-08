import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ChapterService extends BaseService {

  constructor(
    protected httpClient: HttpClient,
  ) {
    super(httpClient, environment.url, 'Chapter');
  }


  async getListChapter(keySearch: any, province: any, region: any, pageNum: any, pageSize: any) {
    let params = new HttpParams();
    params = params.append('keySearch', keySearch + '');
    params = params.append('province', province + '');
    params = params.append('region', region + '');
    params = params.append('pageNum', pageNum + '');
    params = params.append('pageSize', pageSize + '');
    const res = await this.getCustomApi('GetListChapter', params);
    return res;
  }

  async getDetailChapter(chapterId: any) {
    let params = new HttpParams();
    params = params.append('chapterId', chapterId + '');
    const res = await this.getCustomApi('GetDetailChapter', params);
    return res;
  }

  async createChapter(model: Chapter) {
    const res = await this.postCustomApi('CreateChapter', model);
    return res;
  }

  async updateChapter(model: Chapter) {
    const res = await this.postCustomApi('UpdateChapter', model);
    return res;
  }

  async deEnableChapter(chapterId: any) {
    let params = new HttpParams();
    params = params.append('chapterId', chapterId + '');
    const res = await this.getCustomApi('DeEnableChapter', params);
    return res;
  }

  async deActiveChapter(chapterId: any) {
    let params = new HttpParams();
    params = params.append('chapterId', chapterId + '');
    const res = await this.getCustomApi('DeActiveChapter', params);
    return res;
  }

  async dropdownChapterMobile() {
    let params = new HttpParams();
    const res = await this.getCustomApi('DropdownChapterMobile', params);
    return res;
  }


  async getChapterInformation(chapterId: any) {
    let params = new HttpParams();
    params = params.append('chapterId', chapterId + '');
    const res = await this.getCustomApi('GetChapterInformation', params);
    return res;
  }

  async getDetailMemberChapter(businessId: any) {
    let params = new HttpParams();
    params = params.append('businessId', businessId + '');
    const res = await this.getCustomApi('GetDetailMemberChapter', params);
    return res;
  }


}
