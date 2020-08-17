import { Component, OnInit } from '@angular/core';
import { WineListService } from 'src/app/services/wine-list.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  public wineList;
  constructor(private wineListService: WineListService) {
    wineListService.getAll().subscribe(data => {
      console.log(data);
      this.wineList = data;
    });
      
    
  }

  ngOnInit(): void {
  }

}
