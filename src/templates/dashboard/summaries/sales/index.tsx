import React from "react";
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie'
import { Paper, Grid, Typography, Button, Modal, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';
const data: any[] = require('../../../../textJsonData/salesData.json')
const useStyles = makeStyles({
    table: {
        overflow: 'scroll'
    },
});

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
            sum[i] = parseFloat(sum[i].toFixed(2));
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
        return finalData;
    }

    const data5 = () => {
        let d5 = new Map<string,number>();
        data.forEach((ele)=>{
            if(d5.get(ele["Code"])==undefined)
                        d5.set(ele["Code"] , 0);
            let val = d5.get(ele["Code"]) + ele["Net Value in Base Currency"];
            d5.set(ele["Code"] , val);
        })
        let finalData:any[]=[];
        d5.forEach((value,key)=>{
            value = parseFloat(value.toFixed(2));
            finalData.push({name:key,value});
        })
        finalData.sort((a, b) => (a.value < b.value) ? 1 : -1);
        finalData = finalData.slice(0,10).reverse();
        return finalData;        
    }

    const data6 = () => {
        let d6 = new Map<string,Array<number>>();
        data.forEach((ele)=>{
            if(d6.get(ele["Code"])==undefined)
                d6.set(ele["Code"],[0,0,0]);
            let di = d6.get(ele["Code"]);
            if(di === undefined) 
                di = [0,0,0];
            let val1 = di[0] + ele["Outstanding Value in Base Currency"];
            let date1 = new Date(ele["Transaction Date"]); 
            let date2 = new Date(ele["Due Date"]); 
            let Difference_In_Time = date2.getTime() - date1.getTime(); 
            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
            let val2 = di[1] + Difference_In_Days;
            let val3 = di[2] + 1;
            d6.set(ele["Code"] , [val1, val2, val3]);
        })
        let finalData:any[]=[];
        d6.forEach((di,key)=>{
            finalData.push({customer_code:key,outstanding_amount:di[0],avg_days:di[1]/di[2]});
        })
        finalData.sort((a, b) => (a.avg_days > b.avg_days) ? 1 : -1);
        finalData = finalData.reverse().slice(0,5).reverse();
        return finalData;        
    }

    const [pie1, setPie1] = React.useState(true);
    const [pie2, setPie2] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [tableData, setTableData] = React.useState(data);

    const filterTableData2 = (name:string) => {
        const td = data.filter((d)=> (d["Code"] === name) && (d["Transaction Type"].includes("invoice")||d["Transaction Type"].includes("Invoice")) && d["Overdue"] === "No");
        console.log('filtered data',td);
        setTableData(td);
    }

    const CustomTick = (tick:any) => {
        return (
            <g transform={`translate(${tick.x},${tick.y + 22})`} >
                <line stroke="rgb(221, 221, 221)" strokeWidth={1} y1={-22} y2={-12} />
                <text
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                        fill: '#333',
                        fontSize: 12,
                    }}
                >
                    £{parseFloat((tick.value/1000).toFixed(2))}k
                </text>
            </g>
        )
    }
    const CustomTick2 = (tick:any) => {
        return (
            <g transform={`translate(${tick.x-22},${tick.y})`} >
                <line stroke="rgb(221, 221, 221)" strokeWidth={1} x1={22} x2={12} />
                <text
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                        fill: '#333',
                        fontSize: 12,
                    }}
                >
                    £{parseFloat((tick.value/1000).toFixed(2))}k
                </text>
            </g>
        )
    }
    const getRandomColor = () =>  {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const CustomBarComponent = (b:any) => (
        <circle cx={b.x + b.width / 2} cy={b.y + b.height / 2} r={Math.min(b.width, b.height)/2} fill={getRandomColor()} fill-opacity="0.7" stroke-width="1"  style={{cursor:'pointer'}}/>
    )
    const classes = useStyles();
    return (
        <Grid container justify='center'>
            <Grid item xs={12}>
                <Typography variant="h5" component="h5" align='center' style={{padding:'10px',fontWeight: 'bold'}}>
                    SALES SUMMARIES
                </Typography>
            </Grid>
            <Grid item xs={12} style={{padding:'20px',paddingBottom:'0px'}}>
                <Paper elevation={4} style={{height:'50vh',paddingBottom:'60px'}} >
                    <Typography variant="h6" component="h6" align='right' style={{padding:'10px',fontWeight: 'bold'}}>
                            Turnover chart
                    </Typography>
                    <ResponsiveBar
                        data={data1()}
                        keys={['Gross']}
                        indexBy="name"
                        margin={{right: 110, bottom: 50, left: 80 }}
                        padding={0.3}
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={'#3f51b5'}
                        enableLabel={false}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Period',
                            legendPosition: 'middle',
                            legendOffset: 45
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Amount',
                            legendPosition: 'middle',
                            legendOffset: -60
                        }}
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 120,
                                translateY: 0,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                    />
                </Paper>
            </Grid>
            <Grid item xs={6} style={{padding:'20px',paddingRight:0,paddingBottom:0}}>
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
                    <div style={{height:'45vh', display:pie1?'block':'none',cursor:'pointer'}}>
                    <ResponsivePie
                        data={data3()}
                        margin={{right: 80, bottom: 30, left: 30 }}
                        padAngle={0.7}
                        id='name'
                        value='value'
                        cornerRadius={3}
                        colors={{ scheme: 'nivo' }}
                        borderWidth={1}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                        radialLabelsSkipAngle={10}
                        radialLabelsTextColor="#333333"
                        radialLabelsLinkColor={{ from: 'color' }}
                        sliceLabelsSkipAngle={10}
                        sliceLabelsTextColor="#333333"
                        legends={[
                            {
                                anchor: 'right',
                                direction: 'column',
                                justify: false,
                                itemsSpacing: 2,
                                itemWidth: 60,
                                itemHeight: 14,
                                itemTextColor: '#999',
                                itemDirection: 'left-to-right',
                                itemOpacity: 1,
                                symbolSize: 14,
                                symbolShape: 'circle'
                            }]}
                        onClick={()=>{setPie1(false);setPie2(true);}}
                    />
                    </div>
                    <div style={{height:'50vh', display:pie2?'block':'none',cursor:'pointer'}}>
                    <ResponsivePie
                        data={data4()}
                        margin={{right: 0, bottom: 40, left: 0, top:40 }}
                        padAngle={0.7}
                        id='name'
                        value='value'
                        cornerRadius={3}
                        colors={{ scheme: 'nivo' }}
                        borderWidth={1}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                        radialLabelsSkipAngle={10}
                        radialLabelsTextColor={{
                            from: 'color',
                            modifiers: [['darker', 2]],
                        }}
                        enableSliceLabels={false}                
                        radialLabelsLinkColor={{ from: 'color' }}
                        radialLabel={d => `${d.id}:${d.value}`}
                        onClick={(data:any)=>{ filterTableData2(data.id);setOpen(true);}}
                    />
                    </div>
                    <Button variant="contained" disableElevation size='small' onClick={()=> {setTableData(data); setOpen(true)}} style={{marginLeft:'20px',marginBottom:'10px',visibility:pie1?'visible':'hidden'}}>
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
                                    {tableData.map((row) => (
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
            <Grid item xs={6} style={{padding:'20px',paddingBottom:0}}>
                <Paper elevation={4}>
                    <Typography variant="h6" component="h6" align='right' style={{padding:'10px',fontWeight: 'bold'}}>
                            Top customers
                    </Typography>
                    <div style={{height:'56vh',cursor:'pointer'}}>
                    <ResponsiveBar
                        data={data5()}
                        keys={['value']}
                        layout="horizontal"
                        indexBy="name"
                        maxValue={data5()[9].value + 5000}
                        enableGridX={true}
                        enableGridY={false}
                        margin={{right: 50, bottom: 50, left: 80 }}
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={'rgb(244, 117, 96)'}
                        enableLabel={false}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Customer Codes',
                            legendPosition: 'middle',
                            legendOffset: -70
                        }}
                        axisBottom={{
                            tickSize: 5,
                            renderTick: CustomTick
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                        tooltip={({ id, value, color }) => (
                            <strong>
                                £{parseFloat((value/1000).toFixed(2))}k
                            </strong>
                        )}
                    />
                    </div>
                </Paper>
                </Grid>                     
            <Grid item xs={6} style={{padding:'20px',paddingBottom:0}}>
                <Paper elevation={4}>
                    <Typography variant="h6" component="h6" align='right' style={{padding:'10px',fontWeight: 'bold'}}>
                            Worst Paying Customers
                    </Typography>
                    <div style={{height:'56vh'}}>
                    <ResponsiveBar
                        data={data6()}
                        keys={['outstanding_amount']}
                        indexBy='avg_days'
                        enableGridX={false}
                        enableGridY={true}
                        margin={{right: 50, bottom: 50, left: 80, top:5 }}
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        enableLabel={false}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Outstanding Balance',
                            legendPosition: 'middle',
                            legendOffset: -70,
                            renderTick: CustomTick2
                        }}
                        axisBottom={{
                            tickSize: 5,
                            legend: 'Average days to pay',
                            legendPosition: 'middle',
                            legendOffset: 30,
                        }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                        barComponent={CustomBarComponent}
                    />
                    </div>
                </Paper>
            </Grid>                     
           </Grid>

    )
}

export default SalesSummaries;
