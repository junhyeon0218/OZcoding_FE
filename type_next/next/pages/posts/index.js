import Link from "next/link";
import Header from "../../components/Header";
import { getAllPosts } from "../../utils/posts";
import styles from "../../styles/Home.module.css";

const Posts = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>블로그 포스트</h1>
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link href={`/posts/${post.id}`}>자세히 보기</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
