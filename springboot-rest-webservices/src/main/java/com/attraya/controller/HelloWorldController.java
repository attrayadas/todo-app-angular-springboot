package com.attraya.controller;

import com.attraya.dto.HelloWorld;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {

    @GetMapping(path = "hello-world-bean")
    public HelloWorld sayHelloWorld(){
        return new HelloWorld("Hello World - Attraya Changed");
//        throw new RuntimeException("Runtime Exception happened!");
    }

    @GetMapping("hello-world/path-variable/{name}")
    public HelloWorld helloWorldPathVariable(@PathVariable String name){
        return new HelloWorld(String.format("Hello World, %s", name));
    }
}
