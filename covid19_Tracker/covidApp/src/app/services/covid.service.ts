import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { GlobalDataSummary } from '../models/global-data';


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private baseUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-03-2020.csv";

  public allData :[] = [];

  constructor(private http:HttpClient) { }


  getGlobalData(){
      return this.http.get(this.baseUrl, {responseType:'text'}).pipe(
        map( (result:any) =>{
          let data : GlobalDataSummary[] =[]
          let raw : any = {};
          let rows = result.split('\n');
          rows.splice(0,1);
          //console.log(rows);

          rows.forEach( (row:any) => {
              let cols = row.split(/,(?=\S)/);
              //console.log(cols);
            // data.push({
            //   country : cols[3],
            //   confirmed : cols[7],
            //   deaths : cols[8],
            //   recovered : cols[9],
            //   active : cols[10]
            // })
            let cs = {
              country : cols[3],
              confirmed : cols[7],
              deaths : cols[8],
              recovered : cols[9],
              active : cols[10]
            }
            let temp: GlobalDataSummary = raw[cs.country];
            if(temp){
              temp.active = cs.active + temp.active;
              temp.confirmed = cs.confirmed + temp.confirmed;
              temp.deaths = cs.deaths + temp.deaths;
              temp.recovered = cs.recovered + temp.recovered;

              raw[cs.country] = temp;
            }else{
              raw[cs.country]=cs;
            }
            

          })
         // console.log(raw);
          return <GlobalDataSummary>Object.values(raw);
          //this.allData = raw;
        })
      )
  }

  getGlobalDataAll(){
    if(this.allData.length == 0){
       this.getGlobalData();
    }
    return this.allData;
  }
}
