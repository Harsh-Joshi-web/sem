import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sem';
menuClicked: any;
showHead:boolean=true;

  constructor(private router:Router){

    router.events.forEach((event)=>{

      if(event instanceof NavigationStart){

        if(event['url']==('/')){

          this.showHead=false;

        }

        else{

          this.showHead=true;

        }

}

}); }
}


