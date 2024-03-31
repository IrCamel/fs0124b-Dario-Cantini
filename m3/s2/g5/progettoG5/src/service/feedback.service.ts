import { Injectable } from '@angular/core';
import { iFeedback } from '../interface/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedback: iFeedback[] = [
    {
      "img": "../assets/anziano-1.jpg",
      "name": "Cosimo",
      "surname": "Cantini",
      "age": 98,
      "feedback": "Mi sono sentito a casa non appena ho utilizzato questa To Do List"
    },
    {
      "img": "../assets/anziana-3.jpg",
      "name": "Concetta",
      "surname": "Pecoraro",
      "age": 104,
      "feedback": "Finalmente ho un posto in cui segnare la spesa"
    },
    {
      "img": "../assets/anziano-2.jpg",
      "name": "Benito",
      "surname": "Turri",
      "age": 74,
      "feedback": "Boia de 'omè bella 'vesta to do liste de"
    },
    {
      "img": "../assets/anziana-4.jpg",
      "name": "Rosanna",
      "surname": "Sorpreso",
      "age": 89,
      "feedback": "Adesso ho un posto in cui segnarmi gli appuntamenti col signor Cosimo Cantini"
    }
  ];

  getAllFeedback(){
    return this.feedback
  }
}
