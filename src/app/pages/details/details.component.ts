import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NintendoService } from 'src/app/services/nintendo.service';
import {Location} from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { Amiibo } from 'src/app/interfaces/amiibo';



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  personaje$!:Observable<any>
  constructor(private nintendoService:NintendoService, private route:ActivatedRoute, private location:Location){

  }
    ngOnInit() {
       const selectedId = this.route.snapshot.paramMap.get('id');
  this.personaje$ = this.nintendoService.getOne(selectedId)

 this.personaje$.subscribe(data=>{
  console.log(data)
 })
  
    }
    onGoBack():void{
      this.location .back();
    }
  
}
