import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.scss'],
})
export class GiphySearchComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  searchForm!: FormGroup;

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchInput: ['', Validators.required],
    });
  }
}
