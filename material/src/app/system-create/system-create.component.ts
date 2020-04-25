import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../services/computer.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-system-create',
  templateUrl: './system-create.component.html',
  styleUrls: ['./system-create.component.css']
})
export class SystemCreateComponent implements OnInit {

  sysName: '';
  opSys: '';
  updated: false;
  dateUpdated: Date = new Date();
  virusProtSoftware: '';
  dateScanned: Date = new Date();

  calenderModel: NgbDateStruct;
  date: { year: number, month: number };

  calendarIcon = faCalendar;

  constructor(private computerService: ComputerService, private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }

  addSystem(): void {
    this.computerService.addSystem({
      systemName: this.sysName,
      operatingSystem: '',
      systemUpdated: false,
      updatedDate: new Date(),
      virusProtection: '',
      scannedDate: new Date()
    });

    // resets our variables
    this.sysName = '';
    this.opSys = '';
    this.updated = false;
    this.dateUpdated = new Date();
    this.virusProtSoftware = '';
    this.dateScanned = new Date();
  }

}
