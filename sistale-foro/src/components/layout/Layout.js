import Head from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Head />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
