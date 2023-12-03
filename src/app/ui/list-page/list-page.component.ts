import { Component, OnInit, inject } from '@angular/core';
import { Item, ListDetailsResponse } from '../../models/list-details.interface';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {

  list!: Item[];
  listInfo !: ListDetailsResponse;
  route: ActivatedRoute = inject(ActivatedRoute);
  listId : number;
  constructor(private accService:AccountService){
    this.listId = this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
      this.accService.getListDetails(this.listId).subscribe(ans => {
        this.list = ans.items;
        this.listInfo = ans;
      });
  }
  clearList() {
    this.accService.clearList(this.listId).subscribe({
      next: data =>{
        window.location.reload();
      },error: err=>{
        debugger;
        alert('que hisiste');
      }
    });
    }
}
