import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message ='Some welcome message';
  welcomeMessageFromService: string;
  name =''

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log("get welcome message")
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfullResponse(response), 
      error => this.handleErrorResponse(error)
    );

    console.log("last line of getWelcomeMessage")
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfullResponse(response), 
      error => this.handleErrorResponse(error)
    );

    console.log("last line of getWelcomeMessage")
  }

  handleSuccessfullResponse(response: any){
    this.welcomeMessageFromService = response.message;
    //console.log(response.message);
  }

  handleErrorResponse(error: any){
    console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.message
  }

  

}
