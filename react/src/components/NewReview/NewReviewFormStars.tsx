import { IonCardTitle, IonInput, IonItem, IonLabel } from "@ionic/react";
import { useState } from "react";

const NewReviewFormStars = () => {
  let [currentRating, setCurrentRating] = useState(2.5);

  function executeRating(rating: number) {
    console.log({ currentRating, rating });
    setCurrentRating((currentRating) => {
      if (rating === currentRating) {
        return rating - 0.5;
      } else if (rating === currentRating + 0.5) {
        return 0;
      } else {
        return rating;
      }
    });
  }

  return (
    <IonItem>
      <IonLabel position="stacked">Rating</IonLabel>
      <IonItem style={{ height: 0 }}>
        <IonInput required name="rating" value={currentRating || undefined} />
      </IonItem>
      <IonCardTitle>
        {Array.from([1, 2, 3, 4, 5]).map((star) => {
          return (
            <i
              key={star}
              rating-value={star}
              className={`rating__star ${
                star <= currentRating
                  ? "fas"
                  : star <= currentRating + 0.5
                  ? "fas fa-star-half"
                  : "far"
              } fa-star`}
              onClick={() => executeRating(star)}
            />
          );
        })}
      </IonCardTitle>
    </IonItem>
  );
};

export default NewReviewFormStars;
