import { AccountingService } from './../../services/accounting.service';
import { Component, OnInit } from '@angular/core';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeNestedDataSource,
} from '@angular/material/tree';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

interface Node {
  accIndex_Code: number;
  accIndex_Name_AR: string;
  accIndex_Name_EN: string;
  accIndex_NodeType_FK: number;
  accIndex_Number: any;
  accIndex_Type_FK: any;
  c_AccountsTypes: any;
  accIndex_Form_FK?: any;
  c_AccountsForms?: any;
  accIndex_AppearIN_FK?: any;
  is_transferred?: false;
  branch_No?: any;
  branch?: any;
  accIndex_Parent_Code_FK?: any;
  accountsIndex_Parent?: any;
  children?: Node[];
}

// export interface TreeNode {
//   id: string;
//   name: string;
//   level: number;
//   expandable: boolean;
// }
@Component({
  selector: 'app-accounting-section',
  templateUrl: './accounting-section.component.html',
  styleUrls: ['./accounting-section.component.scss'],
})
export class AccountingSectionComponent implements OnInit {
  AccountingTreeApi!: Subscription;
  getNodeApi!: Subscription;
  showTable = false
  treeControl = new NestedTreeControl<Node>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();
  treeControl1 = new NestedTreeControl<Node>((node) => node.children);
  dataSource1 = new MatTreeNestedDataSource<Node>();
  TREE_DATA: Node[] = [];
  // ********************************
  displayedColumns: string[] = ['accIndex_Name_AR', 'accIndex_Name_EN', 'c_AccountsTypes', 'children', 'branch'];
  dataSource2: any = []

  constructor(private AccountingService: AccountingService,) { }





  ngOnInit(): void {
    // this.dataSource.data = this.TREE_DATA;
    this.getTree();
  }
  hasChild = (_: number, node: Node) =>
    !!node.children && node.children.length > 0;

  getTree() {
    this.AccountingTreeApi = this.AccountingService.getAccountsIndex().subscribe((data: any) => {
      this.TREE_DATA = [data]
      this.dataSource.data = this.TREE_DATA;
      this.showTable = true
    }, error => {
      console.error("error", error);

      this.TREE_DATA = []
    })

  }

  getNode(id: string, type: string) {
    console.log(id);
    this.getNodeApi = this.AccountingService.getAccountingNode(id).subscribe({
      next: (data: any) => {
        console.log('data childe', data);

        this.dataSource2 = data?.children
        console.log("  this.dataSource2 ", this.dataSource2);

        // this.dataSource1.data = [data];
      },
      error: (err) => { },
    });
  }

  getNodeTable(id: string, type: string) {
    // for flied table !
    console.log('table here ', id);
  }
  ngOnDestroy(): void {
    if (this.getNodeApi) this.getNodeApi.unsubscribe()
    if (this.AccountingTreeApi) this.AccountingTreeApi.unsubscribe();
  }
}
