import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-test-technique-chips',
  templateUrl: './test-technique-chips.component.html',
  styleUrls: ['./test-technique-chips.component.scss'],
  standalone: true,
  imports: [CommonModule, ChipModule],
})
export class TestTechniqueChipsComponent implements OnInit {

  @Input() href: string = '';
  @Input() label: string = '';

  constructor() { }

  ngOnInit() {
  }

}
