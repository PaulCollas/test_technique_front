import { DepartmentModule } from './department/department.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RegionModule } from "./region/region.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, SharedModule, RegionModule, DepartmentModule],
  exports: [RegionModule, DepartmentModule]
})
export class FeaturesModule {}
