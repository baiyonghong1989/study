let initState = {
  name: "前端九部",
  description: "我们都是前端爱好者",
};
export default function infoReducer(state, action) {
  if (!state) {
    state = initState;
  }
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "SET_DESC":
      return {
        ...state,
        description: action.description,
      };
    default:
      return { ...state };
  }
}
