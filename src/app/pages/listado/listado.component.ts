import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NintendoService } from 'src/app/services/nintendo.service';
import { Nintendo,Amiibo } from 'src/app/interfaces/amiibo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
constructor(public nintendoService:NintendoService, private router:Router){
 
}
  ngOnInit(): void {
   
    console.log(this.nintendoService.nintendo())
  }
details(tail:any){

  this.router.navigate(['/details',tail ]);
}

}

