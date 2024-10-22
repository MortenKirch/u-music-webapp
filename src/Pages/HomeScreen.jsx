import HomeNews from "../Components/HomeNews";
import HomeRecommend from "../Components/HomeRecommend";
import HomeReleases from "../Components/HomeReleases";

export default function HomeScreen() {
  return (
    <div className="recommendations-container">
      <HomeRecommend />
      <HomeReleases />
      <HomeNews />
    </div>
  );
}
