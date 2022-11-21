import React from 'react';

import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import ThemeContext from '../context/ThemeContext';
import { darkswitcher } from './layout.module.css';

const Header = ({ siteTitle }) => (
    <ThemeContext.Consumer>
        {theme => (
            <div
                style={{
                    marginBottom: `1.45rem`,
                }}
            >
                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `1.45rem 1.0875rem`,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <h1 style={{ margin: 0 }}>
                        <Link
                            to="/"
                            style={{
                                color: theme.dark ? '#fff' : '#44475b',
                                textDecoration: `none`,
                            }}
                        >
                            {siteTitle}
                        </Link>
                    </h1>
                    <button className={darkswitcher} onClick={theme.toggleDark}>
                        {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
                    </button>
                </div>
            </div>
        )}
    </ThemeContext.Consumer>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header