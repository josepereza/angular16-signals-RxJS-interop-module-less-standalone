import { HttpClient } from '@angular/common/http';
import { Injectable, Signal,Injector } from '@angular/core';
import { Amiibo, Nintendo } from '../interfaces/amiibo';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';


@Injectable(
  // { providedIn: 'root'}
)
export class NintendoService {

  constructor(private http:HttpClient, private injector: Injector) { }

 
    public nintendo:Signal<Amiibo[]>= toSignal(this.http.get<Nintendo>('https://amiiboapi.com/api/amiibo/?name=mario').pipe(map((res: any) => res.amiibo)))
   
   
  
}

