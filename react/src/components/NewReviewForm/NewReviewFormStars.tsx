import { IonInput } from "@ionic/react";
import { useRef, useState } from "react";

const NewReviewFormStars = () => {
  let ratingInputRef = useRef<HTMLInputElement | null>(null);

  let [currentRating, setCurrentRating] = useState(2);

  function executeRating(rating: number) {
    if (rating === currentRating) {
      setCurrentRating(0);
    } else {
      setCurrentRating(rating);
    }
  }

  return (
    <>
      <div className="rating">
        {Array.from([1, 2, 3, 4, 5]).map((star) => {
          return (
            <i
              key={star}
              rating-value={star}
              className={`rating__star ${
                star <= currentRating ? "fas" : "far"
              } fa-star`}
              onClick={() => executeRating(star)}
            />
          );
        })}
      </div>
      <IonInput name="rating" value={currentRating} />
    </>
  );
};

export default NewReviewFormStars;
