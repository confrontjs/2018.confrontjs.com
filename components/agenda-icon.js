import { PureComponent } from 'react';
import * as slug from 'slug';

// Sizes:
// - width: 200px
// - height: 200px

export default class extends PureComponent {

    getSlugName() {
        return slug(this.props.title).toLowerCase();
    }

    getUrl() {
        return `/static/images/agenda/${this.getSlugName()}-200x200.png`
    }

    getAlternativeText() {
        return `${this.props.title}`;
    }

    render() {
        return (
            <div className={ this.props.className }>
                <img
                        className="img-thumbnail rounded-circle"
                        src={ this.getUrl() }
                        alt={ this.getAlternativeText() }
                />
            </div>
        )
    }

}
