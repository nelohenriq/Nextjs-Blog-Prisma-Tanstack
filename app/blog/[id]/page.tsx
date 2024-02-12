const BlogDetail = ({ params }) => {
  const { id } = params;

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
      </div>
    );
  }

  const { title, content, tags } = post;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};
