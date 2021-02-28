const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    describe("getRole", () => {
        it("changes the employees role to engineer", () => {
            const result = "Engineer";
            const emp = new Engineer("Zarin", "123", "email@email.com", "zs274");
            expect(emp.getRole()).toBe(result);
        });
    });
    describe("getGithub", () => {
        it("set the users GitHub username", () => {
            const github = "zs274";
            const emp = new Engineer("Zarin", "123", "email@email.com", github);
            expect(emp.getGithub()).toBe(github);
        });
    });

})

