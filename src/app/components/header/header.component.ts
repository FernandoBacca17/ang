import { Component, OnInit } from '@angular/core';
import {devService} from 'src/app/services/dev.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private devApiService: devService) { }

  ngOnInit(): void {
  }

  buttonClick(){
    this.devApiService.getApi().subscribe( (response) => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  login(){
    let user = {
      email: 'alan@example.com',
      password: 'alanBR'
    }
    this.devApiService.login(user).subscribe( (response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  users(){
    this.devApiService.users().subscribe( (response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

}
