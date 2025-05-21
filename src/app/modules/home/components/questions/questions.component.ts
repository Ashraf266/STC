import { Component } from '@angular/core';

@Component({
  selector: 'home-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  questions: any[] = [
    {
      title: 'A tafani member has posted new question',
      author: 'Faisal Abullah Almutairi',
      status: 'Following',
      question:
        'Is it possible to demand a verification that the level of radiation emanating from a telecommunications tower complies with the regulations approved by CITC?',
    },
    {
      title: 'Faisal Reacted on this answer',
      author: 'Faisal Abullah Almutairi',
      status: 'Enabled notification',
      question:
        'Is it possible to demand a verification that the level of radiation emanating from a telecommunications tower complies with the regulations approved by CITC?',
      answer: {
        name: 'Faisal Abullah Almutairi',
        answer:
          'Here we can have, Jawwy TV Home you will get free basic package, and you will gain access to 70-free-to-air channnels and 40 encrypted channels, in addition to variety package',
        reactions: '27',
      },
    },
    {
      title: 'Faisal Reacted on this answer',
      author: 'Faisal Abullah Almutairi',
      status: 'Enabled notification',
      question:
        'Is it possible to demand a verification that the level of radiation emanating from a telecommunications tower complies with the regulations approved by CITC?',
      answer: {
        name: 'Faisal Abullah Almutairi',
        answer:
          'Here we can have, Jawwy TV Home you will get free basic package, and you will gain access to 70-free-to-air channnels and 40 encrypted channels, in addition to variety package',
        reactions: '27',
      },
    },
    {
      title: 'A tafani member has posted new question',
      author: 'Faisal Abullah Almutairi',
      status: 'Following',
      question:
        'Is it possible to demand a verification that the level of radiation emanating from a telecommunications tower complies with the regulations approved by CITC?',
    },
    {
      title: 'Faisal Reacted on this answer',
      author: 'Faisal Abullah Almutairi',
      status: 'Enabled notification',
      question:
        'Is it possible to demand a verification that the level of radiation emanating from a telecommunications tower complies with the regulations approved by CITC?',
      answer: {
        name: 'Faisal Abullah Almutairi',
        answer:
          'Here we can have, Jawwy TV Home you will get free basic package, and you will gain access to 70-free-to-air channnels and 40 encrypted channels, in addition to variety package',
        reactions: '27',
      },
    },
  ];
}
