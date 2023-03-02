import { Book } from "./books.model";
import { Post } from "./post.model";

export interface AppState {
  message: string;
  post: Post,
  books: Book[]
}