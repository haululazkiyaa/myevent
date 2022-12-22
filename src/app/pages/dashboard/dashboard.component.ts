import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild("modalDescription", { static: true }) public modalDescription: any;
  @ViewChild('htmlDescription') htmlDescription: ElementRef;
  public loading: boolean;
  public data: any = [];
  public selected_item: number = 0;
  
  constructor(private service: DataService) {}
  
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;

    this.service.getData()
      .subscribe(response => {
        this.data = Object.entries(response);
        this.loading = false;
      });
  }

  openDescription(item_number: number) {
    this.selected_item = item_number;
    this.htmlDescription.nativeElement.innerHTML = this.data[item_number][1].description;
    this.modalDescription.show();
  }
}
