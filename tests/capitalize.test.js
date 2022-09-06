import { capitalize } from "../testsfns/capitalize";

it("Is Capitalized",()=>{
    expect(capitalize("faggot")).toBe("Faggot");
});