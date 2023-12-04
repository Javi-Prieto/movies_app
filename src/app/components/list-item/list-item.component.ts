import { Component, Input } from '@angular/core';
import { List } from '../../models/lists-list.interface';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {

  @Input() list !: List;
  constructor(private accService: AccountService){}

  deleteList(event: MouseEvent){
    event.stopPropagation();
    this.accService.deleteList(this.list.id).subscribe(ans => {
      window.location.reload();
    }
    );
  }
  openPopOver(event: MouseEvent) {
    event.stopPropagation();
  }
}
