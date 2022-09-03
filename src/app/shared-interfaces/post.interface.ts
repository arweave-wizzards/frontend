export interface Post{
  id: number,
  title: string,
  creator: string,
  date: Date,
  content: string,
  tags: string[],
  votes: {
    addresses: string[],
    status: number;
  }
}
