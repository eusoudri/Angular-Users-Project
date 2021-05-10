import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular Html To Pdf ';

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;


  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('tableToPdf.pdf');
  }



}
