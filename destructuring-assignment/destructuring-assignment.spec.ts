import { expect } from 'chai';
import { getDetails } from './destructuring-assignment';

describe('Destructuring assignment', () => {
  it('should return empty string 0 if string made of digit 0', () => {
    const result = getDetails(employees);
    expect(result).to.deep.eq([
      { name: 'John Doe', position: 'Manager' },
      { name: 'Jane Smith', position: 'Developer' },
      { name: 'Mark Johnson', position: 'Designer' }
    ]);
  });
})

const employees: Employee[] = [
  { name: 'John Doe', age: 30, position: 'Manager' },
  { name: 'Jane Smith', age: 25, position: 'Developer' },
  { name: 'Mark Johnson', age: 35, position: 'Designer' }
]

export interface Employee {
  name: string;
  age: number;
  position: string
}

export interface EmployeeDetail {
  name: string,
  position: string
}