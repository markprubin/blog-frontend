export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h3>The Posts</h3>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h2>{post.title}</h2>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>{post.body}</p>
                  <img src={post.image} />
                  <button className="btn btn-info" onClick={() => props.onSelectPost(post)}>
                    MORE INFO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// <button className="btn btn-info" onClick={() => props.onSelectPost(post)}>
// MORE INFO
// </button>
