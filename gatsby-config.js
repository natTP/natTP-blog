module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lexend\:300,500,500i,600,700,700i,800`,
          `Sarabun\:300,300i,700,700i`,
          `Noto Sans Thai\:500,800`,
        ],
        display: "swap",
      },
    },
  ],
};
