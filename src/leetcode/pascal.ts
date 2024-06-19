// Byimaan

type Pascal = (level: number)  => number[]

const pascalTriangle: Pascal = (level: number) => {

    if (level < 1){
        throw new Error(`
            Triangle s level should always be greater than 0.
        `)
    }

    // base case
    if (level === 1){
        return [1]
    };
    
    let arr = Array(level).fill(1)
    const nMinus1 = pascalTriangle(level - 1);
    for(let i = 1; i < level; i++){
        
        arr[i] = (nMinus1[i-1] || 0) + (nMinus1[i] || 0)
    }
    return arr;
}

console.log("PASCAL TRIANGLE");
console.log(pascalTriangle(6))