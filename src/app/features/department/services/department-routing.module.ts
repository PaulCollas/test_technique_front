import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { departmentRoute } from "./department.routes";

@NgModule({
  imports: [RouterModule.forChild(departmentRoute)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule {}
