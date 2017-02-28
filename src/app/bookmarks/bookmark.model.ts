export class BookmarkModel {
  constructor(
    public id: number,
    public title: string,
    public link: string,
    public description: string,
    public weight: number) {}
}