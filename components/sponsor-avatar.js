import { PureComponent } from 'react';
import * as slug from 'slug';

// Sizes:
// - width: 400px
// - height: 400px

export default class extends PureComponent {

    getAvatarUrl() {
        return `/static/images/sponsors/logo-${slug(this.props.sponsor.name).toLowerCase()}-400x400.png`
    }

    getAlternativeText() {
        if (this.props.sponsor) {
            return `Avatar of ${this.props.sponsor.name}`;
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
