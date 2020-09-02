import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './../../models/user.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableColumn } from 'src/app/models/data-table.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  private tableDataSubject: BehaviorSubject<User[]> = new BehaviorSubject(null);
  tableData$: Observable<User[]> = this.tableDataSubject.asObservable();
 
  @Input() columns: TableColumn[];
  @Input() set data(tableData: User[]) {
    if(tableData) {
      this.tableDataSubject.next(tableData);
    }
  }

  @Output() editBtnEvent: EventEmitter<User[]> = new EventEmitter<User[]>()

  get keys() { return this.columns.map(({ name }) => name); }

  constructor() { }

  ngOnInit(): void {
  }

  onEditBtnClick(data: User[]): void {
    this.editBtnEvent.emit(data)
  }

}
