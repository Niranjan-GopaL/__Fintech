import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'

const Row1 = () => {
  const {data} = useGetKpisQuery();
  console.log(data);
  return (
    // Because entire jsx must be enclosed inside a common element, 
    // that is why we create these empty tags
    <>
      <DashboardBox  gridArea="a"></DashboardBox>
      <DashboardBox  gridArea="b"></DashboardBox>
      <DashboardBox  gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1