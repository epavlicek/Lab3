import { useState } from "react";
export default function CreatePost({ user, posts, setPosts, date, dispatch }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "CREATE_POST", title, content, date, author: user });
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        date: <b>{Date.now()}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <input type="submit" value="Add to List" />
    </form>
  );
}
