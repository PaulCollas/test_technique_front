import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuComponent } from "../menu/menu.component";
import { FooterComponent } from "../footer/footer.component";
import { LayoutComponent } from "../layout.component";

@NgModule({
  imports: [CommonModule, MenuComponent, FooterComponent, LayoutComponent],
  exports: [MenuComponent, FooterComponent, LayoutComponent]
})
export class LayoutModule {}
