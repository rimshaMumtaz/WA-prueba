import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InmueblesService} from "../../services/inmuebles.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-lista-inmuebles',
  templateUrl: './lista-inmuebles.component.html',
  styleUrls: ['./lista-inmuebles.component.css']
})
export class ListaInmueblesComponent implements OnInit{
  inmuebles: any;
  currentPage = 1;

  constructor(private inmueblesService: InmueblesService, private router: Router) {}

  ngOnInit(): void {
    this.loadInmuebles();

  }

  loadInmuebles(): void {
    this.inmueblesService.getInmuebles(this.currentPage).subscribe((data) => {
      if (this.inmuebles && this.inmuebles.data) {
        this.inmuebles.data = this.inmuebles.data.concat(data.data);
      } else {
        this.inmuebles = data;
      }
    });
  }

  onLoadMore(): void {
    this.currentPage++;
    this.loadInmuebles();
  }

  verDetalle(inmuebleId: number): void {
    this.router.navigate(['/detalle', inmuebleId]);
  }
}
