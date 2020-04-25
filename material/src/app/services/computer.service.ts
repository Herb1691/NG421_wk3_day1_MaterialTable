import { Injectable } from '@angular/core';
import { IComputer } from '../interface/i-computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  compID = 0;
  systemList: Array<IComputer> = [
    {
      id: ++this.compID,
      systemName: 'Original',
      operatingSystem: 'Windows 10',
      systemUpdated: true,
      updatedDate: new Date(),
      virusProtection: 'AVG',
      scannedDate: new Date()
    },
    {
      id: ++this.compID,
      systemName: 'Original',
      operatingSystem: 'iOS',
      systemUpdated: false,
      updatedDate: new Date(),
      virusProtection: 'AVG',
      scannedDate: new Date()
    }
  ];

  constructor() { }

  getSystems(){
    return this.systemList;
  }
  deleteSystem(system: IComputer) {
    const index = this.systemList.findIndex(systemItem => systemItem.id === system.id);
    this.systemList.splice(index, 1);
  }
  addSystem(system: IComputer): void {
    system.id = ++this.compID;
    this.systemList.push(system);
  }
}
