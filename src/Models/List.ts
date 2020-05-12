import ListItem from "./ListItem";

export default class List {
  title: string;
  items: ListItem[];
  constructor(title: string, items: ListItem[]) {
    this.title = title;
    this.items = items;
  }
}
