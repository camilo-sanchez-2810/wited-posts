export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostState {
  posts: IPost[];
  post?: IPost
}

export interface IPostProps {
  title: string;
  body: string;
  id: number;
  userId: number;
}