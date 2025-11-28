import { Routes } from "@angular/router";
import { DepartmentListComponent } from "../pages/department-list/department-list.component";

export const departmentRoute: Routes = [
  {
    path: "department/:code",
    component: DepartmentListComponent,
  }
];
