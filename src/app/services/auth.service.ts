
//Auth Service you can tweak vyenye unataka
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { HttpBackend, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _currentUser: any;
    public jwtHelper: JwtHelperService = new JwtHelperService();
    constructor(
      private handler: HttpBackend,
      private router: Router,
      private http: HttpClient,
    ) {
        this.http = new HttpClient(this.handler);
        this.isAuthenticated();
        const token = this.token;
        if (token) { this._currentUser = this.jwtHelper.decodeToken(token); }
    }
    private static generateHeaders(): { headers: HttpHeaders } {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(environment.client_id +  ':' + environment.password)
            })
        };
    }
   public login(username: string, password: string): Observable<any> {
        const body = new HttpParams()
            .set('grant_type', 'password')
            .set('username', username)
            .set('password', password);
        return this.http.post(environment.authUrl, body.toString(), AuthService.generateHeaders())
            .pipe(map((user: any) => {
                if (user && user['access_token']) {
                    let nUser;
                    localStorage.setItem('token', user['access_token']);

                    if(localStorage.getItem('token')  !== null){
                        //this._currentUser = this.jwtHelper.decodeToken(localStorage.getItem('token'));
                    }
                    //console.log('logged in: ', JSON.parse(this._currentUser));
                    if (user["firstTimeLogin"]) {
                        nUser = JSON.stringify(this._currentUser);
                        nUser = JSON.parse(nUser);
                        nUser["firstTimeLogin"] = true;
                        nUser["otp"] = password;
                        localStorage.setItem("user", JSON.stringify(nUser));
                    } else {
                        nUser = JSON.stringify(this._currentUser);
                        nUser = JSON.parse(nUser);
                        nUser["firstTimeLogin"] = false;
                        localStorage.setItem("user", JSON.stringify(nUser));
                    }
                    console.log("user", localStorage.getItem("user"));
                    return true;
                } else {
                    return false;
                }
            }));
    }
    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem("user");
        this._currentUser = null;
    }
    get currentUser(): any {
        return this._currentUser;
    }
    get token(): string {
        return "";
        //return localStorage.getItem('token');
    }
    isAuthenticated(): void {
        const token = this.token;
        if (token) {
            const tokenExpired = this.jwtHelper.isTokenExpired(token);
            if (tokenExpired) { 
                this.logout();
            }
        }
    }
}