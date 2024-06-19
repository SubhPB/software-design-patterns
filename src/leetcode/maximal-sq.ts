// Byimaan

type Binary = '0' | '1'

const matrix: (Binary)[][] = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
];

const isSquare = (list: Binary[]) => list.every(elem => elem === '1');
const min = (a:number, b:number) => (a < b) ? a : b;

const p = ['x', 'y', 'm', 'n']
interface PropKeys {
    [key :  typeof p[number]] : number
}

class Matrix {
    public static info: PropKeys;
    constructor(public props: PropKeys) {
        // this.info  = props; 
    }
}

const leetCode = () => {

    const [m, n] = [matrix.length, matrix[0].length]
    const maxSizePossible = min(m, n);
    let size = 0;

    const getRow = (index: number) => matrix[index];

    for(let r = size; r < m; r++){
        for(let c = size; c < n; c++){

            const isValid = isSquare(matrix[r].slice(r, c+1)) && isSquare(matrix[r-1].slice(r, c+1));
        }
    }

    return size**2


}

console.log("flat", matrix.flat(Infinity))