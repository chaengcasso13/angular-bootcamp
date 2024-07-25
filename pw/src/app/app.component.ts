import { AfterViewInit, Component, ElementRef, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import * as html2pdfx from 'html2pdf.js';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { NgxExtendedPdfViewerComponent } from 'ngx-extended-pdf-viewer';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  isVisible = false;

  @ViewChild('pdfViewer', { static: false }) pdfViewer!: NgxExtendedPdfViewerComponent;
  @ViewChild('content', { static: false }) content!: ElementRef;
  @ViewChild('letterheadTemplate', { static: false }) letterheadTemplate!: TemplateRef<any>;
  @ViewChild('letterheadContent', { static: false }) letterheadContent!: ElementRef;
  pdfSrc: string | undefined;
  public showFreeFloatingBar = true;
  public zoom = '100%';

  tableData = Array.from({ length: 100 }, (_, i) => ({
    name: `Name ${i}`,
    email: `email${i}@example.com`,
    country: `Country ${i}`
  }));

  /**
   *
   */
  constructor(private renderer: Renderer2) {
    
  }

  ngAfterViewInit() {
    // Ensure the letterhead component is ready
    if (this.letterheadTemplate) {
      console.log('Letterhead template is ready:', this.letterheadTemplate);
    }
  }

  // #region on events
  onChangeLength(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue))
      this.length = parsedValue;

    else {
      this.length = 0;
      this.password = '';
    }

    console.log(this.length);
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters)
      validChars += letters;

    if (this.includeNumbers)
      validChars += numbers;

    if (this.includeSymbols)
      validChars += symbols;

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);

      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
  // #endregion

  // generate pdf sample
  generatePDF() {
    // #region first try
    // // Create a new jsPDF instance with landscape orientation
    // const doc = new jsPDF({
    //   orientation: 'landscape'
    // });

    // // Generate some data for the table
    // const head = [['Name', 'Email', 'Country']];
    // const body = [];
    // for (let i = 0; i < 100; i++) {
    //   body.push([`Name ${i}`, `email${i}@example.com`, `Country ${i}`]);
    // }

    // // Add a table
    // (doc as any).autoTable({
    //   head: head,
    //   body: body,
    //   didDrawPage: (data:any) => {
    //     // Add page number in the footer
    //     const pageCount = (doc as any).internal.getNumberOfPages();
    //     doc.setFontSize(10);
    //     doc.text(`Page ${pageCount}`, data.settings.margin.left, doc.internal.pageSize.height - 10);
    //   }
    // });

    // // Generate PDF and convert to Blob URL
    // const pdfOutput = doc.output('blob');
    // this.pdfSrc = URL.createObjectURL(pdfOutput);
    // #endregion

    // #endregion

  }
}
function html2pdf() {
  throw new Error('Function not implemented.');
}

