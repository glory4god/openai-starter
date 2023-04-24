export class Pagination<T> {
  public lastPage: boolean;

  constructor(public take: number, public skip: number, public data: T[]) {
    this.take = take;
    this.skip = skip;
    this.lastPage = data.length < take || data.length === 0;
    this.data = data;
  }
}
