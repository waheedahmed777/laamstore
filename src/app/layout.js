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
        {/* Google Fonts */}
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;700&display=swap'
          rel='stylesheet'
        />

        {/* Bootstrap CSS */}
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
        />

        {/* Bootstrap JS Bundle */}
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
          defer
        ></script>
      </head>
      <body>
        <Header />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
