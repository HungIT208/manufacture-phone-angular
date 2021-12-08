import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../shared/services/phone.service'

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  data : any;
  constructor(
    private phoneService : PhoneService,
  private activeRouter : ActivatedRoute
) { }
  manufacturerId = this.activeRouter.snapshot.params.id;

  ngOnInit(): void {
    this.getListPhoneByManufacturerId();
  }

  async getListPhoneByManufacturerId(){
    const res = await this.phoneService.getListPhoneByManufacturerId(this.manufacturerId);
    if(res){
      this.data = res;
    }
  }
}
