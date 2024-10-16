/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".net", ".us", ".com"];

  for (let x of pronoun) {
    for (let y of adj) {
      for (let z of noun) {
        for (let w of domain)
          document.querySelector("#dom").innerHTML +=
            "<h3>" + x + y + z + w + "</h3>";
      }
    }
  }
};
