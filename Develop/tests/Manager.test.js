const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("getRole", () => {
        it("changes the employees role to manager", () => {
            const result = "Manager";
            const emp = new Manager("Zarin", "123", "email@email.com", result);
            expect(emp.getRole()).toBe(result);
        });
    });

    describe("getOfficeNumber", () => {
        it("set the users office number", () => {
            const officeNum = "1234";
            const emp = new Manager("Zarin", "123", "email@email.com", officeNum);
            expect(emp.getOfficeNumber()).toBe(officeNum);
        });
    });
})