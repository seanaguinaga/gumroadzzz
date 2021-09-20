import "./ExploreContainer.css";
import NewReviewFormStars from "./NewReviewForm/NewReviewFormStars";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      <div className="container">
        <NewReviewFormStars />
      </div>
    </>
  );
};

export default ExploreContainer;
