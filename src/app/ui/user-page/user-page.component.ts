import { Component, OnInit, TemplateRef } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { UserDetailsResponse } from '../../models/user-details.interface';
import { environment } from '../../../environments/environment.development';
import { List } from '../../models/lists-list.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {

  user!: UserDetailsResponse;
  listList !: List[];
  listForm = new FormGroup({
    listName: new FormControl('', [Validators.required]),
    listDesc: new FormControl('', [Validators.required])
  });
  name = "";
  desc = "";

  constructor(private serviceAcc:AccountService, private modalService: NgbModal, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.serviceAcc.getAccountDetailsBySession().subscribe(answ => {
      localStorage.setItem('USER_ID', answ.id.toString());
      this.user = answ;
    });
    this.serviceAcc.getListFromAcc().subscribe(ans => {
      this.listList = ans.results;
    });
  }

  getUserAvatar():string{
    if(this.user.avatar.tmdb.avatar_path == null)
      return "https://freeiconshop.com/wp-content/uploads/edd/person-flat.png";
    return `${environment.actorImageBaseUrl}${this.user.avatar.tmdb.avatar_path}`;
  }

  open(content: TemplateRef<any>, event: MouseEvent) {
    event.stopPropagation();
    this.modalService.open(content, { scrollable: true });
    
  }
  toSave(){
    this.serviceAcc.createList(this.name, this.desc).subscribe({
      next: data => {
        window.location.reload();
      },error: err => {
        alert('tas bobo?');
      }
    });
  }

  
}
