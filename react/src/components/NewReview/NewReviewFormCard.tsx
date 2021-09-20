import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonList,
} from "@ionic/react";
import "./NewReviewCard.css";
import NewReviewForm from "./NewReviewForm";

interface NewReviewFormCardProps {
  productID: string;
}

const NewReviewFormCard: React.FC<NewReviewFormCardProps> = ({ productID }) => {
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
