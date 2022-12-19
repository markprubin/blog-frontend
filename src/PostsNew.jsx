import axios from "axios";

export function PostsNew() {
  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response, "Creating a post!");
      window.location.href = "/";
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    handleCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit} id="form-box">
        <div>
          Title: <input name="title" id="title-box" type="text" />
        </div>
        <div>
          Body: <input name="body" id="body-box" type="text" />
        </div>
        <div>
          Image URL: <input name="image" id="image-box" type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
