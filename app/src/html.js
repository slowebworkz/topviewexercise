import React from 'react';
import PropTypes from 'prop-types';

const Head = ({ headComponents = [], children }) => (
  <head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {headComponents}
    {children}
  </head>
);

const Body = ({
  bodyAttributes = {},
  preBodyComponents = [],
  postBodyComponents = [],
  children,
}) => (
  <body {...bodyAttributes}>
    {preBodyComponents}
    {children}
    {postBodyComponents}
  </body>
);

export default function HTML(props) {
  const { htmlAttributes = {}, body = '' } = props;

  return (
    <html {...htmlAttributes}>
      <Head {...props} />
      <Body {...props}>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </Body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

Head.propTypes = {
  headComponents: HTML.propTypes.headComponents,
  children: PropTypes.node,
};

Body.propTypes = {
  bodyAttributes: HTML.propTypes.bodyAttributes,
  preBodyComponents: HTML.propTypes.preBodyComponents,
  postBodyComponents: HTML.propTypes.postBodyComponents,
  children: PropTypes.node,
};
