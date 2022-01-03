module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lexend\:300,500,500i,600,700,700i`,
          `Bai Jamjuree\:400,400i,600,600i`,
        ],
        display: "swap",
      },
    },
  ],
};
