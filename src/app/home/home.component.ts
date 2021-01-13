import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loader = true;

  ngOnInit() {
    window.scrollTo(0, 0);
    setTimeout(()=>{
      this.loader=false;
    },3000)
  }

}
