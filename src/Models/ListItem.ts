class ListItem implements ListItem {
    title: string;
    checked: boolean;
    constructor(title: string, checked: boolean) {
        this.title = title;
        this.checked = checked;
    }
}