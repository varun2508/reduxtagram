function postComments(state, action) {
	switch (action.type) {
		case 'ADD_COMMENT':
			return [
				...state,
				{
					user: action.author,
					text: action.comment
				}
			];

		case 'REMOVE_COMMENT':
			const commentIndex = action.commentIndex;

			return [
				...state.slice(0, commentIndex),
				...state.slice(commentIndex + 1)
			];

		default:
			return state;
	}
}

function comments(state = {}, action) {
	const postId = action.postId;

	return {
		...state,
		[ postId ]: postComments(state[postId], action)
	}
}

export default comments;
