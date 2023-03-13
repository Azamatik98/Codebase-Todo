import React from "react";
import style from "./Comment.module.scss";
import { TComment } from "../../types/project";

interface CommentProps {
  comment: TComment;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className={style.comment}>
      <div className={style.comment_text}>{comment.content}</div>
    </div>
  );
};

export default Comment;
