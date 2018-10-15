import React, { Component } from 'react';
import Script from './script-tag'

class NewsletterComponent extends Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container jumbotron" id="newsletter">
                    <div className="col-lg-5 mx-auto">
                        <div
                            className="ml-form-embed"
                            data-account="1190976:q9l3c7s3l7"
                            data-form="1014226:w7z0m5"
                        ></div>

                        <Script>
                            {
                                () => {

                                    (function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
                                    var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
                                    f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
                                    var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
                                    _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

                                    var ml_account = ml('accounts', '1190976', 'q9l3c7s3l7', 'load');
                                }
                            }
                        </Script>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsletterComponent;