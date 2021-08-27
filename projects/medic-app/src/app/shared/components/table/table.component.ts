import {
    AfterContentInit,
    Component,
    ContentChildren,
    Input,
    OnInit,
    QueryList,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { MatColumnDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { MetaDataColumn } from '../../interfaces/metadatacolumn.interface';

@Component({
    selector: 'med-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentInit {
    @Input('data') data: any[] = [];
    @Input('metaDataColumns') metaDataColumns: MetaDataColumn[] = [];
    @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
    @ContentChildren(MatColumnDef, { descendants: true }) columnsDef!: QueryList<MatColumnDef>;
    dataSource!: MatTableDataSource<any>;
    fields: string[] = [];

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        this.loadData();
    }

    ngOnInit(): void {
        this.fields = this.metaDataColumns.map((el) => el.field);
        this.loadData();
    }

    loadData() {
        this.dataSource = new MatTableDataSource(this.data);
    }

    ngAfterContentInit(): void {
        if (this.columnsDef.length === 0) {
            return;
        }
        this.columnsDef.forEach((columnDef) => {
            this.table.addColumnDef(columnDef);
            this.fields.push(columnDef.name);
        });
    }
}
