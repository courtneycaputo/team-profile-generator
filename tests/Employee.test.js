const Employee = require("../lib/Employee");

// Test employee can be created
test("Can create Employee", () => {
    const employee = new Employee("Courtney", 12, "test@gmail.com");

    expect(employee.name).toBe("Courtney");
    expect(employee.id).toBe(12);
    expect(employee.email).toBe("test@gmail.com");
});

// Test gets employee name from getName() 
test('Gets employee name', () => {
    const employee = new Employee('Courtney', 12, 'test@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// Tests gets employee ID from getId() 
test('Gets employee id', () => {
    const employee = new Employee('Courtney', 12, 'test@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

// Tests gets employee email from getEmail() 
test('Gets employee email', () => {
    const employee = new Employee('Courtney', 12, 'test@gmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

// Tests gets employee role from getRole() 
test('Gets employee role', () => {
    const employee = new Employee('Courtney', 12, 'test@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});



