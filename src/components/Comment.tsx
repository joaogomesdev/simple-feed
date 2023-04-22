import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface Props { }

export const Comment = ({ }: Props) => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/joaogomesdev.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Gomes</strong>
              <time title="21 Jun, 08:13PM" dateTime="2022-05-21 08:13:30">
                About an 1h ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Very simple comment!! 🤌</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
