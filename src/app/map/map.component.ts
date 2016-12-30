import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  userLanguage: string;
  people: Array<Object>;
  content: Array<Object>;
  timeouts: Array<Object>;
  questionBeenAnswered: number;  
  constructor(private http: Http) {
    this.getData();
  }

  ngOnInit() {
    this.userLanguage = 'en';
    this.timeouts = [];
  }

  getData(): void {
    this.http.request('assets/data.json')
      .subscribe((res: Response) => {
        this.people = res.json().people;
        this.content = res.json().content;
      })
  }

  questionBeenAsked(data: Object) {
    console.log('question been asked=' + data['requestId']);
    console.log('sender=' + data['senderIndex']);
    //this.questionBeenAnswered = requestId;
  }

}
