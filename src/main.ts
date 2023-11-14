import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ListaInmueblesComponent} from "./app/lista-inmuebles/lista-inmuebles.component";

bootstrapApplication(ListaInmueblesComponent, appConfig)
  .catch((err) => console.error(err));
