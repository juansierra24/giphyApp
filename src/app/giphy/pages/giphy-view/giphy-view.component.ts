import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/models/gif.model';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-giphy-view',
  templateUrl: './giphy-view.component.html',
  styleUrls: ['./giphy-view.component.scss'],
})
export class GiphyViewComponent implements OnInit {
  gifs!: Gif[];
  searchForm!: FormGroup;
  totalRecords!: number;
  searchTouched = false;

  constructor(
    private gifService: HttpServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.callTrendingEndpoint();
    this.initForm();
    this.onInputChange();
    this.gifService.getCurrentGifs().subscribe(gifsInfo => {
      this.gifs = gifsInfo.data;
      this.totalRecords = gifsInfo.pagination.total_count;
    });
  }

  initForm(): void {
    this.searchForm = this.fb.group({
      searchInput: ['', Validators.required],
    });
  }

  callTrendingEndpoint(offset: number = 0): void {
    this.gifService.getTrendingGifs(20, offset);
  }

  callSearchEndpoint(input: string, offset: number = 0) {
    this.searchTouched = true;
    this.gifService.getSearchedGifs(input, 20, offset);
  }

  onInputChange() {
    this.searchForm.controls['searchInput']?.valueChanges
      .pipe(
        debounceTime(1500), // Wait for 1.5 seconds of inactivity
        distinctUntilChanged() // Only emit distinct values
      )
      .subscribe(input => {
        this.callSearchEndpoint(input);
      });
  }

  onPageChange(event: any) {
    if (this.searchTouched) {
      this.callSearchEndpoint(
        this.searchForm.controls['searchInput']?.value,
        event.page
      );
    } else {
      this.callTrendingEndpoint(event.page);
    }
  }
}
