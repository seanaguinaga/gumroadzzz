import { InputChangeEventDetail } from "@ionic/core";
import { IonInput, IonItem, IonLabel } from "@ionic/react";
import { useState } from "react";

const NewReviewFormText = () => {
  let [currentText, setCurrentText] = useState("");

  let handleChange = (e: CustomEvent<InputChangeEventDetail>) => {
    if (e.detail.value) {
      setCurrentText(e.detail.value);
    }
  };

  return (
    <IonItem>
      <IonLabel position="stacked">Review</IonLabel>
      <IonInput
        clearInput
        required
        name="text"
        value={currentText}
        onIonChange={handleChange}
      />
    </IonItem>
  );
};

export default NewReviewFormText;
