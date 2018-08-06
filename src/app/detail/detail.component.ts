import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  paramValue: any = {};
  formData: any = {};
  requestObj: any = {};
  detailData: any = {};
  pageData: any = {};
  constructor(private route: ActivatedRoute, private httpService: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => { this.paramValue = params });
    console.log("this.paramvalue", this.paramValue);

    this.httpService.get('./assets/pageJson/' + this.paramValue.id + '.json').subscribe(
      data => {
        this.pageData = data;
        console.log("suksha detail", this.pageData);
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        this.requestObj._id = this.paramValue.paramId;
        // this.requestObj.filter = {};
        this.httpService.post("http://freshflow.io/api/" + this.pageData.preApi.url,
          this.requestObj, httpOptions
        )
          .subscribe(data => { this.detailData = data['data'].order; console.log("detailData: ", this.detailData) },
            error => { alert("Error"); }
          );
      })

  }

}
