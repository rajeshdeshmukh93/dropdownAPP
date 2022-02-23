import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { GlobalDataSummary } from 'src/app/models/global-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed =0;
  totalDeath =0;
  totalActive =0;
  totalRecovered =0;
  totalcountry : string;
  countryData: GlobalDataSummary[] = [];

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.covidService.getGlobalData().subscribe((res: any) => {
      console.log(res);
      this.countryData = res;
      this.countryData.forEach((cs: any) => {
        if (!Number.isNaN(cs.confirmed)) {
          this.totalActive += cs.active;
          this.totalConfirmed += cs.confirmed;
          this.totalDeath += cs.deaths;
          this.totalRecovered += cs.recovered;
         // this.totalcountry += cs.country;
        }

      //  console.log(this.totalcountry);

      })


    })
  }

}
