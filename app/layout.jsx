import "/styles/globals.css"
import "../public/fonts/fonts.css"

export const metadata = {
    title: 'Design Culture Company',
    description: '',
    url: 'designculture.company',
    image: '/images/logo-dcc.svg'
}

const RootLayout = ({children}) => {
  return (
    <html lang="es">
        <head>
            <title>{metadata.title}</title>
            <link rel="icon" type="image/svg+xml" href="/images/logo-dcc.svg" />
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.image} />
            <meta property="og:url" content={metadata.url} />
        </head>
        <body>
            <main className='app'>
                  {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout