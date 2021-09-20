import { IonContent, IonPage } from "@ionic/react";
import ProductList from "../components/Product/ProductList";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ProductList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
