const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("getRole", () => {
        it("changes the employees role to intern", () => {
            const result = "Intern";
            const emp = new Intern("Zarin", "123", "email@email.com", "UoB");
            expect(emp.getRole()).toBe(result);
        });
    });

    describe("getSchool", () => {
        it("set the users school", () => {
            const school = "UoB";
            const emp = new Intern("Zarin", "123", "email@email.com", school);
            expect(emp.getSchool()).toBe(school);
        });
    });
})