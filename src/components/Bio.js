import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import github from './github.png'
import stackoverflow from './stackoverflow.svg'
import twitter from './twitter.svg'
import { rhythm } from '../utils/typography'

const ulStyles = {
  listStyle: 'none',
  display: 'flex',
};

const liStyles = {
  width: rhythm(1),
  height: rhythm(1),
  marginRight: rhythm(1/2),
};

function Bio() {
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
      }}
    >
      <img
        src={profilePic}
        alt={`Jakob Runge`}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
        }}
      />
      <p>
        Written by <strong>Jakob Runge</strong>.
        You can also find him here:
        <ul style={ulStyles}>
          <li style={liStyles}>
            <a
              alt="Twitter"
              href="https://twitter.com/sicarius"
              target="_blank"
            >
              <img src={twitter} />
            </a>
          </li>
          <li style={liStyles}>
            <a
              alt="GitHub"
              href="https://github.com/runjak"
              target="_blank"
            >
              <img src={github} />
            </a>
          </li>
          <li style={liStyles}>
            <a
              alt="StackOverflow"
              href="https://stackoverflow.com/users/story/448591"
              target="_blank"
            >
              <img src={stackoverflow} />
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
}

export default Bio
