import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NintendoService } from 'src/app/services/nintendo.service';
import {Location} from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { Amiibo, Nintendo } from 'src/app/interfaces/amiibo';



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  personaje$!:Observable<Nintendo>
  personaje!:Amiibo
  constructor(private nintendoService:NintendoService, private route:ActivatedRoute, private location:Location){

  }
    ngOnInit() {
       const selectedId = this.route.snapshot.paramMap.get('id');
  this.personaje$ = this.nintendoService.getOne(selectedId)

 this.personaje$.subscribe(data=>{
 console.log(data.amiibo[0])
  this.personaje=data.amiibo[0]
  
 })
  
    }
    onGoBack():void{
      this.location .back();
    }
  
}
