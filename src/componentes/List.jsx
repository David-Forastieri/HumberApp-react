
import { Collapse } from 'antd'
import React from 'react'
import EntryData from './EntryData'
import StatisticalData from './StatisticalData'
const {Panel} = Collapse

const List = ({civilList}) => {

  return (
    <div className='main_list'>
            <Collapse className='custom-collapse' accordion>
                {civilList.map((data, index) => (
                    <Panel header={<EntryData nationData={data} />} key={index}>
                        <StatisticalData nationData={data} />
                    </Panel>
                ))}
            </Collapse>
        </div>
  )
}

export default List
