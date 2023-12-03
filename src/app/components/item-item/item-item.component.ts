import { Component, Input } from '@angular/core';
import { Item } from '../../models/list-details.interface';

@Component({
  selector: 'app-item-item',
  templateUrl: './item-item.component.html',
  styleUrl: './item-item.component.css'
})
export class ItemItemComponent {
  @Input() item!:Item;
}
