import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message: string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    console.log("Inside executeHelloWorldBeanService()")
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string){
    console.log("Inside executeHelloWorldBeanServiceWithPathVariable()")
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
}
