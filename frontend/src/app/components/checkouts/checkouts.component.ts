import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../models/page';
import { Checkout} from '../../models/checkout';
import { CheckoutService } from "../../services/checkout.service";

@Component({
  selector: 'app-checkouts',
  templateUrl: './checkouts.component.html',
  styleUrls: ['./checkouts.component.scss']
})

export class CheckoutsComponent implements OnInit {

  checkouts$!: Observable<Page<Checkout>>;

  constructor(
    private CheckoutService: CheckoutService,
  ) {
  }

  ngOnInit(): void {
    // TODO this observable should emit books taking into consideration pagination, sorting and filtering options.
    this.checkouts$ = this.CheckoutService.getCheckouts({});
  }
}
