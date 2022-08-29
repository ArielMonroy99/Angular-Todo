import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }

  getTodos(){
    return this.http.get<any>(Config.apiUrl+'/todo')
  }

  getTodo(id:number){
    return this.http.get<any>(Config.apiUrl+'/todo/'+id)
  }

  saveTodo(todo:any){
    return this.http.post<any>(Config.apiUrl+'/todo', todo)
  }
}
