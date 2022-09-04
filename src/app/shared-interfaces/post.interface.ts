export interface Post{
  id: number,
  title: string,
  author: string,
  timestamp: number,
  content: string,
  votes: {
    addresses: string[],
    status: number;
  }
  category: string;
}
