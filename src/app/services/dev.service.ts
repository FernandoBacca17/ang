import { Injectable } from  '@angular/core';
import {HttpClient} from '@angular/common/http';
import {timeout} from 'rxjs/operators';

@Injectable({
    providedIn:  'root'
})

export class devService {

    urlAWS = 'http://ec2-54-237-187-196.compute-1.amazonaws.com:3000';
    
    constructor(private http: HttpClient) { }

    getApi(){
        return this.http.get(this.urlAWS, {headers: {'Content-Type': 'application/json'}}).pipe(timeout(5000));
    }

    login(user: any){
        let request = {
            email: user.email,
            password: user.password
        }
        return this.http.post(this.urlAWS + '/login', request, {headers: {'Content-Type': 'application/json'}}).pipe(timeout(5000));
    }

    users(){
        return this.http.get(this.urlAWS + '/users', {headers: {'Content-Type': 'application/json', 'gfg_token_header_key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Im5hbWUiOiJBbGFuIiwibGFzdF9uYW1lIjoiQnJpdG8iLCJlbWFpbCI6ImFsYW5AZXhhbXBsZS5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRreUdDVE1MYnc3eWVnelBnMUZrbVdld0UyaTNaTzNDODRwakpsLk9JdmJCWlFlNjB6SzByeSJ9LCJpYXQiOjE2NzU5Mjk4NDJ9.jSxfbUGxstFflXl2lN5kqCNYWeYMYyhBp2cbQVYGXxk'}}).pipe(timeout(5000));
    }
    
}