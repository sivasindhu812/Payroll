import { Component } from '@angular/core';
//import { jsPDF } from 'jspdf';
//import pdfMake from 'pdfmake/build/pdfmake';
//import pdfFonts from 'pdfmake/build/vfs_fonts';

class Salary {
  salaryId: number;
  employeeId: number;
  basicSalary: string;
  hra: string;
  da: string;
  tax: string;
  netSalary: string;
  pf: string;
  payDate: string;
  
  constructor(salaryId: number, employeeId: number, basicSalary: string, hra: string, da: string, tax: string, netSalary: string,
    pf: string, payDate: string)
  {
    this.salaryId = salaryId;
    this.employeeId = employeeId;
    this.basicSalary = basicSalary;
    this.hra = hra;
    this.da = da;
    this.tax = tax;
    this.netSalary = netSalary;
    this.pf = pf;
    this.payDate = payDate;
  }
}

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent {
  employeeId!: number;
  employeeName!: string;
  employeeDOJ!: string;
  employeeGender!: string;
  basicSalary!: number;
  hra!: number;
  da!: number;
  netSalary!: number;
  tax!: number;
  pf!: number;
  payDate!: string;

  constructor() {
    //pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

//pdfMake.vfs = pdfFonts.pdfMake.vfs;
generatePaySlip() {
    const docDefinition = {
      content: [
      { text: 'Pay Slip', style: 'header' },
      { text: `Employee Id: ${this.employeeId}` },
      { text: `Employee Name: ${this.employeeName}` },
      { text: `Employee DOJ: ${this.employeeDOJ}` },
      { text: `Employee Gender: ${this.employeeGender}` },
      { text: `Basic Salary: ${this.basicSalary}` },
      { text: `HRA: ${this.hra}` },
      { text: `DA: ${this.da}` },
      { text: `NetSalary: ${this.netSalary}` },
      { text: `Tax: ${this.tax}` },
      { text: `PF: ${this.pf}` },
      { text: `PayDate: ${this.payDate}` }
    ],
    styles: {
      header: {
        fontSize: 22,
        bold: true,
        margin: [0, 0, 0, 10]
      }
    }
  };
  //const pdfDocGenerator = pdfMake.createPdf(docDefinition);
  //pdfDocGenerator.download('pay-slip.pdf');
}
}