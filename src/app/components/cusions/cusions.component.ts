import { CuisinesService } from "./../../services/cuisines.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-cusions",
  templateUrl: "./cusions.component.html",
  styleUrls: ["./cusions.component.scss"]
})
export class CusionsComponent implements OnInit {
  cusines: Observable<any>;

  constructor(public cus_service: CuisinesService) {}

  ngOnInit() {
    //this.cusines = 
    this.cus_service.getAll().subscribe(c => console.log(c));
  }
}
