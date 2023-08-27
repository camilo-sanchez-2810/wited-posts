export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentStore {
  comments: IComment[];
}

export interface ICommentProp {
  name: string;
  body: string;
}