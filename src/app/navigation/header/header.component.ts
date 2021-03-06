import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.toggle.emit();
  }
}
