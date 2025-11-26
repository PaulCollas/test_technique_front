import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RegionModule } from "./region/region.module";

@NgModule({
  imports: [CommonModule, RegionModule],
  exports: [RegionModule]
})
export class FeaturesModule {}
