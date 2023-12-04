import { Component, OnInit, TemplateRef } from '@angular/core';
import { PopularMovie, PopularMovieResponse } from '../../models/popular-movies.interface';
import { MovieService } from '../../services/movie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../../services/account.service';
import { ListListResponse } from '../../models/lists-list.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {



  moviesInfor !: PopularMovieResponse;
  movieSelected !: PopularMovie;
  listList !: ListListResponse;
  listId : number = 0;

  constructor(private movieService: MovieService, private modalService: NgbModal, private accService:AccountService ){}

  ngOnInit(): void {
      this.movieService.getMovieList().subscribe({
        next: data => {
          this.moviesInfor = data;
        },error : err =>{
          window.location.href = "localhost:4200/"
        }
      });
      this.accService.getListFromAcc().subscribe(ans => {
        this.listList = ans;
      });
  }
  open(id: any,content: TemplateRef<any>) {
    this.movieSelected = this.moviesInfor.results[id];
    this.modalService.open(content, { scrollable: true });
  }
  onSave() {
    this.accService.addMovie(this.listId.toString(), this.movieSelected.id.toString()).subscribe({
      next: data => {
        window.location.href = `http://localhost:4200/user/${localStorage.getItem('USER_ID')}`;
      }, error: err => {
        alert('Algo hisiste que no funsiono');
      }
    });
  }
  onCreateList(){
    window.location.href = `http://localhost:4200/user/${localStorage.getItem('USER_ID')}`;
  }
  saveData(arg0: number) {
    this.listId = arg0;
  }
}
