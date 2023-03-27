document.getElementById("quoteBtn").addEventListener("click", function() {
    fetch("https://zenquotes.io/api/random")
      .then(response => response.json())
      .then(data => {
        document.getElementById("quote").textContent = data[0].q + " - " + data[0].a;
      })
      .catch(error => {
        console.error(error);
        document.getElementById("quote").textContent = "An error occurred while fetching the quote.";
      });
  });
  