const onArticleClick = (fileName) => {
  // Scroll to top of the page
  document.getElementById("content-data").scrollIntoView();

  fetch(fileName + ".html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content-data").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error fetching the content:", error);
    });
};
