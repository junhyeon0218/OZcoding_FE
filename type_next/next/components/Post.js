import styles from "../styles/Post.module.css";

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
