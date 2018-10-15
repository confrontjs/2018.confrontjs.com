import { PureComponent } from 'react';
import * as slug from 'slug';

// Sizes:
// - width: 200px
// - height: 200px

export default class extends PureComponent {

    getAvatarUrl() {
        return `/static/images/partners/logo-${slug(this.props.partner.name).toLowerCase()}-200x200.png`
    }

    getAlternativeText() {
        return `Avatar of ${this.props.partner.name}`;
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
