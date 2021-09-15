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
    rating--;
    rating = Math.round(rating);
    stars.forEach(() => {
      for (rating; rating >= 0; --rating) {
        stars[rating].className = starClassActive;
      }
    });
  }

  displayRatingAggregate(
    displayStars,
    data.product[0].reviews_aggregate.aggregate.avg.rating
  );

  let ratingStars = [...document.getElementsByClassName("rating__star")];

  function executeRating(stars) {
    let starClassActive = "rating__star fas fa-star";
    let starClassInactive = "rating__star far fa-star";
    let starsLength = stars.length;
    let rating;
    stars.map((star) => {
      star.onclick = () => {
        rating = stars.indexOf(star);
        document.getElementById("rating-input").value = rating + 1;
        document.getElementById("review_mutation_display").innerHTML =
          rating + 1;
        if (star.className === starClassInactive) {
          for (rating; rating >= 0; --rating) {
            stars[rating].className = starClassActive;
          }
        } else {
          for (rating; rating < starsLength; ++rating)
            stars[rating].className = starClassInactive;
        }
      };
    });
  }

  wireProductReviewsAggregateAndButton();

  executeRating(ratingStars);
})();

function renderProduct(data) {
  return `
  <div class="centered" style="border: 1px solid black">
    ${data.product
      ?.map((product) => {
        return `
        <div>
        <span><h6>${product.name}</h6>
        </span>
        ${renderProductReviewsAggregateAndButton(product)}
        ${renderReviewForm(product)}
        ${renderProductReviewsList(product)}
        </div>
      `;
      })
      .join("")}
   </div> 
  `;
}

function renderReviewForm(product) {
  return `
  <div style="display: flex; justify-content: space-between; border: 1px solid black">
  <h6 id="review_mutation_display"></h6>
   <div class="rating">
   <i class="rating__star far fa-star"></i>
   <i class="rating__star far fa-star"></i>
   <i class="rating__star far fa-star"></i>
   <i class="rating__star far fa-star"></i>
   <i class="rating__star far fa-star"></i>
   </div>
   <form id="review-form">
   <input id="rating-input" name="rating" type="number" style="display: none"/>
     <input name="text"/>
     <button name="product_id" value="${product.id}" type="submit">Submit</button>
     </form/>
   </div>
  `;
}

function renderProductReviewsAggregateAndButton(product) {
  return product?.reviews_aggregate?.aggregate?.avg?.rating
    ? `
    <div style="display: flex; justify-content: space-between; border: 1px solid black">
      <h2>${product?.reviews_aggregate?.aggregate?.avg?.rating}</h2>
      <div class="display">
      <i class="display__star far fa-star"></i>
      <i class="display__star far fa-star"></i>
      <i class="display__star far fa-star"></i>
      <i class="display__star far fa-star"></i>
      <i class="display__star far fa-star"></i>         
      </div>
    </div>
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
    <button value="${product.id}" type="submit">Review</button>
    </div>`;
}

function wireProductReviewsAggregateAndButton() {
  let form = document.getElementById("review-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let elements = form.elements;
    let obj = {};
    for (let i = 0; i < elements.length; i++) {
      let item = elements.item(i);
      if (item.name) {
        obj[item.name] = item.value;
      }
    }

    await graphql({
      query: `mutation insertReview($review_insert_input: review_insert_input!) {
      insert_review_one(object: $review_insert_input) {
        rating
        text
      }
    }`,
      variables: { review_insert_input: obj },
    });
  });
}

function renderProductReviewsList(product) {
  return product?.reviews?.length > 0
    ? `
    <div style="border: 1px solid black">
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
