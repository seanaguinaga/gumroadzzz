import { IonButton } from "@ionic/react";
import { FormEvent, useRef } from "react";
import NewReviewFormStars from "./NewReviewFormStars";
import NewReviewFormText from "./NewReviewFormText";

const NewReviewForm = () => {
  let ratingFormRef = useRef<HTMLFormElement | null>(null);

  let handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ratingFormRef.current) {
      let elements = ratingFormRef.current.elements;
      let obj: Record<string, string> = {};
      for (let i = 0; i < elements.length; i++) {
        let item = elements.item(i) as Element & {
          name: string;
          value: string;
        };

        if (item && item.name) {
          obj[item.name] = item.value;
        }
      }
      console.log(obj);
    }
  };

  return (
    <form ref={ratingFormRef} onSubmit={handleSubmit}>
      <NewReviewFormStars />
      <NewReviewFormText />
      <IonButton type="submit">Submit review</IonButton>
    </form>
  );
};

export default NewReviewForm;
