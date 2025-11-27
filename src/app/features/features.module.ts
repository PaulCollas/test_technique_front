import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RegionModule } from "./region/region.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, RegionModule, SharedModule],
  exports: [RegionModule]
})
export class FeaturesModule {}
