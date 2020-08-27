import { Component, OnInit } from '@angular/core';
import { WineListService } from 'src/app/services/wine-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Wine } from 'src/app/models/wine';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  title = 'Wine Guide';
  dataSaved = false;
  wineForm: FormGroup;
  wineList: Observable<Wine[]>;
  wineIdUpdate = null;  
  message = null;  

  constructor(private wineListService: WineListService) {}

  ngOnInit(): void {
    this.wineForm = new FormGroup({
      id: new FormControl(['']),
      name: new FormControl(['']),
      color: new FormControl(['']),
      fruit: new FormControl(['']),
      body: new FormControl(['']),
      tannin: new FormControl([''])
    });
    this.loadWineList();
  }
  loadWineList(){
    this.wineList = this.wineListService.getAllWines();
    this.wineList.subscribe(res => console.log(res));
  }
  onFormSubmit(){
    this.dataSaved = false;  
    const wine = this.wineForm.value; 
    wine.id = 0;
    console.log(wine); 
    this.CreateWine(wine);  
    this.wineForm.reset();  
  }
  CreateWine(wine: Wine) {  
    if (this.wineIdUpdate == null) {  
      this.wineListService.createWine(wine).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = 'Record saved Successfully';  
          this.loadWineList();  
          this.wineIdUpdate = null;  
          this.wineForm.reset();  
        }  
      );  
    } else {
        wine.id = this.wineIdUpdate;  
        this.wineListService.updateWine(wine).subscribe(() => {  
        this.dataSaved = true;  
        this.message = 'Record Updated Successfully';  
        this.loadWineList();  
        this.wineIdUpdate = null;  
        this.wineForm.reset();  
      });  
    }  
  }

  loadWineToEdit(Id: number){
    this.wineListService.getWineById(Id).subscribe(wine=> {  
      this.message = null;  
      this.dataSaved = false;  
      this.wineIdUpdate = wine.id;  
      this.wineForm.controls['name'].setValue(wine.name);  
     this.wineForm.controls['color'].setValue(wine.color);  
      this.wineForm.controls['fruit'].setValue(wine.fruit);  
      this.wineForm.controls['body'].setValue(wine.body);  
      this.wineForm.controls['tannin'].setValue(wine.tannin);
    });  
  }

  deleteWine(Id: number){
    if (confirm("Are you sure you want to delete this ?")) {   
      this.wineListService.deleteWine(Id).subscribe(() => {  
        this.dataSaved = true;  
        this.message = 'Record Deleted Succefully';  
        this.loadWineList();  
        this.wineIdUpdate = null;  
        this.wineForm.reset();  
      });
    }  
  }

  resetForm(){
    this.wineForm.reset();  
    this.message = null;  
    this.dataSaved = false; 
  }

}
