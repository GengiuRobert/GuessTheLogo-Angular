import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gamewon',
  imports: [],
  templateUrl: './gamewon.component.html',
  styleUrl: './gamewon.component.css'
})
export class GamewonComponent {

  constructor(private router:Router){}

  goBackHome(){
    this.router.navigate(['/home']);
  }

}
