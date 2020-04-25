import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../services/computer.service';

@Component({
  selector: 'app-system-list',
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.css']
})
export class SystemListComponent implements OnInit {

  constructor(private computerService: ComputerService) { }

  get systemList() {
    return this.computerService.getSystems();
  }

  ngOnInit(): void {
  }

}
