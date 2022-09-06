import { calculate } from "../testsfns/calculator";

it("add", () => {
    expect(calculate(1,"+",2)).toBe(3);
});
it("subtract", () => {
    expect(calculate(2,"-",1)).toBe(1);
});
it("multiply", () => {
    expect(calculate(1,"*",2)).toBe(2);
});
it("divide", () => {
    expect(calculate(4,"/",2)).toBe(2);
});