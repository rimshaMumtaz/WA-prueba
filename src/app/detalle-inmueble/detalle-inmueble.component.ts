import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {InmueblesService} from "../../services/inmuebles.service";

@Component({
  selector: 'app-detalle-inmueble',
  templateUrl: './detalle-inmueble.component.html',
  styleUrl: './detalle-inmueble.component.css'
})
export class DetalleInmuebleComponent implements OnInit {
  inmueble: any;

  constructor(
    private route: ActivatedRoute,
    private inmueblesService: InmueblesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const inmuebleId = params['id'];
      this.inmueblesService.getDetalleInmueble(inmuebleId).subscribe((data) => {
        this.inmueble = data;
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/inmuebles']); // Navigate back to the list page
  }
}
