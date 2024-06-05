import Post from "../../components/Post";
import Header from "../../components/Header";
import { getAllPosts } from "../../utils/posts";

const SinglePostPage = ({ post }) => {
  return (
    <div>
      <Header />
      <Post post={post} />
    </div>
  );
};

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = getAllPosts();
  const post = posts.find((post) => post.id === params.slug);

  if (!post) {
    return {
      props: {
        post: null,
      },
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default SinglePostPage;
