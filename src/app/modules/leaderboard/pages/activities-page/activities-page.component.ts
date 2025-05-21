import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrl: './activities-page.component.scss',
})
export class ActivitiesPageComponent {
  activities: any[] = [
    { activity: 'Ask a Question', points: '100' },
    { activity: 'Submit a Survey', points: '200' },
    { activity: 'Follow a new memeber', points: '40' },
    { activity: 'Answer a question', points: '80' },
    { activity: 'First login', points: '55' },
    { activity: 'Add feedback/Idea', points: '17' },
    { activity: 'Reply an answer', points: '20' },
    { activity: 'React on answer/reply', points: '15' },
  ];
}
