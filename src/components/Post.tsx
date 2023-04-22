import React from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

interface Props { }

export const Post = ({ }: Props) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/joaogomesdev.png" />

          <div className={styles.authorInfo}>
            <strong>João Gomes</strong>
            <span>Front-End Developer</span>
          </div>
        </div>

        <time title="21 Jun, 08:13PM" dateTime="2022-05-21 08:13:30">
          Published 1 hour ago
        </time>
      </header>

      <div className={styles.content}>
        <p> Hello there! 👋</p>
        <p>This is a awesome post 🚀</p>
        <p>
          👉 <a href=""> jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#post</a> <a href="#">#awesome</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea placeholder="Leave your comment..." />
        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
