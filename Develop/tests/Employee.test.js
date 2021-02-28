const Employee = require('../lib/Employee');

describe('Employee', () => {
    


})



describe("getRole", () => {
    it("getRole() should return \"Employee\"", () => {
        const testValue = "Employee";
        const emp = new Employee("olivia", 1, "test@test.com");
        expect(emp.getRole()).toBe(testValue);
    });
});