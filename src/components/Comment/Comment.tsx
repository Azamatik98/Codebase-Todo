import React from "react";
import { TComment } from "../../types/project";
import style from "./Comment.module.scss";

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
