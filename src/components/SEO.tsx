import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

type SEOData = {
  title: string;
  description: string;
  keywords: string;
};

const SEO = ({ title, description, keywords }: SEOData) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultTitle, defaultDescription, defaultKeywords },
      },
    }) => {
      const seo = {
        title: title ? title : defaultTitle,
        description: description ? description : defaultDescription,
        keywords: keywords ? keywords : defaultKeywords,
      };
      return (
        <Helmet>
          <html lang='en' />
          <title>{seo.title}</title>
          <meta charSet='utf-8' name='description' content={seo.description} />
          <meta charSet='utf-8' name='keywords' content={seo.keywords} />
          <meta charSet='utf-8' name='robots' content='index, follow' />
        </Helmet>
      );
    }}
  />
);

export default SEO;

const query = graphql`
  {
    site {
      siteMetadata {
        defautlTitle: title
        defaultDescription: description
        defaultKeywords: keywords
      }
    }
  }
`;
