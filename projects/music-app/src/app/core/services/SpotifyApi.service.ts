import { inject, Injectable } from "@angular/core";
import { AuthService } from "./authApi.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class SpotifyApiService {
    private readonly BASE_API = 'https://api.spotify.com/v1';
    private readonly authService = inject(AuthService);
    private token: string = '';
    constructor(private httpClient: HttpClient) { }

    SearchAlbum(albumName: string) : any {
        return this.httpClient.get(`${this.BASE_API}/search?q=${albumName}&type=album`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });        
    }

    setToken()
    {
        this.authService.getBearerToken().subscribe((data: any) => 
        {
            this.token = data.access_token;
        });
    }
}