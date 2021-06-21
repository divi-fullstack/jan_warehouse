import * as React from 'react';
import {DataGrid, ColDef, ValueGetterParams} from '@material-ui/data-grid';
import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme : Theme) => createStyles({
    NVtitle: {
        fontSize: "30px",
        fontWeight: "bold"
    },
    NVlabel: {
        lineHeight: "",
        paddingRight: theme.spacing(1),
        fontSize: '14px',
        display:'block',
        fontStyle:'bold',
        paddingTop:"5px"
    },NVA: {
        lineHeight: "",
        paddingRight: theme.spacing(1),
        fontSize: '12px',
        fontStyle:'none',
        color:'#008000'

    },formControl: {
      margin: theme.spacing(1), 
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const columns : ColDef[] = [
    {
        field: 'id',
        headerName: 'Document Number',
        width: 150
    }, {
        field: 'Document_Type',
        headerName: 'Document Type',
        width: 130
    }, {
        field: 'Document_Date',
        headerName: 'Document Date',
        width: 130
    }, {
        field: 'Supplier_Code',
        headerName: 'Supplier_Code',
        width: 130
    }, {
        field: 'Supplier_Name',
        headerName: 'Supplier Name',
        width: 130
    }, {
        field: 'Document_Status',
        headerName: 'Document_Status',
        width: 130
    }, {
        field: 'Goods_Total',
        headerName: 'Goods_Total',
        width: 130
    }
];

const rows = [
    {
        id: '1',
        Document_Date: '03/10/2000',
        Document_Type: '1000',
        Supplier_Code: '35',
        Supplier_Name: 'AS_Data',
        Document_Status: 'RS_Data',
        Goods_Total: "GT_Data"
    }
];

const columns2 : ColDef[] = [
    {
        field: 'id',
        headerName: 'Order No',
        width: 150
    }, {
        field: 'Message',
        headerName: 'Message',
        width: 130
    }, {
        field: 'Sent_By',
        headerName: 'Sent_By',
        width: 130
    }, {
        field: 'Date',
        headerName: 'Date',
        width: 90
    }, {
        field: 'Due_Date',
        headerName: 'Due_Date',
        width: 100
    }, {
        field: 'Order_Taken',
        headerName: 'Order_Taken',
        width: 130
    }, {
        field: 'Order_Originator',
        headerName: 'Order_Originator',
        width: 130
    },
    {
        field: 'Sent',
        headerName: 'Sent',
        width: 100
    },
    {
        field: 'Type',
        headerName: 'Type',
        width: 100
    }
];

const rows2 = [
    {
        id: 'ON_Data',
        Message: 'M_Data',
        Sent_By: 'SB_Data',
        Date: '03/10/2000',
        Due_Date: 'DD_Data',
        Order_Taken: 'OT_Data',
        Order_Originator: "OO_Data",
        Sent: "S_Data",
        Type: "T_Data"
    }
];

const columns3 : ColDef[] = [
    {
        field: 'id',
        headerName: 'File Name',
        width: 150
    }, {
        field: 'Description',
        headerName: 'Description',
        width: 130
    }, {
        field: 'File_Size',
        headerName: 'File_Size',
        width: 130
    }, {
        field: 'Date_Time_Modified',
        headerName: 'Date_Time_Modified',
        width: 130
    }, {
        field: 'Link',
        headerName: 'Link',
        width: 130
    }
];

const rows3 = [
    {
        id: '1',
        Description: '1000',
        File_Size: '03/10/2000',
        Date_Time_Modified: '35',
        Link: 'AS_Data'
    }
];

export default function PurchaseDocuments() {
    const classes = useStyles();

    const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

const cusomData = () =>
{
    if(age == "10")
    {
        return(
            <div className="row" style={{display:"flex",padding:"20px"}}>
                <div className="" style={{width:"20%",paddingLeft:"20px",justifyContent:"left"}}>
                    <label className={classes.NVlabel}
                                >
                                Goods Total :
                            </label>
                            
                            <label className={classes.NVlabel}
                                >
                                Charges :
                            </label>

                            <label className={classes.NVlabel}
                                >
                                Discount Value :
                            </label>

                            <label className={classes.NVlabel}
                                >
                                Landed Costs : 
                            </label>

                            <label className={classes.NVlabel}
                                >
                                Net Value : 
                            </label>

                            <label className={classes.NVlabel}
                                >
                                Vat Value : 
                            </label>

                            <label className={classes.NVlabel}
                                >
                                Gross Value : 
                            </label>

                            <label className={classes.NVlabel}
                                >
                                Currency : 
                            </label>

                            <label className={classes.NVlabel}
                                >
                                Exchange Rate : 
                            </label>

                            <label className={classes.NVlabel}
                                >
                                Order Discount Percentage : 
                            </label>

                            <label className={classes.NVlabel}
                                >
                                Discount/Surcharge : 
                            </label>

                            <label className={classes.NVlabel}
                                >
                                Early Settlement Discount : 
                            </label>

                            <label className={classes.NVlabel}
                                >
                                If Paid Within : 
                            </label>
                            </div>
                <div className="" style={{width:"20%",justifyContent:"left"}}>
                            <label className={classes.NVlabel}>
                                588.74 
                            </label>

                            <label className={classes.NVlabel}>
                                0.00 
                            </label>    

                            <label className={classes.NVlabel}>
                                0.00 
                            </label>

                            <label className={classes.NVlabel}>
                                0.00 
                            </label>

                            <label className={classes.NVlabel}>
                                588.74 
                            </label>

                            <label className={classes.NVlabel}>
                                117.15 
                            </label>

                            <label className={classes.NVlabel}>
                                702.89 
                            </label>

                            <label className={classes.NVlabel}>
                                Pound Sterling 
                            </label>

                            <label className={classes.NVlabel}>
                                1.00000 
                            </label>

                            <label className={classes.NVlabel}>
                                0.00% 
                            </label>

                            <label className={classes.NVlabel}>
                                Discount 
                            </label>

                            <label className={classes.NVlabel}>
                                2.50% 
                            </label>

                            <label className={classes.NVlabel}>
                                45% 
                            </label>
                </div>
            </div>
        )
    }

    else if(age == "20")
    {
        return(
            <div className="row" style={{display:"flex",padding:"20px"}}>
                <div className="col" style={{width:"20%",paddingLeft:"20px",justifyContent:"left"}}>
                    <label className={classes.NVlabel}>
                                Delivery Address :
                    </label>

                    <label className={classes.NVlabel}>
                                Telephone :
                    </label>

                    <label className={classes.NVlabel}>
                                Fax :
                    </label>

                    <label className={classes.NVlabel}>
                                Email :
                    </label>

                    <label className={classes.NVlabel}>
                                VAT Rate :
                    </label>

                    <label className={classes.NVlabel}>
                                Country :
                    </label>

                    <label className={classes.NVlabel}>
                                Supplier Address :
                    </label>
                </div>
                <div className="col" style={{width:"20%",justifyContent:"right"}}>
                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                    <label className={classes.NVlabel}>
                                Dene Road
Jesmond
Newcastle upon Tyne
NE3 4KL
                    </label>
                </div>
            </div>
        )
    }

    else if(age == "30")
    {
        return(
            <div className="row" style={{display:"flex",padding:"20px"}}>

                <div className="col" style={{width:"20%",paddingLeft:"20px",justifyContent:"left"}}>

                    <label className={classes.NVlabel}>
                                Analytics Code 1 :
                    </label>

                    <label className={classes.NVlabel}>
                                Analytics Code 2 :
                    </label>

                    <label className={classes.NVlabel}>
                                Analytics Code 3 :
                    </label>

                    <label className={classes.NVlabel}>
                                Analytics Code 4 :
                    </label>

                    <label className={classes.NVlabel}>
                                Analytics Code 5 :
                    </label>
                </div>
                <div className="col" style={{width:"20%",justifyContent:"right"}}>

                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                </div>

            </div>
        )
    }
    else if(age == '40')
    {
        return (
                        <div className="">
                            <div style={{
                marginLeft: '13px',
                paddingTop:"10px"
            }}>
                <a href="" className={classes.NVA}>Action |</a>
                <a href="" className={classes.NVA}>Export |</a>
                <a href="" className={classes.NVA}>Print |</a>
                <a href="" className={classes.NVA}>Refresh
                </a>
            </div>
            <br />
        <div
                style={{
                minHeight: 200,
                maxHeight: 400,
                width: '100%'
            }}>
                <DataGrid rows={rows2} columns={columns2} pageSize={5} checkboxSelection/>
            </div>
            </div>
        )
    }

    else if(age == '50')
    {
        return(
            <div className="row" style={{display:"flex",padding:"20px"}}>
                <div className="col" style={{width:"20%",paddingLeft:"20px",justifyContent:"left"}}>
                    <label className={classes.NVlabel}>
                                Document No :
                    </label>

                    <label className={classes.NVlabel}>
                                Document Type :
                    </label>

                    <label className={classes.NVlabel}>
                                Document Date :
                    </label>

                    <label className={classes.NVlabel}>
                                Supplier Code :
                    </label>

                    <label className={classes.NVlabel}>
                                Supplier Name :
                    </label>

                    <label className={classes.NVlabel}>
                                Supplier Postcode :
                    </label>

                    <label className={classes.NVlabel}>
                                Supplier Reference No :
                    </label>

                    <label className={classes.NVlabel}>
                                Document Status :
                    </label>

                    <label className={classes.NVlabel}>
                                Date Requested :
                    </label>

                    <label className={classes.NVlabel}>
                                Warehouse :
                    </label>

                    <label className={classes.NVlabel}>
                                Order Taken :
                    </label>

                    <label className={classes.NVlabel}>
                                Order Originator :
                    </label>

                    <label className={classes.NVlabel}>
                                Currency :
                    </label>
                </div>
                <div className="col" style={{width:"20%",justifyContent:"right"}}>
                    <label className={classes.NVlabel}>
                                0000000063
                    </label>

                    <label className={classes.NVlabel}>
                                Purchase Order
                    </label>

                    <label className={classes.NVlabel}>
                                12/10/2021
                    </label>

                    <label className={classes.NVlabel}>
                                QUA001
                    </label>

                    <label className={classes.NVlabel}>
                                Quality Motors
                    </label>

                    <label className={classes.NVlabel}>
                                NE3 4KL
                    </label>

                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                    <label className={classes.NVlabel}>
                                Live
                    </label>

                    <label className={classes.NVlabel}>
                                30/10/2021
                    </label>

                    <label className={classes.NVlabel}>
                                &nbsp;
                    </label>

                    <label className={classes.NVlabel}>
                                Siobhan Winter
                    </label>

                    <label className={classes.NVlabel}>
                                Siobhan Winter
                    </label>

                    <label className={classes.NVlabel}>
                                Pound Sterling
                    </label>
                </div>
            </div>
        )
    }

    else if(age == '60')
    {
        return (
            <div className="">
                            <div style={{
                marginLeft: '13px',
                paddingTop:"10px"
            }}>
                <a href="" className={classes.NVA}>Action |</a>
                <a href="" className={classes.NVA}>Export |</a>
                <a href="" className={classes.NVA}>Print |</a>
                <a href="" className={classes.NVA}>Refresh
                </a>
            </div>
            <br />
            
        <div
                style={{
                minHeight: 200,
                maxHeight: 400,
                width: '100%'
            }}>
                <DataGrid rows={rows3} columns={columns3} pageSize={5} checkboxSelection/>
            </div>
            </div>
        )
    }
}
    return (
        <div className="">
            <Typography
                style={{
                marginLeft: '11px'
            }}
                className={classes.NVtitle}>Purchase Documents
            </Typography>
            <div style={{
                marginLeft: '13px'
            }}>
                <a href="" className={classes.NVA}>Amend Details |</a>
                <a href="" className={classes.NVA}>Action |</a>
                <a href="" className={classes.NVA}>Report |</a>
                <a href="" className={classes.NVA}>Export |</a>
                <a href="" className={classes.NVA}>Print |</a>
                <a href="" className={classes.NVA}>Refresh
                </a>
            </div>
            <br/>

            <div
                style={{
                minHeight: 200,
                maxHeight: 400,
                width: '100%'
            }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
            </div>

            <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select One</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Document Totals</MenuItem>
          <MenuItem value={20}>Delivery And Invoicing Details</MenuItem>
          <MenuItem value={30}>Analysis</MenuItem>
          <MenuItem value={40}>Notification List</MenuItem>
          <MenuItem value={50}>Document Details</MenuItem>
          <MenuItem value={60}>Attachments</MenuItem>
        </Select>
      </FormControl>

      {cusomData()}

         
        </div>
    );
}

export {}