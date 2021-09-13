import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../models/post';

import {Nota} from './nota'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private url = 'http://localhost:3000/notes'

  constructor(private httpClient:HttpClient) { }

  getNotas():Observable<Nota[]>{
    let posts:Observable<Nota[]>
     posts= this.httpClient.get<Nota[]>(this.url).pipe(
     catchError(this.handleError))
    return posts;
  }

  deleteNota(id: string): Observable<unknown>{
    this.url = `http://localhost:3000/notes/${id}`
    return this.httpClient.delete(this.url).pipe(
      catchError(this.handleError));
  }

  addNota(post:Nota): Observable<Post>{
    return this.httpClient.post<Post>(this.url, post, httpOptions).pipe(
      catchError(
        this.handleError));
  }



  handleError(error: HttpErrorResponse){
    let mensaje = "Error desconocido"

    if(error.error instanceof ErrorEvent){
      mensaje = `Error: ${error.error.message}`;
    }else{
      mensaje = `Erros: ${error.status} ${error.message}`
    }
    return throwError(mensaje)
  }

}
