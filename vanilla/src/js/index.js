import "../scss/main.scss";
import { graphql } from "./graphql";

(async function () {
  let { data } = await graphql({
    query: `query listAllProducts
        {
            product {
              id
              name
            }
        }`,
  });
  document.body.innerHTML = renderProduct(data);
})();

function renderProduct(data) {
  return `
  <div class="centered">
    ${data.product
      ?.map((product) => {
        console.log(product);
        return `
        <div>
        <span><h6>${product.name}</h6>
        <button value="${product.id}">Review</button>
        </span>
        </div>
      `;
      })
      .join("")}
      ${renderProductReviews(data.product)}
   </div> 
  `;
}

function renderProductReviews(product) {
  return product?.reviews?.length > 0
    ? `
    <div>
      ${product.reviews
        ?.map(
          (review) =>
            `<div style="grid-area: statistic${review.number}"><h1 class="statisticTitle">${review.rating}</h1><h2 class="statisticSubtitle">${statistic.fabric}</h2></div><hr class="smallLine" />`
        )
        .join("")}
    </div>
  `
    : `<div>No Reviews</div>`;
}

// Mobile Event Listener for Showing/Hiding Content
document.addEventListener(
  "click",
  function (event) {
    if (event.target.classList.contains("button")) {
      let value = event.target.value;
      let target = document.getElementById(`button${value}`);
      if (target.innerHTML == "+") {
        target.innerHTML = "-";
      } else {
        target.innerHTML = "+";
      }

      let content = document.getElementById(`content${value}`);
      console.log(content.style.display);
      if (content.style.display == "block") {
        return (content.style.display = "none");
      } else return (content.style.display = "block");
    }
  },
  false
);

// Desktop Event Listener for Showing/Hiding Content
document.addEventListener(
  "click",
  function (event) {
    console.log(event.target.value);
    let value = event.target.value;
    if (event.target.classList.contains("title")) {
      let otherContent = document.querySelectorAll(".content");
      let target = document.getElementById(`content${value}`);
      otherContent.forEach((content) => {
        if (content.classList.contains("visible")) {
          content.classList.remove("visible");
          target.classList.add("visible");
        }
      });
    }
  },
  false
);

// Desktop Event Listener for Highlighting Button

document.addEventListener(
  "click",
  function (event) {
    const target = event.target;
    let otherButtons = document.querySelectorAll(".textButton");
    otherButtons.forEach((button) => {
      if (
        button.classList.contains("active") &&
        target.classList.contains("textButton")
      ) {
        button.classList.remove("active");
        target.classList.add("active");
      }
    });
  },
  false
);

document.onreaad;
