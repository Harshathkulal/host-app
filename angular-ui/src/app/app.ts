import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {}