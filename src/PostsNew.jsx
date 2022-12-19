export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onCreatePost(params);
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
