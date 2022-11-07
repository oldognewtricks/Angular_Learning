import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  public name = "Data Binding"
  public topic = "interpolation binding"

  public image = "/assets/shutterstock_395019136.jpg"


  onClick(){
    console.log("thank you for looking")
  }

  public value = ""
    

    
  }

