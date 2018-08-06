import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router';//router:to navigate to other url ;ActivatedRoute:to get parameter value
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-pagejson',
  templateUrl: './pagejson.component.html',
  styleUrls: ['./pagejson.component.css']
})
export class PagejsonComponent implements OnInit {
  pageData: any = {};
  requestData: any = {};
  foundData: any = {};
  paramValue;
  constructor(private route: ActivatedRoute, private httpService: HttpClient, private router: Router) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => { this.paramValue = params });
    console.log("this.paramValue", this.paramValue);

    this.httpService.get('./assets/pageJson/' + this.paramValue.id + '.json').subscribe(
      data => {
        this.pageData = data;
        console.log("suksha 2", this.pageData);
        // if (this.pageData.pageType !== 'view') {
        //   this.router.navigate(["sample"]);
        // }
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        this.requestData.page = 1;
        this.requestData.filter = {};
        this.httpService.post("http://freshflow.io/api/" + this.pageData.apiCall.url,
          this.requestData, httpOptions
        )
          .subscribe(data => { this.foundData = data['data'].results; console.log("foundData: ", this.foundData) },
            error => { alert("Error"); }
          );

      });




  }

  onSelect(item) {
    if (item._id) {
      this.router.navigate(['/detail/' + this.pageData.action[0].action + '/' + item._id]);
    }
  }

}
