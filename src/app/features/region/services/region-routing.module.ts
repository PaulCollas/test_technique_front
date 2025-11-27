import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { regionRoutes } from "./region.routes";

@NgModule({
  imports: [RouterModule.forChild(regionRoutes)],
  exports: [RouterModule]
})
export class RegionRoutingModule {}
