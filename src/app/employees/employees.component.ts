import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { BlogService } from '../services/blog.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  employees: any;
  constructor(
    private blogService : BlogService,
    private employeeService:EmployeeService) {}

  ngOnInit() {
    this.blogService.getEmployees().subscribe((res) => (this.employees = res));}
      
    deleteEmployee(id: number) {
      this.employeeService.deleteEmployee(id).subscribe(
        () => {
        
          this.employeeService.getAllEmployees();
        },
      );
    }
    updateEmployee(employee: any) {
      const employeeData = {
        firstName: employee.firstname,
        lastName :employee.lastName,
        email:employee.email,
        poste:employee.poste,
        department :employee.department 
      };
  
      this.employeeService.updateEmployee(employeeData).subscribe(
        (data) => {
          console.log('Mise à jour réussie :', data);
          this.employeeService.getAllEmployees(); 
        },
  )}
      }
