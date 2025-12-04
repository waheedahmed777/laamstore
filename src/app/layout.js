import './globals.css';
import ClientWrapper from './ClientWrapper';
import Header from './Components/Header';
import Footer from './Components/Footer';

export const metadata = {
  title: 'My App',
  description: 'Using Josefin Sans',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <Header />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
