import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { OptionsExport } from '../../interfaces/options-export.interface';
import * as XLSX from 'xlsx';

declare var require: any;
const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
    selector: 'med-download',
    templateUrl: './download.component.html',
    styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) private data: OptionsExport,
        private reference: MatBottomSheetRef<DownloadComponent>
    ) {}

    ngOnInit(): void {}
    export(event: Event, option: string, action: string = '') {
        event.preventDefault();
        switch (option) {
            case 'pdf':
                this.exportToPdf(action);
                break;
            case 'excel':
                this.exportToExcel();
                break;
            default:
                break;
        }
    }
    exportToPdf(action: string) {
        const dataToExport = this.data.dto.mapping(this.data.content);
        const informationFormatted: any = this.getInformationFormatted(dataToExport);
        const docGenerated = pdfMake.createPdf(informationFormatted);
        switch (action) {
            case 'open':
                docGenerated.open();
                break;
            case 'download':
                docGenerated.download();
                break;
            case 'print':
                docGenerated.print();
                break;
            default:
                break;
        }
    }
    exportToExcel() {
        const dataToExport = this.data.dto.mapping(this.data.content);
        const sheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
        const book: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(book, sheet, this.data.title);
        XLSX.writeFile(book, this.data.fileName + '.xlsx');
        this.reference.dismiss();
    }
    getInformationFormatted(dataToExport: any) {
        const dataFormatted = {
            content: [{ text: this.data.title, bold: true, fontSize: 20, alignment: 'center', margin: [0, 0, 0, 20] }]
        };
        this.addHeadersToPDF(dataFormatted, dataToExport[0]);
        this.addItemsToPDF(dataFormatted, dataToExport);
        return dataFormatted;
    }
    addHeadersToPDF(dataFormatted: any, headerData: any) {
        const headersColumns = [];
        for (const prop in headerData) {
            headersColumns.push({ text: prop, style: 'header' });
        }
        dataFormatted.content.push({ columns: headersColumns });
    }
    addItemsToPDF(dataFormatted: any, contentData: any) {
        contentData.forEach((item: any) => {
            const items = [];
            for (const prop in item) {
                items.push(item[prop]);
            }
            dataFormatted.content.push({ columns: items });
        });
    }
}
