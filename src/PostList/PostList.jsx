import React, { useReducer } from "react";
import useFetchHook from "../api/useFetchHook";
import PostCard from "./PostCard";
import PostDialog from "./PostDialog";
import { Button } from "@blueprintjs/core";

const initialState = {
  isOpen: false,
  dialogTitle: "",
  post: null
};

const dialogReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return {
        isOpen: true,
        dialogTitle: "Create new post",
        post: null
      };
    case "EDIT_POST":
      return {
        isOpen: true,
        dialogTitle: "Edit post",
        post: action.payload
      };
    case "CLOSE_DIALOG":
      return {
        ...initialState
      };
    default:
      throw new Error("Invalid type");
  }
};

const PostList = props => {
  const [posts] = useFetchHook("https://jsonplaceholder.typicode.com/posts");
  const [dialogState, dispatch] = useReducer(dialogReducer, initialState);
  const handleCreate = () => {
    dispatch({ type: "CREATE_POST" });
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_DIALOG" });
  };

  return (
    <div>
      <Button
        text="Create new post"
        icon="add"
        intent="primary"
        onClick={handleCreate}
      />

      <div style={{ padding: "16px" }}>
        {posts.data.map(post => (
          <PostCard key={post.id} post={post} dispatch={dispatch} />
        ))}
      </div>

      <PostDialog {...dialogState} handleClose={handleClose} />
    </div>
  );
};

export default PostList;
