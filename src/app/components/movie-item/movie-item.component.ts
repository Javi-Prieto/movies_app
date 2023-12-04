import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopularMovie } from '../../models/popular-movies.interface';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  @Input() movie!: PopularMovie;
  @Input() movieIndex !: number;
  @Output() toEmit = new EventEmitter<number>();

  openModal(){
    this.toEmit.emit(this.movieIndex);
  }

  setImgUrl():string{
    return `${environment.posterImageBaseUrl}/${this.movie.poster_path}`
  }
}
