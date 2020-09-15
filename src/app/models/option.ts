export class Option {
    id: number;
    name: string;
    selected: boolean;
    
    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.name;
    }
}