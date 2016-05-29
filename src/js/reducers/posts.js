function posts(state = [], {type, postIndex}) {
	switch (type) {
		case 'INCREMENT_LIKES':
			const post = state[postIndex];

			return [
				...state.slice(0, postIndex),
				{
					...post,
					likes: post.likes + 1
				},
				...state.slice(postIndex + 1)
			];

		default:
			return state;
	}
}

export default posts;
