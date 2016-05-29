import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Post = React.createClass({
	render() {
		const props = this.props;
		const { post, postIndex, comments } = props;

		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={ `/view/${post.code}`}>
						<img
							className="grid-photo"
							src={ post.display_src }
							alt={ post.caption }
						/>
					</Link>

					<CSSTransitionGroup
						transitionName="like"
						transitionEnterTimeout={ 500 }
						transitionLeaveTimeout={ 500 }>
						<span
							key={ post.likes }
							className="likes-heart">
							{ post.likes }
						</span>
					</CSSTransitionGroup>
				</div>

				<figcaption>
					<p>{ post.caption }</p>

					<div className="control-buttons">
						<button
							onClick={ props.incrementLikes.bind(null, postIndex) }
							className="likes">
							&hearts; { post.likes }
						</button>

						<Link
							className="button"
							to={ `/view/${post.code}` }>
							<span className="comment-count">
								<span className="speech-bubble" />
								{ comments[post.code] ? comments[post.code].length : 0 }
							</span>
						</Link>
					</div>
				</figcaption>
			</figure>
		);
	}
});

export default Post;
