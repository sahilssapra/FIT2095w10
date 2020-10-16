import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  section = 1
  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
  }
  changeSection(sectionId) {
    this.section = sectionId;
    
  }
  

}
