// Next Imports
import { headers } from 'next/headers'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Component Imports

// HOC Imports
import TranslationWrapper from '@/hocs/TranslationWrapper'

// Config Imports
import { i18n } from '@configs/i18n'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'
import ReactQueryProvider from './reactQueryConfig'

export const metadata = {
  title: 'OE',
  description: 'AI-Powered Open ASPM Platform'
}

const RootLayout = ({ children, params }) => {
  // Vars
  const headersList = headers()
  const direction = i18n.langDirection[params.lang]

  return (
    <TranslationWrapper headersList={headersList} lang={params.lang}>
      <ReactQueryProvider>
        <html id='__next' lang={params.lang} dir={direction}>
          <head>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
            <link href='https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap' rel='stylesheet' />
          </head>
          <body className='flex is-full min-bs-full flex-auto flex-col'>{children}</body>
        </html>
      </ReactQueryProvider>
    </TranslationWrapper>
  )
}

export default RootLayout
