import { Component } from 'react';

class ImageComponent extends Component {
	render() {
		return (
			<div style={{ margin: '20px' }}>
				<img src={this.props.url} alt={this.props.alt} />
			</div>
		);
	}
}

export default ImageComponent;
