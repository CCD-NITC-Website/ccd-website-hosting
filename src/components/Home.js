import Hero from "./Hero"
import WhyRecruit from "./WhyRecruit"
import PlacementStatics from "./PlacementStatics"
import OurTeam from "./OurTeam"
import Form from "./Form"
import NewsMedia from "./NewsMedia"
import ActivePrograms from "../components/ActivePrograms";
// import WoFame from "./WoFame"
import Companies from "./Companies"
import NewAbout from "./NewAbout"


function Home(){
    return(
        <>
      <Hero/>
      <NewAbout/>
      {/* <About/> */}
      <WhyRecruit/>
      <PlacementStatics/>
      <Companies/>
      <NewsMedia/>
      <OurTeam/>
      <ActivePrograms/>
      <Form/>
        </>
    )
}

export default Home