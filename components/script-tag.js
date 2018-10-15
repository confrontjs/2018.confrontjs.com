import Head from 'next/head';

export default ({children}) =>
    <Head>
        <script dangerouslySetInnerHTML={{
            __html: `(
                ${children.toString()}
            )();`
        }}></script>
    </Head>
