const action = {
    OUTER_VIEW_CHANGE: "outer_view_change",
    getViewHeightAndWidth: (height, width) => dispatch => dispatch({ type: action.OUTER_VIEW_CHANGE, payload: { width, height } })
};

export default action;