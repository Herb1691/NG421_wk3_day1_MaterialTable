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
      systemName: 'Appool',
      operatingSystem: 'iOS',
      systemUpdated: false,
      updatedDate: null,
      virusProtection: 'AVG',
      scannedDate: new Date()
    },
    {
      id: ++this.compID,
      systemName: 'Windy',
      operatingSystem: 'Windows 10',
      systemUpdated: true,
      updatedDate: new Date(),
      virusProtection: 'Norton',
      scannedDate: new Date()
    },
    {
      id: ++this.compID,
      systemName: 'Orange',
      operatingSystem: 'iOS',
      systemUpdated: true,
      updatedDate: new Date(),
      virusProtection: 'Norton',
      scannedDate: new Date()
    },
    {
      id: ++this.compID,
      systemName: 'Doors',
      operatingSystem: 'Windows 10',
      systemUpdated: false,
      updatedDate: null,
      virusProtection: 'Symantec',
      scannedDate: new Date()
    },
    {
      id: ++this.compID,
      systemName: 'Banana',
      operatingSystem: 'iOS',
      systemUpdated: false,
      updatedDate: null,
      virusProtection: 'Norton',
      scannedDate: new Date()
    },
    {
      id: ++this.compID,
      systemName: 'Floor',
      operatingSystem: 'Windows 10',
      systemUpdated: true,
      updatedDate: new Date(),
      virusProtection: 'AVG',
      scannedDate: new Date()
    },
    {
      id: ++this.compID,
      systemName: 'Melon',
      operatingSystem: 'iOS',
      systemUpdated: true,
      updatedDate: new Date(),
      virusProtection: 'Symantec',
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
