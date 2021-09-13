import { Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import {Post} from '../models/post'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'

})


export class PostService {

  constructor(private httpClient:HttpClient) { //por inyeccion de dependencias agrego el objeto HttpClient

  }

   private url: string = 'https://jsonplaceholder.typicode.com/posts'

  getPosts():Observable<Post[]>{
    let posts:Observable<Post[]>
     posts= this.httpClient.get<Post[]>(this.url).pipe(
     catchError(this.handleError))
    return posts;
  }

  addPost(post:Post): Observable<Post>{
    return this.httpClient.post<Post>(this.url, post, httpOptions).pipe(
      catchError(
        this.handleError));
  }

  updatePost(post:Post): Observable<Post>{
    return this.httpClient.put<Post>(this.url, post, httpOptions).pipe(
      catchError(
        this.handleError));
  }

  deletePost(id: number): Observable<unknown>{
    this.url = `https://jsonplaceholder.typicode.com/posts/${id}`
    return this.httpClient.delete(this.url, httpOptions).pipe(
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
