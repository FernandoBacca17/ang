import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang';
  public listdevacunas:Array<any> = []

  constructor(private RestService:RestService){

  }

  ngOnInit(): void{
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('https://evening-badlands-77809.herokuapp.com/api/vacunas')
    .subscribe(respuesta => {
      console.log(respuesta);
    })
  }
}
