
export interface WorkStats {
    count: number; 
    successCount: number; 
    failures: {
        reason: string;
        count: number
    }[];
}

export interface WorkItem {
    subject: string;
    description: string;
    priority: 0 | 1 | 2;
}

export class IoWorker {
    private _foo: string; 
    private _bar: string;

    constructor() {}

    whileComplete(callback: (stats: WorkStats) => void) {
        // do whatever it wants to do then call the callback to let the client know 
    }

    doSingleWork(workItem: WorkItem): void {
    }

    doMulitpleWorkInSequential(workItems: WorkItem[]): void {
    }

    doMulitpleWorkInParallel(workItems: WorkItem[]): void {
        throw Error('Not yet implemented');
    }

    
}


