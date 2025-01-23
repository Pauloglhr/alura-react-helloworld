import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import Markdown from "react-markdown";
import "./Post.css";
import NaoEcontrada from "pages/NaoEcontrada";
import PaginaPadrao from "components/PaginaPadrao";

const Post = () => {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEcontrada />;
  }
    
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              titulo={post.titulo}
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
            >
              <div className="post-markdown-container">
                <Markdown>{post.texto}</Markdown>
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
};

export default Post;
