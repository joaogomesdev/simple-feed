import React from "react";
import styles from "./Avatar.module.css";

interface Props {
  src: string;
  hasBorder?: boolean;
}

export const Avatar = ({ src, hasBorder = true }: Props) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};
