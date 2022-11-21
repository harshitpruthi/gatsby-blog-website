import * as React from 'react';

import {
  graphql,
  Link,
  useStaticQuery,
} from 'gatsby';

import ThemeContext from '../context/ThemeContext';
import Header from './header';
import {
  container,
  dark,
  light,
  navLinkItem,
  navLinks,
  navLinkText,
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className={theme.dark ? dark : light}>
                    <div className={container}>
                        <Header siteTitle={data.site.siteMetadata.title} />
                        <nav>
                            <ul className={navLinks}>
                                <li className={navLinkItem}>
                                    <Link to="/" className={navLinkText}>
                                        Home
                                    </Link>
                                </li>
                                <li className={navLinkItem}>
                                    <Link to="/about" className={navLinkText}>
                                        About
                                    </Link>
                                </li>
                                <li className={navLinkItem}>
                                    <Link to="/blog" className={navLinkText}>
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <main>
                            <h1>{pageTitle}</h1>
                            {children}
                        </main>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>

    )
}

export default Layout