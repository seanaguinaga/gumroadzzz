import "../scss/main.scss";
import { graphql } from "./graphql";

(async function () {
  let { data } = await graphql({
    query: `query listAllProducts
        {
            product {
              id
              name
              reviews {
                rating
                text
              }
              reviews_aggregate {
                aggregate {
                  avg {
                    rating
                  }
                }
              }
            }
        }`,
  });

  document.body.innerHTML = renderProduct(data);

  let displayStars = [...document.getElementsByClassName("display__star")];

  function displayRatingAggregate(stars, rating) {
    let starClassActive = "display__star fas fa-star";
    document.getElementById("review_aggregate_display").innerHTML = rating;
    rating--;
    stars.forEach(() => {
      for (rating; rating >= 0; --rating)
        stars[rating].className = starClassActive;
    });
  }

  displayRatingAggregate(displayStars, 3);

  let ratingStars = [...document.getElementsByClassName("rating__star")];

  function executeRating(stars) {
    let starClassActive = "rating__star fas fa-star";
    let starClassInactive = "rating__star far fa-star";
    let starsLength = stars.length;
    let rating;
    stars.map((star) => {
      star.onclick = () => {
        console.log("nothing");
        rating = stars.indexOf(star);
        document.getElementById("review_mutation_display").innerHTML =
          rating + 1;
        if (star.className === starClassInactive) {
          for (rating; rating >= 0; --rating)
            stars[rating].className = starClassActive;
        } else {
          for (rating; rating < starsLength; ++rating)
            stars[rating].className = starClassInactive;
        }
      };
    });
  }

  executeRating(ratingStars);
})();

function renderProduct(data) {
  return `
  <div class="centered">
    ${data.product
      ?.map((product) => {
        return `
        <div>
        <span><h6>${product.name}</h6>
        </span>
        ${renderProductReviewsAggregateAndButton(product)}
        ${renderReviewForm()}
        ${renderProductReviewsList(product)}
        </div>
      `;
      })
      .join("")}
   </div> 
  `;
}

function renderReviewForm() {
  return `
  <form>
   <div style="display: flex; justify-content: space-between">
   <h6 id="review_mutation_display"></h6>
    <div class="rating">
    <i class="rating__star far fa-star"></i>
    <i class="rating__star far fa-star"></i>
    <i class="rating__star far fa-star"></i>
    <i class="rating__star far fa-star"></i>
    <i class="rating__star far fa-star"></i>
    </div>
    </div>
    <input/>
    <button type="submit">Submit</button>
    </form/>
  `;
}

function renderProductReviewsAggregateAndButton(product) {
  return product?.reviews_aggregate?.aggregate?.avg?.rating
    ? `
    <div>
      <h2>${product?.reviews_aggregate?.aggregate?.avg?.rating}</h2>
    </div>
     <button value="${product.id}">Review</button>
  `
    : `
    <div style="display: flex; justify-content: space-between">
    <h6 id="review_aggregate_display"></h6>
    <div class="display">
    <i class="display__star far fa-star"></i>
    <i class="display__star far fa-star"></i>
    <i class="display__star far fa-star"></i>
    <i class="display__star far fa-star"></i>
    <i class="display__star far fa-star"></i>         
    </div>
    <button value="${product.id}">Review</button>
    </div>`;
}

function renderProductReviewsList(product) {
  return product?.reviews?.length > 0
    ? `
    <div>
      ${product.reviews
        ?.map(
          (review) =>
            `<h1 class="statisticTitle">${review.rating}</h1><h2 class="statisticSubtitle">${review.text}</h2>`
        )
        .join("")}
    </div>
  `
    : `<div><h6>No Reviews</h6></div>`;
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
