import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import NewReviewFormCard from "../components/NewReview/NewReviewFormCard";

const Review: React.FC = () => {
  let { productID } = useParams<{ productID: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <NewReviewFormCard productID={productID} />
      </IonContent>
    </IonPage>
  );
};

export default Review;
