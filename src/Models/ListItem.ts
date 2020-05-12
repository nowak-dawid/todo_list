export default class ListItem {
  title: string;
  checked: boolean;
  constructor(title: string, checked: boolean) {
    this.title = title;
    this.checked = checked;
  }
}
