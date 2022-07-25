import React from 'react';
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo';
import Chart from '../components/Charts/Chart';
import { userData } from "../dummyData";
import WidgetSm from '../components/widgetSm/WidgetSm';
import WidgetLg from '../components/widgetLg/WidgetLg';
import styled from 'styled-components';

const Container = styled.div`
.home{
  
  .homeWidgets{
    display: flex;
    justify-content: space-between;
    margin: 20px;
  }
}
`





const home = () => {
  return (
    <Container>
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
    </Container>
    
  );
}

export default home;
