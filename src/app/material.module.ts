import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon"

const components = [
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class MaterialModule {}
