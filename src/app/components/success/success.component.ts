import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent implements OnInit {
  constructor(private serviceAuth: AuthService, private serviceAcc: AccountService) { }
  ngOnInit(): void {

    let token = localStorage.getItem('REQUEST_TOKEN');
    this.serviceAuth.createSession(token!).subscribe(answ => {

      localStorage.setItem('SESSION_ID', answ.session_id);

      this.serviceAcc.getAccountDetailsBySession().subscribe(answ => {
        debugger;
        window.location.href = 'http://localhost:4200/';
      });
    });
  }
}
