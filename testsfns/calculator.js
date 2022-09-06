const calculate = (a,opp,b)=>{
    if(opp === "+") return a + b;
    if(opp === "-") return a - b;
    if(opp === "*") return a * b;
    if(opp === "/") return a / b;
    else return -1;
};
export {calculate};