import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LayoutContainerComponent} from './components/layout/layout-container.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LayoutContainerComponent, LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutContainerComponent]
})
export class LayoutModule {}
