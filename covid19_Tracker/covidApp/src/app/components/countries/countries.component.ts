import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { GlobalDataSummary } from 'src/app/models/global-data';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  totalConfirmed =0;
  totalDeath =0;
  totalActive =0;
  totalRecovered =0;

  //data:GlobalDataSummary[]=[];
  dataCountry :string[]=[];
  allCountryData: any[] = [];
  raw:{} ={};

 
  pieChart :GoogleChartInterface = {
    chartType:'PieChart'
  }

  columnChart: GoogleChartInterface = {
    chartType:'columnChart'
  }
  constructor(private covidService: CovidService) { }

  initChart(){
    let datatable :any=[];
    datatable.push(["Country", "Cases"]);
    this.allCountryData.forEach((res:any) => {
    datatable.push([
        res.country, res.confirmed
      ])
    })
    console.log(datatable);
    this.pieChart = {
      chartType : 'pieChart',
      dataTable:datatable,
      options :{
        height: 500
      }
    }

    this.columnChart = {
      chartType : 'columnChart',
      dataTable:datatable,
      options :{
        height: 500
      }
    }

  }
  // public pieChart:  = {
  //   chartType: GoogleChartType.PieChart,

  //   dataTable:this.datatable,
  //   firstRowIsData: true,
  //   options: {'Country': 'Cases'},
  // };
  


  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.covidService.getGlobalData().subscribe( (res:any) => {
      //this.dataCountry = res;
      //console.log("data:",this.dataCountry);
      this.allCountryData = [];
      this.allCountryData =res;
      res.forEach( (cs:any) => {
        this.dataCountry.push(cs.country);
      })
    })
  }
  getCountryData(cs:any){
    this.raw = this.allCountryData[cs.target.selectedIndex];
    this.totalActive = this.allCountryData[cs.target.selectedIndex].active;
    this.totalConfirmed = this.allCountryData[cs.target.selectedIndex].confirmed;
    this.totalDeath = this.allCountryData[cs.target.selectedIndex].deaths;
    this.totalRecovered = this.allCountryData[cs.target.selectedIndex].recovered;
    this.initChart();
  }
}
