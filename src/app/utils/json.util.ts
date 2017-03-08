export function j(toBeJsonized: any): [any] | any {
  return JSON.stringify(toBeJsonized);
}

export function unj(toBeUnJsonized: any): [any] | any {
  return JSON.parse(toBeUnJsonized);
}