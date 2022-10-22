module.exports = {
  plugins: [
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IBM Plex Sans Thai Looped\:400,400i,700,700i`],
        display: "swap",
      },
    },
  ],
};
