import React from "react";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  } from 'recharts';

import { Paper, Grid, Typography } from '@material-ui/core';
const data: any[] = require('../../../../textJsonData/salesData.json')
const SalesSummaries: React.FC<{}> = () => {

    const data1 = () => {
        const sum:number[] = [0,0,0,0,0,0,0,0,0,0,0,0];
        data.forEach((ele)=>{
            const period = new Date(ele["Transaction Date"]).getMonth();
            sum[period]+=ele["Net Value in Base Currency"];
        })
        const finalData:any[]=[];
        for(let i=0;i<12;i++)
        {
            finalData.push({"name":"Period "+(i+1),"Gross":sum[i]});
        }
        return finalData;
    }

    return (
        <Grid container justify='center'>
            <Grid item xs={12}>
                <Typography variant="h5" component="h5" align='center' style={{padding:'10px',fontWeight: 'bold'}}>
                    SALES SUMMARIES
                </Typography>
            </Grid>
            <Paper elevation={4} >
                <Typography variant="h6" component="h6" align='right' style={{padding:'10px',fontWeight: 'bold'}}>
                        Turnover chart
                </Typography>
                <ResponsiveContainer width={1000} height={300} className="sales-summaries">
                    <BarChart
                        data={data1()}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Gross" fill="#3f51b5" />
                    </BarChart>
                </ResponsiveContainer>
            </Paper>
        </Grid>
    )
}

export default SalesSummaries;
