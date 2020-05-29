import React from 'react';
import { Github, Twitter, Instagram } from 'grommet-icons';

import { Anchor, Box, Footer, grommet, Grommet, Main, Text } from 'grommet';

import './Footer.css';
import logo from '../Logo/localbuzzWhite.png';

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      className="anchor"
      a11yTitle="Keep up with us on Instagram"
      href="https://www.instagram.com/marcylabschool/?hl=en"
      icon={<Twitter color="white" />}
    />
    <Anchor
      className="anchor"
      a11yTitle="Share feedback on Github"
      href="https://github.com/MCP-Foundation/Local-Buzz"
      icon={<Github color="white" />}
    />
    <Anchor
      className="anchor"
      a11yTitle="Support us on Twitter"
      href="https://twitter.com/marcylabschool?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
      icon={<Twitter color="brand" />}
    />
  </Box>
);

function Banner({}) {
  return (
    <section className="footer">
      <Footer background="#36b4b4" pad="small">
        <Box align="center" direction="row" gap="xsmall">
          <img className="footerLogo" src={logo}></img>
        </Box>
        <Media />
        <Text textAlign="center" size="xsmall">
          © 2020 MCP Foundation
        </Text>
      </Footer>
    </section>
  );
}

export default Banner;
