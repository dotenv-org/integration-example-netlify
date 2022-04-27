import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default function Home() {
  var title = `Hello ${process.env.NEXT_PUBLIC_HELLO}`

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={title} />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
