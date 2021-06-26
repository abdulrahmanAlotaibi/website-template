import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Abdulrahman Alotaibi Wesbite</title>
        <meta name="description" content="Abdulrahman Alotaibi personal website" />
      </Head>
      <Header />

      <main>
        <Hero />
      </main>
      
      <Footer />

    </div>
  )
}
