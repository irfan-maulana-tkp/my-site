import React from 'react';
import { ThemeContext } from '../layouts';
// import Blog from '../components/Blog';
import Hero from '../components/Hero';
import Seo from '../components/Seo';
import WhatIDo from '../components/WhatIDo';

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = () => {
    this.separator.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  render() {
    const theme = this.context;

    return (
      <React.Fragment>
        <Hero scrollToContent={this.scrollToContent} theme={theme} />

        <hr ref={this.separator} />

        {/* <ThemeContext.Consumer>
          {theme => <Blog posts={posts} theme={theme} />}
        </ThemeContext.Consumer> */}

        <WhatIDo theme={theme} />

        <Seo />

        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }

          @above desktop {
            hr {
              margin-bottom: ${`calc(${theme.space.xl})`};
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.contextType = ThemeContext;

export default IndexPage;

//eslint-disable-next-line no-undef
// export const query = graphql`
//   query IndexQuery {
//     # posts: allMarkdownRemark(
//     #   filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
//     #   sort: { fields: [fields___prefix], order: DESC }
//     #   limit: 3
//     # ) {
//     #   edges {
//     #     node {
//     #       excerpt
//     #       fields {
//     #         slug
//     #         prefix
//     #       }
//     #       frontmatter {
//     #         title
//     #         category
//     #         author
//     #         cover {
//     #           children {
//     #             ... on ImageSharp {
//     #               fluid(maxWidth: 800, maxHeight: 360) {
//     #                 ...GatsbyImageSharpFluid_withWebp
//     #               }
//     #             }
//     #           }
//     #         }
//     #       }
//     #     }
//     #   }
//     # }
//     bgDesktop: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
//       resize(width: 1200, quality: 90, cropFocus: CENTER) {
//         src
//       }
//     }
//     bgTablet: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
//       resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
//         src
//       }
//     }
//     bgMobile: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
//       resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
//         src
//       }
//     }
//   }
// `;