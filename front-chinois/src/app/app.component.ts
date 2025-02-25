import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-chinois';
  citation: { texte: string; auteur: string } | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRandomCitation();
  }

  getRandomCitation() {
    this.http.get<{ texte: string; auteur: string }>('http://localhost:8080/api/citations/random')
      .subscribe((data) => {
        this.citation = data;
      });
  }
}
