// Byimaan

type Binary = '0' | '1'

const matrix: (Binary)[][] = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","1","1","1"]
];

// CMD:  npx ts-node src/leetcode/maximal-sq.ts

const isSquare = (list: Binary[]) => list.every(elem => elem === '1');
const min = (a:number, b:number) => (a < b) ? a : b;

const p = ['x', 'y', 'm', 'n']
interface PropKeys {
    [key :  typeof p[number]] : number
};

class Graph {
    constructor(public x: number, public y: number){
        this.x = x;
        this.y = y;
    }
}

class Matrix {

    // x denotes c & y denotes r
    origin: Graph;
    constructor(x:number, y:number){
        this.origin = new Graph(x, y)
    };

    init(){
        
        const accqiuredRows = ''
    }
}

const leetCode = () => {

    const [m, n] = [matrix.length, matrix[0].length]
    const maxSizePossible = min(m, n);
    const isOk = (arr: Binary[]) => arr.every(i => i === '1');

    let size = 0;

    while (size < maxSizePossible){

        let targetSize = size + 1;
        
        for(let r = size; r < m-size+1; r++){
            
            let rowBreaker = false;

            for(let c = size; c < n-size+1; c++){

                if (r === m-1 && c === n-1) console.log(`Debug: Point reached ${size} | ${targetSize}`)
                
                const parentL = [];
                for(let i = r; i >  r - targetSize; i--){
                    const childL = matrix[i].slice(c-size, c+1);
                    if (isOk(childL)){
                        parentL.push(...childL)
                    } else {
                        parentL.length = 0
                        break
                    }
                };

                if (parentL.length === targetSize**2){
                    size = size + 1;
                    rowBreaker = true
                    break
                };

            };

            if (rowBreaker) {
                break;
            }
        };

        if (size !== targetSize){
            break
        }
    };

    return size**2
}

console.log(leetCode())