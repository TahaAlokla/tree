import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('dataTable') dataTable: any
  displayedColumns: string[] = ['accIndex_Name_AR', 'accIndex_Name_EN', 'c_AccountsTypes', 'children', 'branch'];
  dataSource2: any = []
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("change data table ", changes);
    this.dataSource2 = changes['dataTable'].currentValue



  }
}
