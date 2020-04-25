import { Component, OnInit, Input } from '@angular/core';
import { ComputerService } from '../services/computer.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  @Input() system;
  constructor(private computerService: ComputerService) { }

  ngOnInit(): void {
  }

  deleteSystem(system) {
    this.computerService.deleteSystem(system);
  }

}
