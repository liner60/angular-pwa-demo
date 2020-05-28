import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList = [];

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.getList();
  }

  private async getList(): Promise<void> {
    const res: any = await this.api.getList()
      .toPromise();
    this.movieList = res.data;
  }

}
