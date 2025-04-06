import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { Card } from "./card";

export const Hero2 = () => {
  return (
    <div className="flex flex-col items-center py-8 ">
      <div className="flex flex-col items-center ">
        <h1 className="text-2xl my-4 md:text-3xl"> Getting Started is easy</h1>
        <p className="font-normal md:text-lg">
          Earn Stars and get rewarded in a few easy steps.
        </p>
      </div>

      <ul className="flex flex-col items-center px-4 py-12  md:flex-row md:mx-16 ">
        <Card
          title="Download the Starbucks® app"
          info="Join in the app to get access to the full range of Starbucks®
                Rewards benefits. You can also join online."
          photo={img2}
        />
        <Card
          title="Order and pay how you’d like"
          info="Use cash, credit/debit card or save some time and pay right
                through the app. You’ll collect Stars all ways. Learn how"
          photo={img3}
        />
        <Card
          title="Earn Stars, get Rewards"
          info="As you earn Stars, you can redeem them for Rewards—like free
                food, drinks, and more. Start redeeming with as little as 25
                Stars!"
          photo={img4}
        />
      </ul>

    </div>
  );
};
