import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-theming-task';
  theme = 'theme-one';

  constructor() {
    if (localStorage.getItem('themeSelection') === null) {
      localStorage.setItem('themeSelection', 'theme-one');
    } else {
      this.theme = localStorage.getItem('themeSelection');
    }
  }

  themeChanging(theme) {
    this.theme = theme;
    localStorage.setItem('themeSelection', this.theme);
  }

}
