import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InmueblesService} from "../../services/inmuebles.service";

@Component({
  selector: 'app-lista-inmuebles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-inmuebles.component.html',
  styleUrl: './lista-inmuebles.component.css'
})
export class ListaInmueblesComponent implements OnInit{
  inmuebles: any;
  currentPage = 1;

  constructor(private inmueblesService: InmueblesService) {}

  ngOnInit(): void {
    this.loadInmuebles();

  }

  loadInmuebles(): void {
    this.inmueblesService.getInmuebles(this.currentPage).subscribe((data) => {
      console.log(data)
      this.inmuebles = data.data
      if (this.inmuebles) {
        this.inmuebles.data = this.inmuebles.concat(data.data);
      } else {
        this.inmuebles = data;
      }
    });
  }

  onLoadMore(): void {
    this.currentPage++;
    this.loadInmuebles();
  }
}
