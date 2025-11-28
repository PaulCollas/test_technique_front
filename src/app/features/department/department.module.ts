import { SharedModule } from './../../shared/shared.module';
import { DepartmentListComponent } from './pages/department-list/department-list.component';
import { TestTechniqueTableComponent } from '../../shared/components/test-technique-table/test-technique-table.component';
import { DepartmentRoutingModule } from './services/department-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule, SharedModule, DepartmentRoutingModule, TestTechniqueTableComponent, DepartmentListComponent],
  exports: []
})

export class DepartmentModule {}
