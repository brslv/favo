export class BookmarkModel {
  constructor(
    public id: number,
    public title: string,
    public link: string,
    public description: string,
    public weight: number) {}
  
  public static factory(o: any): BookmarkModel {
    const id = o._id || o.id || null,
      title = o.title || '',
      link = o.link || '',
      description = o.description || '',
      weight = o.weight || '';
    
    return new BookmarkModel(id, title, link, description, weight);
  }
}