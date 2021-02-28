const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName", () => {
        it("sets the name of the employee", () => {
            const name = "Zarin";
            const emp = new Employee(name);
            expect(emp.name).toBe(name);
        });
    });

    describe("getId", () => {
        it("sets the ID of the employee", () => {
            const testid = "123";
            const emp = new Employee("Zarin", testid);
            expect(emp.id).toBe(testid);
        });
    });

    describe("getEmail", () => {
        it("sets the email of the employee", () => {
            const testemail = "email@email.com";
            const emp = new Employee("Zarin", "123", testemail);
            expect(emp.email).toBe(testemail);
        });
    });

    describe("getRole", () => {
        it("sets the role of the employee", () => {
            const result = "Employee";
            const emp = new Employee("Zarin", "123", "email@email.com", result);
            expect(emp.getRole()).toBe(result);
        });
    });

})