import { Component } from '@angular/core';
import { FeedbackService } from '../../../service/feedback.service';
import { iFeedback } from '../../../interface/feedback.interface';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
feedbacks: iFeedback[] = []


constructor(private feedbackSvc: FeedbackService){}

ngOnInit(){
  this.feedbacks = this.feedbackSvc.getAllFeedback()
}
}
