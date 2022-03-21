import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
/* defina uma propriedade nomeada product com um decorador
  O decorador indica que o valor da propriedade passa do pai do componente */
  @Input() product!: Product | undefined;
  @Output() notify = new EventEmitter();

}
