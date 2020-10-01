import { LoadingSpinnerService } from './../../core/loading-spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  ShowLoading = false;
  constructor(
    private loadingSpinnerService: LoadingSpinnerService
    ) { }
  ngOnInit(): void {
    setInterval(() => {
      this.ShowLoading = this.loadingSpinnerService.ShowLoading;
    }, 100);
  }

}
