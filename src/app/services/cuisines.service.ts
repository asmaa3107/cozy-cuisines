import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class CuisinesService {
  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;
  constructor(public http: HttpClient) {
    console.log("Hello NewsProvider Provider");
  }
  //using HttpClientModule
  getCusinies() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "user-key": "51c4d4824dbf0cd82bbf67911cfe7c14"
      })
    };
    return this.http.get(
      "https://developers.zomato.com/api/v2.1/collections?city_id=280",
      httpOptions
    );
  }
  getCollections() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "user-key": "51c4d4824dbf0cd82bbf67911cfe7c14"
      })
    };
    return this.http.get(
      "https://developers.zomato.com/api/v2.1/collections?city_id=280",
      httpOptions
    );
  }
  getAll() {
    return this.http.get(
      "https://developers.zomato.com/api/v2.1/cuisines?city_id=280&user-key=51c4d4824dbf0cd82bbf67911cfe7c14"
    );
  }
  getCategoriesArticals(cate_name: string) {
    return this.http.get(this.apiUrl + "/categories" + "/:c_name");
  }
}
