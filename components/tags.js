import React, { Component } from 'react';

class Tags extends Component {
    render() {
        const tags = this.props.tags;
        return (
            <div className="tags mb-3">
                {tags && tags.map((tag, index) =>
                    <span
                        className="badge badge-warning mr-1"
                        key={index}
                    >
                        {tag}
                    </span>
                )}
            </div>
        );
    }
}

export default Tags;