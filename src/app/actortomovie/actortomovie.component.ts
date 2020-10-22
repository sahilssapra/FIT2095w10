import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-actortomovie',
  templateUrl: './actortomovie.component.html',
  styleUrls: ['./actortomovie.component.css']
})
export class ActortomovieComponent implements OnInit {
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";
  actorsDB: any[] = [];
  fullTitle: string = "";
  year: number = 0;
  movieId: string = "";
  moviesDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  //Get all Actors
onGetActors() {
  console.log("From on GetActors");
  return this.dbService.getActors().subscribe((data: any[]) => {
    this.actorsDB = data;
  });
}
onGetMovies() {
  this.dbService.getMovies().subscribe((data1: any[]) => {
    this.moviesDB = data1;
  });
}
// Update an Actor
onSelectUpdate(item) { 
  this.fullName = item.name;
  this.bYear = item.bYear;
  this.actorId = item._id;
}
onSelectMovie(item) {
  this.fullTitle = item.title;
  this.year = item.year;
  this.movieId = item._id;
}
onAddAtoM() {
  let obj = {id: this.actorId};
  this.dbService.updateMovie(this.movieId, obj).subscribe(result => {
    this.onGetActors();
  });
}

ngOnInit() {
  this.onGetActors();
  this.onGetMovies();
}

}
