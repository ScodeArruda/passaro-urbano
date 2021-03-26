import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'scode-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pesquisa(event: Event): void {
    console.log((<HTMLInputElement>event.target).value)
  }

}
