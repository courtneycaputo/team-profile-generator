const Manager = require("../lib/Manager");

// Test manager can be created
test("Can create Manager", () => {
    const manager = new Manager("Courtney", 12, "test@gmail.com", 104);

    expect(manager.name).toBe("Courtney");
    expect(manager.id).toBe(12);
    expect(manager.email).toBe("test@gmail.com");
    expect(manager.officeNumber).toBe(104);
});

// Test gets manager name from getName() 
test('Gets manager name', () => {
    const manager = new Manager("Courtney", 12, "test@gmail.com", 104);
    expect(manager.getName()).toEqual(expect.any(String));
});

// Tests gets manager ID from getId() 
test('Gets manager id', () => {
    const manager = new Manager("Courtney", 12, "test@gmail.com", 104);
    expect(manager.getId()).toEqual(expect.any(Number));
});

// Tests gets manager email from getEmail() 
test('Gets manager email', () => {
    const manager = new Manager("Courtney", 12, "test@gmail.com", 104);
    expect(manager.getEmail()).toEqual(expect.any(String));
});

// Tests gets manager office number from officeNumber() 
test('Gets manager office number', () => {
    const manager = new Manager("Courtney", 12, "test@gmail.com", 104);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Tests gets manager role from getRole() 
test('Gets manager role', () => {
    const manager = new Manager("Courtney", 12, "test@gmail.com", 104);
    expect(manager.getRole()).toEqual("Manager");
});
