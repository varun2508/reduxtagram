import React from 'react';

const Comment = React.createClass({
	render() {
		const props = this.props;
		const { comment, commentIndex, params, removeComment } = props;
		const postId = params.id;

		return (
			<div className="comment">
				<p>
					<strong>{ comment.user }</strong>
					{ comment.text }
					<button
						className="remove-comment"
						onClick={ removeComment.bind(null, postId, commentIndex) }
						>
						&times;
					</button>
				</p>
			</div>
		);
	}
});

export default Comment;
