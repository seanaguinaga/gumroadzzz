import { IonCardTitle, IonInput, IonItem, IonLabel } from "@ionic/react";
import { useState } from "react";

const NewReviewFormStars = () => {
  let [currentRating, setCurrentRating] = useState(0);

  function executeRating(rating: number) {
    if (rating === currentRating) {
      setCurrentRating(0);
    } else {
      setCurrentRating(rating);
    }
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
                star <= currentRating ? "fas" : "far"
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
