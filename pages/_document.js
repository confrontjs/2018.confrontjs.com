import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html lang="en" prefix="og: http://ogp.me/ns#">
                <head>
                    <meta charSet="utf-8"/>
                    <title>ConFrontJS 2018 • Front-end Conference at 2018-10-29</title>
                    <meta name="description" content="ConFrontJS is organised by the WarsawJS team."/>
                    <meta name="keywords" content="javascript, front-end, conference, warsaw, poland, vue, react, aurelia, angular, technology, community, warsawjs"/>
                    <meta name="robots" content="noarchive"/>
                    <meta name="theme-color" content="#a64ac9"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="google-site-verification" content="r2YpkFb-iMprD6zWmRwQwm22h1W4zbAZuWCjNkbqe3Q"/>

                    <meta property="og:url" content="https://confrontjs.com/"/>
                    <meta property="og:locale" content="en_EN"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="ConFrontJS 2018 • Front-end Conference at 2018-10-29"/>
                    <meta property="og:description" content="ConFrontJS is organised by the WarsawJS team."/>
                    <meta property="og:image" content="https://confrontjs.com/images/social-banner.png"/>

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@confrontjs"/>
                    <meta name="twitter:creator" content="@confrontjs"/>
                    <meta name="twitter:title" content="ConFrontJS 2018 • Front-end Conference at 2018-10-29"/>
                    <meta name="twitter:description" content="ConFrontJS is organised by the WarsawJS team."/>
                    <meta name="twitter:image" content="https://confrontjs.com/images/social-banner.png"/>

                    <link rel="manifest" href="/static/manifest.json"/>
                    <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>

                    <link href="https://fonts.googleapis.com/css?family=Hind" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>

                    <link rel="stylesheet" href="/static/vendors/fontello/css/fontello.css"/>

                    { this.props.styleTags }

                    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124334065-1"></script>
                    <script async src="/static/google/analytics.js"></script>
                </head>
                <body>
                    <Head></Head>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;