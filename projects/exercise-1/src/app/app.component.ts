import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nace } from './models/model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'exercise 1';
  data!: Nace[];

  private dataService = inject(DataService);

  get sumOfRandomNumbers(): string {
    const result = this.data.map((a) => a.RndNumbers);
    return result.reduce((a, b) => a + b).toString();
    // to sum a subset of data, we could filter the data by parent or level first
    // for example
    // const result2 = this.data
    //   .filter((x) => x.Level === '1')
    //   .map((a) => a.RndNumbers);
    // const t = result2.reduce((a, b) => a + b).toString();
    // console.log(t);
  }

  ngOnInit(): void {
    this.dataService
      .getData()
      .subscribe({ next: (data: Nace[]) => (this.data = data) });
  }
}
