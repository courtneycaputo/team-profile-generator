const Intern = require("../lib/Intern");

// Test intern can be created
test("Can create intern", () => {
    const intern = new Intern('Courtney', 12, 'test@gmail.com', 'UCSD');

    expect(intern.name).toBe('Courtney');
    expect(intern.id).toBe(12);
    expect(intern.email).toBe('test@gmail.com');
    expect(intern.school).toBe('UCSD');
});

// Test gets intern name from getName() 
test('Gets intern name', () => {
    const intern = new Intern('Courtney', 12, 'test@gmail.com', 'UCSD');
    expect(intern.getName()).toEqual(expect.any(String));
});

// Tests gets intern ID from getId() 
test('Gets intern id', () => {
    const intern = new Intern('Courtney', 12, 'test@gmail.com', 'UCSD');
    expect(intern.getId()).toEqual(expect.any(Number));
});

// Tests gets intern email from getEmail() 
test('Gets intern email', () => {
    const intern = new Intern('Courtney', 12, 'test@gmail.com', 'UCSD');
    expect(intern.getEmail()).toEqual(expect.any(String));
});

// Tests gets intern school from getSchool() 
test('Gets intern school', () => {
    const intern = new Intern('Courtney', 12, 'test@gmail.com', 'UCSD');
    expect(intern.getSchool()).toEqual(expect.any(String));
});

// Tests gets intern role from getRole() 
test('Gets intern role', () => {
    const intern = new Intern('Courtney', 12, 'test@gmail.com', 'UCSD');
    expect(intern.getRole()).toEqual("Intern");
});
