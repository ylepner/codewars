import { Employee, EmployeeDetail } from "./destructuring-assignment.spec"

export function getDetails(employees: Employee[]): EmployeeDetail[] {
  const employeeDetails: EmployeeDetail[] = employees.map(({ name, position }) => ({ name, position }));
  return employeeDetails
}
