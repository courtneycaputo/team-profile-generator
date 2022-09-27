const Engineer = require("../lib/Engineer");

// Test engineer can be created
test('Can create an Engineer', () => {
    const engineer = new Engineer('Courtney', 12, 'test@gmail.com','courtneycaputo');

    expect(engineer.name).toBe('Courtney');
    expect(engineer.id).toBe(12);
    expect(engineer.email).toBe('test@gmail.com');
    expect(engineer.github).toBe('courtneycaputo')
});

// Test gets employee name from getName() 
test('Gets engineer name', () => {
    const engineer = new Engineer('Courtney', 12, 'test@gmail.com','courtneycaputo');
    expect(engineer.getName()).toEqual(expect.any(String));
});

// Tests gets engineer ID from getId() 
test('Gets engineer id', () => {
    const engineer = new Engineer('Courtney', 12, 'test@gmail.com','courtneycaputo');
    expect(engineer.getId()).toEqual(expect.any(Number));
});

// Tests gets engineer email from getEmail() 
test('Gets engineer email', () => {
    const engineer = new Engineer('Courtney', 12, 'test@gmail.com','courtneycaputo');
    expect(engineer.getEmail()).toEqual(expect.any(String));
});

// Tests gets engineer github from getGithub() 
test('Gets engineer github', () => {
    const engineer = new Engineer('Courtney', 12, 'test@gmail.com','courtneycaputo');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

// Tests gets engineer role from getRole() 
test('Gets engineer role', () => {
    const engineer = new Engineer('Courtney', 12, 'test@gmail.com','courtneycaputo');
    expect(engineer.getRole()).toEqual("Engineer");
});
