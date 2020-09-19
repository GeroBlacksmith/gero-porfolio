import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string = 'Gerardo Herrera';
  title: string = `Hi, my name is Gerardo Herrera.`;
  description: string = 'Fullstack developer in Javascript technologies.'
  imgUrl: string = 'https://avatars3.githubusercontent.com/u/7440621?s=460&u=815c7d633ff71a229fe791a63d3fb4e3a68eed2f&v=4';
  
}
