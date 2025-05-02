import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { SpotifyApiService } from './core/services/SpotifyApi.service';
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MusicApp';
  album: string = '';
  albums= signal<any[]>([]);
  constructor(private SpotifyApiService: SpotifyApiService,private toastr: ToastrService) { }
  getAlbum()
  {
    if(this.album === '')
      {
        this.toastr.error('Please enter an album name', 'Error');
        return;
      } 
    this.SpotifyApiService.SearchAlbum(this.album).subscribe((data: any) => {
        this.albums.set(data.albums.items);
    });
  }

  ngOnInit()
  {
    this.SpotifyApiService.setToken();
  }
}
