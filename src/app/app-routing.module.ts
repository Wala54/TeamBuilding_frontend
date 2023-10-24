import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'readmore/:id', component: BlogDetailsComponent },
  { path: 'add', component: AddBlogComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'updateEmployee' , component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
