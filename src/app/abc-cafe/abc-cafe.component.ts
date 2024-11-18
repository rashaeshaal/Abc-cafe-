import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-abc-cafe',
  templateUrl: './abc-cafe.component.html',
  styleUrls: ['./abc-cafe.component.css']
})
export class AbcCafeComponent implements OnInit {
  customerName: string = ''; 
  orderInquiryActive: boolean = false;
  beverages: any[] = []; 
  selectedBeverages: any[] = []; 
  orderSummary: any[] = [];
  totalPrice: number = 0; 
  orderPlaced: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
    this.http.get<any[]>('http://localhost:3000/products').subscribe((data) => {
      this.beverages = data; 
    });
  }

  
  askOrder() {
    if (this.customerName.trim()) {
      this.orderInquiryActive = true; 
    }
  }

 
  toggleSelection(beverage: any, event: any) {
    if (event.target.checked) {
      this.selectedBeverages.push(beverage); 
    } else {
      
      this.selectedBeverages = this.selectedBeverages.filter(b => b.id !== beverage.id);
    }
  }

 
  placeOrder() {
    if (this.selectedBeverages.length > 0 && this.customerName.trim()) {
    
      this.totalPrice = 0;

      this.selectedBeverages.forEach((beverage) => {
        const order = {
          customerName: this.customerName,
          beverage: beverage.name,
          price: beverage.price
        };
        this.orderSummary.push(order); 

       
        this.totalPrice += beverage.price;
      });

      this.orderPlaced = true; 
      this.orderInquiryActive = false; 
    }
  }

 
  resetOrder() {
    this.customerName = '';
    this.selectedBeverages = [];
    this.orderSummary = [];
    this.orderPlaced = false; 
    this.orderInquiryActive = false;
  }
}
