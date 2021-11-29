import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { Routes, RouterModule } from '@angular/router';

const TEST_ROUTES: Routes = [
  {
    path: 'test-search',
    component: TestComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(TEST_ROUTES)],
})
export class TestModule {}
