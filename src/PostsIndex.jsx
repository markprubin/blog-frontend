export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h3 className="text-center">The Posts</h3>
      <div className="posts row">
        {props.posts.map((post) => (
          <div class="card col-4" key={post.id}>
            <img src={post.image} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">{post.title}</h5>
              <button className="btn btn-info" onClick={() => props.onSelectPost(post)}>
                Read The Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// <button className="btn btn-info" onClick={() => props.onSelectPost(post)}>
// MORE INFO
// </button>
