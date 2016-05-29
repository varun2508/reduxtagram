import React from 'react';
import Comment from './Comment';

const Comments = React.createClass({
	handleSumbit(event) {
		event.preventDefault();

		const props = this.props;
		const { id } = props.params;
		const { author, comment, commentForm } = this.refs;

		props.addComment(id, author.value, comment.value);

		commentForm.reset();
	},

	render() {
		const props = this.props;
		const { postComments } = props;

		return (
			<div className="comments">
				{
					postComments.map((comment, i) =>
						<Comment
							{ ... props }
							comment={ comment }
							commentIndex={ i }
						/>
					)
				}

				<form
					ref="commentForm"
					className="comment-form"
					onSubmit={ this.handleSumbit }
					>
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		);
	}
});

export default Comments;
