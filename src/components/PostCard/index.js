import { Link } from "react-router-dom";
import styles from "./Post.module.css";

const PostCard = ({ post }) => {
  return (
    <Link to={`post/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`assets/posts/${post.id}/capa.png`}
          alt={"Imagem de capa do post"}
        />

        <h1 className={styles.titulo}>{post.titulo}</h1>

        <button className={styles.botaoLer}>Ler</button>
      </div>
    </Link>
  );
};

export default PostCard;
