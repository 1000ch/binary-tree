type TreeItem = {
  value: number;
  left?: TreeItem;
  right?: TreeItem;
};

export function validate(data?: TreeItem): boolean {
  return false;
}
