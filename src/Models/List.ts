class List implements List {
    title: string;
    items: ListItem[];
    constructor(title: string, items: ListItem[]) {
        this.title = title;
        this.items = items;
    }
}