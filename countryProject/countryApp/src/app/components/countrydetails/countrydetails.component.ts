import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { UserService } from 'src/app/services/user.service';
import { GoogleChartInterface, GoogleChartType  } from 'ng2-google-charts';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent implements OnInit {

  public flag :boolean = false;
  countryData: any[] = [];
  value : boolean = false;

  //piechart
  // public pieChart: GoogleChartInterface = {
  //   chartType: 'piechart'
  // }

  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Task', 'Hours per Day'],
      ['population', 10353442]
      // ['Work',     11],
      // ['Eat',      2],
      // ['Commute',  2],
      // ['Watch TV', 2],
      // ['Sleep',    7]
    ],
    //firstRowIsData: true,
    options: {'title': 'Tasks'},
  };

  constructor(private route: ActivatedRoute, private userService: UserService) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      //console.log(params);
      let countryName = params.get('name.commom');
      this.userService.searchCountry(countryName).subscribe((a: any) => {
        console.log(a);
        this.countryData = a;
        this.initChart();
      })
    })  
  }

  
  initChart() {
    // let dataraw: any[] = [];
    // dataraw.push(["Country", "Population"]);
    // this.countryData.forEach((a: any) => {
    //   console.log(a);
    //   dataraw.push([
    //   //  [ "name", a.name.common],
    //     ["name" , 1000],
    //     ["population", a.population]
    //   ])
    // })

    // console.log(dataraw);

    // this.pieChart = {
    //   chartType: 'piechart',
    //   dataTable: dataraw,
    //   //firstRowIsData: true,
    //   options: { 'Country': 'Population' },
    // };
   
  }
}


