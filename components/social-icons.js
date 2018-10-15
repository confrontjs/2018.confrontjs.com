import { PureComponent } from 'react';
import cx from 'classnames';

export default class extends PureComponent {

    getClassList(key) {
        return cx(
            "icon",
            `icon-${ key.replace(/_url$/, '') }-logo`,
            "rounded-circle"
        );
    }

    render() {
        const person = this.props.person;

        return (
            <ul className="list-unstyled">
                { Object.keys(person.contact).map((key, index) => {
                    const contact_url = person.contact[key];
                    if (!contact_url) {
                        return;
                    }
                    return <li className="d-inline-block" key={ index }>
                        <a
                                href={ contact_url }
                                target="_blank"
                                rel="noopener"
                        >
                            <i className={ this.getClassList(key) }></i>
                        </a>
                    </li>;
                })}
            </ul>
        );
    }

}
