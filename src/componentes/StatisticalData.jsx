import { Table } from 'antd';
import React from 'react'

const StatisticalData = ({nationData}) => {
    const {wins, total} = nationData
    
    const columns = [
        {
            title: 'Partidas jugadas',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Victorias',
            dataIndex: 'wins',
            key: 'wins',
        },
        {
            title: 'Eficacia',
            dataIndex: 'eficacia',
            key: 'eficacia',
        },
    ];

    const percentage = (wins / total) * 100
    const eficaciaTotal = parseFloat(percentage.toFixed(2))
    const dataSource = [{...nationData, eficacia:`% ${eficaciaTotal}` }] 

    return (
        <Table dataSource={dataSource} columns={columns} pagination={false} />
    )
}

export default StatisticalData
