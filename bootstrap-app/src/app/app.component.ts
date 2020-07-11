import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap-app';
  images: Object = {
    cnn: "assets\images\bg00.jpg",
    msnbc: "assets\images\msnbc.png",
    mtv: "assets\images\mtv-news.png"
  }

  cnn = "assets\images\bg00.jpg";
}
