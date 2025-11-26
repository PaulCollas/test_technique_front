import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutModule } from "./layout/services/layout.module";

@NgModule({
  imports: [CommonModule, LayoutModule],
  exports: [LayoutModule]
})
export class CoreModule {}
