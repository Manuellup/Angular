import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dato2 : string = "dato del menu component"
  constructor() { }

  ngOnInit(): void {
  }

}
