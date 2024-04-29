
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  helloText: string =
"Welcome to my website! Here I showcase my projects, crafted with a passion for code and attention to detail. Utilizing modern technologies, I aim for each project to be not only visually appealing but also functional. Let's get acquainted?";


  getHelloText(): string {
    return this.helloText;
  }
}
