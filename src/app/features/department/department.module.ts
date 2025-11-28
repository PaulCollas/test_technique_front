import { SharedModule } from './../../shared/shared.module';
import { DepartmentListComponent } from './pages/department-list/department-list.component';
import { DepartmentRoutingModule } from './services/department-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule, SharedModule, DepartmentRoutingModule, DepartmentListComponent],
  exports: [DepartmentRoutingModule, DepartmentListComponent]
})

export class DepartmentModule {}
