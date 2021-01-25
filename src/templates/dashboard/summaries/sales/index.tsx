import React from "react";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, LabelList, Label
  } from 'recharts';

import { Paper, Grid, Typography, Button, Modal, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';
const data: any[] = require('../../../../textJsonData/salesData.json')
const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

const useStyles = makeStyles({
table: {
    overflow: 'scroll'
},
});
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

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

    const data3 = () => {
        let total=0;
        let due=0;
        data.forEach((ele)=>{
            if(ele["Transaction Type"].includes("invoice")||ele["Transaction Type"].includes("Invoice")) {
                total+=ele["Outstanding Value in Base Currency"];
                if(ele["Overdue"]!="No")
                    due+=ele["Outstanding Value in Base Currency"];
            }
        })
        due = parseFloat(due.toFixed(2));
        let notdue = total - due;
        notdue = parseFloat(notdue.toFixed(2));
        return [{ name: "Overdue amount", value: due },{ name: "No Overdue amount", value: notdue }];
    }

    const data4 = () => {
        let d4 = new Map<string,number>();
        data.forEach((ele)=>{
            if(ele["Transaction Type"].includes("invoice")||ele["Transaction Type"].includes("Invoice")) {
                if (ele["Overdue"]=="No")
                {
                    if(d4.get(ele["Code"])==undefined)
                        d4.set(ele["Code"] , 0);
                    let val = d4.get(ele["Code"]) + ele["Outstanding Value in Base Currency"];
                    d4.set(ele["Code"] , val);
                }
            }
        })
        let finalData:any[]=[];
        d4.forEach((value,key)=>{
            value = parseFloat(value.toFixed(2));
            finalData.push({name:key,value});
        })
        console.log(finalData);
        return finalData;
    }

    const [pie1, setPie1] = React.useState(true);
    const [pie2, setPie2] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    return (
        <Grid container justify='center'>
            <Grid item xs={12}>
                <Typography variant="h5" component="h5" align='center' style={{padding:'10px',fontWeight: 'bold'}}>
                    SALES SUMMARIES
                </Typography>
            </Grid>
            <Grid item xs={11}>
                <Paper elevation={4} >
                    <Typography variant="h6" component="h6" align='right' style={{padding:'10px',fontWeight: 'bold'}}>
                            Turnover chart
                    </Typography>
                    <ResponsiveContainer height={300} className="sales-summaries">
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
            <Grid item xs={6} style={{margin:'10px'}}>
                <Paper elevation={4}>
                    <Typography variant="h6" component="h6" align='right' style={{padding:'10px',fontWeight: 'bold'}}>
                        {pie1&&"Outstanding debts"}
                        {pie2&&"Customers with no overdue"}
                    </Typography>
                    <Button size='small' variant="contained" disableElevation color='primary' style={{visibility:pie2?'visible':'hidden',marginLeft:'20px'}}
                        onClick={()=>{{setPie1(true);setPie2(false);}}}
                    >
                            Back
                    </Button>
                    <ResponsiveContainer height={400} className="sales-summaries">
                        <PieChart>
                            <Pie
                            data={data3()}
                            label={true}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            style={{visibility:pie1?'visible':'hidden',cursor:'pointer'}}
                            >
                            {
                                data3().map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} onClick={()=>{{setPie1(false);setPie2(true);}}} />)
                            }
                            </Pie>
                            <Pie
                            data={data4()}
                            label={true}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            style={{visibility:pie2?'visible':'hidden',cursor:'pointer'}}
                            >
                            {
                                data4().map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} onClick={()=>{alert("data!")}} />)
                            }
                            </Pie>
                            <Tooltip/>
                        </PieChart>
                    </ResponsiveContainer>
                    <Button variant="contained" disableElevation size='small' onClick={()=> setOpen(true)} style={{marginLeft:'20px',marginBottom:'10px'}}>
                        View Data
                    </Button>
                </Paper>
                <Modal
                open={open}
                onClose={()=>setOpen(false)}
                >
                    <Grid container justify={'center'} style={{height:'100%'}}>
                        <Grid item xs={9} style={{alignSelf:'center',background:'white', padding:'20px'}} >
                            <TableContainer component={Paper} style={{height:'80vh',overflow:'scroll'}}>
                                <Table className={classes.table} size='small' aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell> Code </TableCell>
                                        <TableCell align="right"> Transaction Type </TableCell>
                                        <TableCell align="right"> Transaction Date </TableCell>
                                        <TableCell align="right"> Gross Value in Base Currency </TableCell>
                                        <TableCell align="right"> Net Value in Base Currency </TableCell>
                                        <TableCell align="right"> Value in Account Currency </TableCell>
                                        <TableCell align="right"> Outstanding Value in Base Currency </TableCell>
                                        <TableCell align="right"> Outstanding Value in Account Currency </TableCell>
                                        <TableCell align="right"> Due Date </TableCell>
                                        <TableCell align="right"> Overdue </TableCell>
                                        <TableCell align="right"> Overdue Days </TableCell>
                                        <TableCell align="right"> Reference</TableCell>
                                        <TableCell align="right"> Query Flag</TableCell>
                                        <TableCell align="right"> Status</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {data.map((row) => (
                                        <TableRow key={row['Code']}>
                                            <TableCell> {row['Code']} </TableCell>
                                            <TableCell align="right"> {row['Transaction Type']}</TableCell>
                                            <TableCell align="right"> {row['Transaction Date']}</TableCell>
                                            <TableCell align="right"> {row['Gross Value in Base Currency']}</TableCell>
                                            <TableCell align="right"> {row['Net Value in Base Currency']}</TableCell>
                                            <TableCell align="right"> {row['Value in Account Currency']}</TableCell>
                                            <TableCell align="right"> {row['Outstanding Value in Base Currency']}</TableCell>
                                            <TableCell align="right"> {row['Outstanding Value in Account Currency']}</TableCell>
                                            <TableCell align="right"> {row['Due Date']}</TableCell>
                                            <TableCell align="right"> {row['Overdue']}</TableCell>
                                            <TableCell align="right"> {row['Overdue Days']}</TableCell>
                                            <TableCell align="right"> {row['Reference']}</TableCell>
                                            <TableCell align="right"> {row['Query Flag']}</TableCell>
                                            <TableCell align="right"> {row['Status']}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button variant="contained" color='secondary' disableElevation size='small' onClick={()=> setOpen(false)} style={{margin:'10px'}}>
                                Close
                            </Button>
                        </Grid>
                    </Grid>
                </Modal>
            </Grid>
           </Grid>

    )
}

export default SalesSummaries;
