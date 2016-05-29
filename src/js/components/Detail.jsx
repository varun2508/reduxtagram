import React from 'react';
import Post from './Post';
import Comments from './Comments';

const Detail = React.createClass({
	render() {
		const props = this.props;
		const { posts, comments, params } = props;
		const postId = params.id;
		const index = posts.findIndex(({ code }) => code === postId);
		const post = posts[index];
		const postComments = comments[postId] || [];

		return (
			<div className="single-photo">
				<Post
					{ ...props }
					key={ index }
					postIndex={ index }
					post={ post }
				/>

				<Comments
					{ ...props }
					postComments={ postComments }
				/>
			</div>
		);
	}
});

export default Detail;
