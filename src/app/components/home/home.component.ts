import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CuisinesService } from "src/app/services/cuisines.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  cusines: Observable<any>;
  objectKeys = Object.keys;
  cusinesData: any;
  constructor(private cus_service: CuisinesService) {}

  ngOnInit() {
    this.cus_service.getCollections().subscribe((data: any) => {
      // debugger;
      this.cusinesData = data.collections;
    });
    console.log(JSON.stringify(this.cusines));
    /* .subscribe(data => {
      if (data) {
      return data;
        //debugger;
        //alert(JSON.stringify(data));
      }
    }); */
  }
}
