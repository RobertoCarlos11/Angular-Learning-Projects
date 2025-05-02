import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private token: string = '';
    constructor(private httpClient : HttpClient) { }

    getBearerToken()
    {
        return this.httpClient.get<{access_token: string}>('http://localhost:3000/api/bearer/token')
    }
}