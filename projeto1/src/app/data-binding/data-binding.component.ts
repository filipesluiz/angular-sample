import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  styles: [`
    .highlight {
      background-color:yellow;
      font-weight:bold;
    }
    
  `]
})
export class DataBindingComponent implements OnInit {

  urlImagem:string = 'https://i.picsum.photos/id/866/200/300.jpg';

  inputValue:string;
  isMouseOver:boolean;
  nameTwoWay:string = 'abc';

  constructor() { }

  ngOnInit(): void {
  }

  buttomClick(){
    alert('buttom clicked!');
  }

  onKeyUp(event: KeyboardEvent){
    this.inputValue = (<HTMLInputElement> event.target).value;
  }

  onMonseOverOut(value: boolean){
    this.isMouseOver = value;
  }

}
