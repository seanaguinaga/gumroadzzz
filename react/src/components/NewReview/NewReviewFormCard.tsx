import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonList,
} from "@ionic/react";
import "./NewReviewCard.css";
import NewReviewForm from "./NewReviewForm";

const NewReviewFormCard: React.FC = () => {
  return (
    <IonCard className="center">
      <IonCardHeader>
        <IonCardTitle>What's your rating?</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList lines="none">
          <NewReviewForm />
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default NewReviewFormCard;
