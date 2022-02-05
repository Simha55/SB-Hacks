import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>APPNAME</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-red-500'>
        Hello World!
      </div>
    </div>
  )
}