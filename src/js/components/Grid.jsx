import React from 'react';
import Post from './Post';

const Grid = React.createClass({
	render() {
		const props = this.props;
		const { posts } = props;

		return (
			<div className="photo-grid">
				{
					posts.map(
						(post, i) =>
							<Post
								{ ...props }
								key={ i }
								postIndex={ i }
								post={ post }
							/>
					)
				}
			</div>
		);
	}
});

export default Grid;
