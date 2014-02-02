/** @jsx React.DOM */
		// The above declaration must remain intact at the top of the script.
		// Your code here
		// Structure of the comment box: 
		// -CommentBox
		// 	-CommentList
		// 		-Comment
		// 	-CommentForm
		// 	
		// tutorial1.js
		
		var CommentBox = React.createClass({
			render: function() {
				return (
					<div className="commentBox">
						<h1>Comments</h1>
						<CommentList />
						<CommentForm />
					</div>
				);
			}
		});
		//  tutorial2.js
		var CommentList = React.createClass({
			render: function() {
				return (
					<div className="commentList">
						Hello, world! I am a CommentList.
					</div>
				);
			}
		});

		var CommentForm = React.createClass({
			render: function() {
				return (
					<div className="CommentForm">
						Hello, world! I am a CommentForm.
					</div>
				);
			}
		});
		React.renderComponent(
			<CommentBox />,
			document.getElementById('content')
		);	
