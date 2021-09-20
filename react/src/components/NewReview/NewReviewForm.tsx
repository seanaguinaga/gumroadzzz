import { IonButton, IonLoading, IonToast } from "@ionic/react";
import { FormEvent, useRef } from "react";
import { useHistory, useParams } from "react-router";
import { useInsertReviewMutation } from "../../generated/graphql";
import NewReviewFormStars from "./NewReviewFormStars";
import NewReviewFormText from "./NewReviewFormText";

const NewReviewForm = () => {
  let history = useHistory();
  let { productID } = useParams<{ productID: string }>();

  let ratingFormRef = useRef<HTMLFormElement | null>(null);

  let [commit, { loading, error }] = useInsertReviewMutation();

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

      try {
        await commit({
          variables: {
            review_insert_input: { ...obj, ...{ product_id: productID } },
          },
          refetchQueries: ["listAllProductsWithReviewsAndAggregate"],
          awaitRefetchQueries: true,
        });

        history.goBack();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form ref={ratingFormRef} onSubmit={handleSubmit}>
      {loading && <IonLoading isOpen />}
      {error && <IonToast message={error.message} isOpen />}
      <NewReviewFormStars />
      <NewReviewFormText />
      <IonButton type="submit">Submit review</IonButton>
    </form>
  );
};

export default NewReviewForm;
