module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("date", function(date, format) {
    const d = new Date(date);
    const months = ["gennaio","febbraio","marzo","aprile","maggio","giugno",
                    "luglio","agosto","settembre","ottobre","novembre","dicembre"];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk"
  };
};
