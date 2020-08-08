import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient)
  {

  }
  title = 'ApiExUI';
  onSubmit(data){
    if(data.acmt!=undefined && data.metadata!=""){
      console.warn(data.acmt)
      this.http.post('http://localhost:8100/publish',data.acmt,{headers:{'Content-Type': 'application/xml;charset=UTF-8'}}).subscribe((result)=>
      {
        console.warn(result)
      }
      )
    }
    if(data.metadata!=undefined && data.metadata!=""){
      console.warn(data.metadata)
      this.http.post('http://localhost:8100/publish',data.metadata,{headers:{'Content-Type': 'application/xml;charset=UTF-8'}}).subscribe((result)=>
      {
        console.warn(result)
      }
      )
    }
   
   // console.warn(data)
  }
}
