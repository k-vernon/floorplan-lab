import Kitchen from "./Kitchen"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"


function FloorPlan(props) {
  return (
    <div>
      {/* <h1>Floor Plan</h1> */}
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bath size={"Full"} />
      <Bedroom bedNum={2} />
      <LivingRoom />
      <Bath size={"Half"} />
      <Bedroom bedNum={3} />
    </div>
  )
}

export default FloorPlan