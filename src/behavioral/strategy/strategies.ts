// Byimaan

// cmd npx ts-node ./src/behavioral/strategy/strategies.ts

export interface SortStrategy {
    sort(data: number[]): number[]
}

class BubbleSortStrategy implements SortStrategy {
    sort(data: number[]): number[] {
        
        for(let i = 0; i < data.length - 1; i++){
            for(let j = i+1; j < data.length; j++){
                if (data[j] < data[i]){
                    [data[i], data[j]] = [data[j], data[i]]
                }
            }
        }

        return data
    }
};

class QuickSortStrategy implements SortStrategy {
    sort(data: number[]): number[] {
        if (data.length <= 1) {
            return data;
        }
        const pivot = data[Math.floor(data.length / 2)];
        const left = data.filter(x => x < pivot);
        const middle = data.filter(x => x === pivot);
        const right = data.filter(x => x > pivot);
        return [...this.sort(left), ...middle, ...this.sort(right)];
    }
}

class InsertionSortStrategy implements SortStrategy {
    sort(data: number[]): number[] {
        console.log('Sorting using Insertion Sort');
        for (let i = 1; i < data.length; i++) {
            let key = data[i];
            let j = i - 1;
            while (j >= 0 && data[j] > key) {
                data[j + 1] = data[j];
                j = j - 1;
            }
            data[j + 1] = key;
        }
        return data;
    }
}

export {BubbleSortStrategy, QuickSortStrategy, InsertionSortStrategy}