import { Component, EventEmitter, Output } from '@angular/core';
import {LoginService} from '../login/loginServices'
import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {
  @Output() menuClicked = new EventEmitter<boolean>();
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
