import AllPageHero from "@/components/AllPageHero";
import Services from "../home/components/Services";

const index = () => {
  return <>
  <AllPageHero home={`Home`} data={`Service`}/>
  <Services />
   </>;
};

export default index;
