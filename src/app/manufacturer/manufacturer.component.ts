import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManufacturerService } from '../shared/services/manufacturer.service'

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  constructor(
    private router: Router,
    private manufacturerService : ManufacturerService
  ) { }

  data : any;

  ngOnInit(): void {
    this.getAllManufacturer();
  }

  handleClickManufacturer(id: number){
    this.router.navigate([`phone/${id}`])
  }

  async getAllManufacturer(){
    const res = await this.manufacturerService.getAllManufacturer();
    if(res){
      this.data = res;
    }
  }
}
