import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListServiceService {
  apiUrl = 'http://www.mocky.io/v2/5a8b88a83200009e231abec8';

  constructor(private http: HttpClient) {}

    getData(): void {
      this.http.get(this.apiUrl).subscribe(data => {
        console.log(data);
      });
    }


}
