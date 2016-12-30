import { Component, OnInit, OnChanges, SimpleChanges, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map-item',
  outputs: ['questionBeenAsked'],
  templateUrl: './map-item.component.html',
  styleUrls: ['./map-item.component.scss']
})
export class MapItemComponent implements OnInit, OnChanges {
  @Input() userLanguage: string;
  @Input() person: Object;
  @Input() content: Array<Object>;
  @Input() timeouts: Array<Object>;
  @Input() index: number;
  @Input() questionBeenAnswered: String;

  request: Object;
  response: Object;
  showRequestBubble: boolean;
  showResponseBubble: boolean;
  questionBeenAsked: EventEmitter<Object>;

  constructor() {
    this.questionBeenAsked = new EventEmitter();
    this.showRequestBubble = false;
    this.showResponseBubble = false;
    
  }

  ngOnInit() {
    // Persons avatars fade-in with random delay
    setTimeout(()=>{
      this.person['opacity'] = 1;
    }, Math.floor(Math.random() * 900) + 1 )

    this.request = this.content[this.person['requestId']];
    //this.response = this.content[this.person['responseId']];
  }

  clickOnPerson() {
    this.showRequestBubble = true;
    this.questionBeenAsked.emit({'senderIndex': this.index, 'requestId': this.person['requestId']});
  }

  clickOnResponse() {
    console.log('clickOnResponse');
  }

  // listen for question
  ngOnChanges(changes: SimpleChanges) {
    console.log('AfterCmp - OnChanges');
    let chng = changes['questionBeenAnswered'];
    let cur  = JSON.stringify(chng.currentValue);
    let prev = JSON.stringify(chng.previousValue);
    console.log('cur='+cur, 'prev='+prev);
  }


}
