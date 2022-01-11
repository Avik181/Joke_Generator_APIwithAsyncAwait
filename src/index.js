import "./styles.css";

const joke = document.querySelector("#btn");

const generate = async () => {
  const setHeader = {
    headers: {
      Accept: "application/json"
    }
  };

  const res = await fetch("https://icanhazdadjoke.com/", setHeader);
  const data = await res.json();
  document.getElementById("app").innerHTML = `
  ${data.joke}`;
};

joke.addEventListener("click", generate);
generate();
