import { RECEIVE_EVENT_POSTS, RECEIVE_POST } from "../actions/post_actions";


const PostsReducer = (
    state = { all: {}, user: {}, new: undefined },
    action 
    ) => {
      Object.freeze(state);
      let newState = Object.assign({}, state);
      switch(action.type) {
        case RECEIVE_EVENT_POSTS: 
          newState.all = action.posts.data
          return newState;
        case RECEIVE_POST:
          newState.all.push(action.post.data);
          return newState;
        default: 
          return state;
      }
};

export default PostsReducer;