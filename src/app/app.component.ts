import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {
    setTimeout(() => {
      document.body.getElementsByClassName('splash')[0].classList.add('hide');
    }, 2000);
  }

}
