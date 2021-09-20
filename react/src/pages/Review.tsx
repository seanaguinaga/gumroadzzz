import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import NewReviewFormCard from "../components/NewReviewForm/NewReviewFormCard";

const Review: React.FC = () => {
  let { reviewID } = useParams<{ reviewID: string }>();
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
        <NewReviewFormCard reviewID={reviewID} />
      </IonContent>
    </IonPage>
  );
};

export default Review;
