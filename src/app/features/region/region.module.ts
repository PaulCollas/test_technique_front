import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RegionFormComponent } from "./pages/region-form/region-form.component";
import { RegionRoutingModule } from './services/region-routing.module';

@NgModule({
  imports: [CommonModule, RegionFormComponent, RegionRoutingModule],
  exports: [RegionFormComponent]
})

export class RegionModule {}
