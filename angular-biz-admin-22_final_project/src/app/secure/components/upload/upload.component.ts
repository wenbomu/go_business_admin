import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{
  @Output() uploaded = new EventEmitter<string>();
  ngOnInit(): void {
  }

  constructor(private http: HttpClient) {
  }

  upload(event:Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file = input.files[0];
    const data = new FormData();
    data.append('image', file);

    this.http.post(`${environment.api}/upload`, data)
      .subscribe((res: any) => {
          // console.log(res)
        this.uploaded.emit(res.url);
        }
      );
  }

}
