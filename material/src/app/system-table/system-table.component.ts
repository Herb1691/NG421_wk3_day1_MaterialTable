import { Component, OnInit, ViewChild } from '@angular/core';
import { ComputerService } from '../services/computer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-system-table',
  templateUrl: './system-table.component.html',
  styleUrls: ['./system-table.component.css']
})
export class SystemTableComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'systemName',
    'operatingSystem',
    'systemUpdated',
    'updatedDate',
    'virusProtection',
    'scannedDate'
  ];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  dataSource = new MatTableDataSource(this.computerService.systemList);

  constructor(private computerService: ComputerService) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
