import React from 'react'
import { PFC } from "../type";
import { DescriptionsProps } from "./type";
import Descriptions from './descriptions';


const DescriptionsMultiple: PFC<DescriptionsProps, Record<string, any>[]> = props => {
  const { dataSource = [{}], ...fields } = props;

  const renderItems = () => {
    if (dataSource?.length) {
      return dataSource.map((item, index) => {
        return (
          <Descriptions {...fields} key={index} dataSource={item} />
        )
      })
    }
    return <Descriptions {...fields} />

  }
  return (
    <div className='pfc-descriptions-multiple'>
      {
        renderItems()
      }
    </div>
  )
}

export default DescriptionsMultiple