import React from 'react';
import dataList from './prising.json';
import Pricing from './Pricing';

const PricingList = () => {
  const mapDataList = (price) => <Pricing key={price.id} info={price} />;
  return <section>{dataList.map(mapDataList)}</section>;
};

export default PricingList;
