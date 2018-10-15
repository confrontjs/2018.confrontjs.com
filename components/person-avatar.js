import { PureComponent } from 'react';
import * as slug from 'slug';

// Sizes:
// - width: 200px
// - height: 200px

export default class extends PureComponent {

    getSlugPersonName() {
        if (this.props.person && this.props.person.name) {
            return slug(this.props.person.name).toLowerCase();
        }
        return '';
    }

    getAvatarUrl() {
        if (this.props.person && this.props.person.name) {
            return `/static/images/speakers/${this.getSlugPersonName()}-200x200.jpg`
        }
        return `/static/images/speakers/@fake.jpg`
    }

    getAlternativeText() {
        if (this.props.person) {
            return `Avatar of ${this.props.person.name}`;
        }
        return '';
    }

    render() {
        return (
            <div className={ this.props.className }>
                <img
                        className="img-thumbnail rounded-circle"
                        src={ this.getAvatarUrl() }
                        alt={ this.getAlternativeText() }
                />
            </div>
        )
    }

}
