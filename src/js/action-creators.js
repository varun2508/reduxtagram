function incrementLikes(postIndex) {
	return {
		type: 'INCREMENT_LIKES',
		postIndex
	};
}

function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId, author, comment
	};
}

function removeComment(postId, commentIndex) {
	return {
		type: 'REMOVE_COMMENT',
		postId, commentIndex
	};
}

export { incrementLikes, addComment, removeComment };
