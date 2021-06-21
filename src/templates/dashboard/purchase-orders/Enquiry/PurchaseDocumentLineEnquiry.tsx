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
        field: 'Line_Number',
        headerName: 'Line_Number',
        width: 130
    }, {
        field: 'Line_Type',
        headerName: 'Line_Type',
        width: 130
    }, {
        field: 'Item_Code',
        headerName: 'Item_Code',
        width: 130
    }, {
        field: 'Item_Name',
        headerName: 'Item_Name',
        width: 130
    }, {
        field: 'Quantity',
        headerName: 'Quantity',
        width: 130
    }, {
        field: 'Buying_Unit',
        headerName: 'Buying_Unit',
        width: 130
    }, {
        field: 'Buying_Price_Unit',
        headerName: 'Buying_Price_Unit',
        width: 130
    } , {
        field: 'Unit_Price',
        headerName: 'Unit_Price',
        width: 130
    }, {
        field: 'Net_Value',
        headerName: 'Net_Value',
        width: 130
    }, {
        field: 'VAT_Value',
        headerName: 'VAT_Value',
        width: 130
    }, {
        field: 'Received_Quantity',
        headerName: 'Received_Quantity',
        width: 130
    }, {
        field: 'Invoiced_Quantity',
        headerName: 'Invoiced_Quantity',
        width: 130
    }, {
        field: 'Complete',
        headerName: 'Complete',
        width: 130
    }
];

const rows = [
    {
        id: '1',
        Line_Number: '1000',
        Line_Type: '03/10/2000',
        Item_Code: '35',
        Item_Name: 'AS_Data',
        Quantity: 'RS_Data',
        Buying_Unit: "GT_Data",
        Buying_Price_Unit:"BPU_Data",
        Unit_Price:"BP_Data",
        Net_Value:"NV_Data",
        Received_Quantity:"RQ_Data",
        Invoiced_Quantity:"IQ_Data",
        Complete:"C_Data"

    }
];

const columns2 : ColDef[] = [
    {
        field: 'id',
        headerName: 'Invoice/Credit Number',
        width: 160
    }, {
        field: 'InvoiceCredit_Type',
        headerName: 'Invoice/Credit_Type',
        width: 160
    }, {
        field: 'InvoiceCredit_Date',
        headerName: 'Invoice/Credit_Date',
        width: 160
    }, {
        field: 'Item_Code',
        headerName: 'Item_Code',
        width: 90
    }, {
        field: 'Quantity',
        headerName: 'Quantity',
        width: 100
    }, {
        field: 'Discounted_Unit_Price',
        headerName: 'Discounted_Unit_Price',
        width: 160
    }
];

const rows2 = [
    {
        id: 'ON_Data',
        InvoiceCredit_Type: 'M_Data',
        InvoiceCredit_Date: 'SB_Data',
        Item_Code: '03/10/2000',
        Quantity: 'DD_Data',
        Discounted_Unit_Price: 'OT_Data',
    }
];

const columns3 : ColDef[] = [
    {
        field: 'id',
        headerName: 'Receipt/Despatch Number',
        width: 180
    }, {
        field: 'Type',
        headerName: 'Type',
        width: 130
    }, {
        field: 'ReceiptDesptch_Date',
        headerName: 'ReceiptDesptch_Date',
        width: 160
    }, {
        field: 'Supplier_Document_Number',
        headerName: 'Supplier_Document_Number',
        width: 180
    }, {
        field: 'Item_Code',
        headerName: 'Item_Code',
        width: 100
    }, {
        field: 'ReceiptDispatch_Quantity',
        headerName: 'ReceiptDispatch_Quantity',
        width: 180
    },
     {
        field: 'InvoiceCredit_Quntity',
        headerName: 'Invoice/Credit_Quntity',
        width: 180
    }
];

const rows3 = [
    {
        id: 'ON_Data',
        Type: 'M_Data',
        ReceiptDesptch_Date: 'SB_Data',
        Supplier_Document_Number: '03/10/2000',
        Item_Code: 'DD_Data',
        ReceiptDispatch_Quantity: 'OT_Data',
        InvoiceCredit_Quntity:'I_Data'
    }
];

const columns4 : ColDef[] = [
    {
        field: 'id',
        headerName: 'Requested Date',
        width: 150
    }, {
        field: 'Quantity_To_Deliver',
        headerName: 'Quantity_To_Deliver',
        width: 130
    }
];

const rows4 = [
    {
        id: '1',
        Quantity_To_Deliver: '1000',
    }
];

const columns5 : ColDef[] = [
    {
        field: 'id',
        headerName: 'Customer Code',
        width: 150
    }, {
        field: 'Customer_Name',
        headerName: 'Customer_Name',
        width: 130
    }, {
        field: 'Sales_Order_Number',
        headerName: 'Sales_Order_Number',
        width: 130
    }, {
        field: 'Supplier_Document_Number',
        headerName: 'Supplier_Document_Number',
        width: 90
    }, {
        field: 'Type',
        headerName: 'Type',
        width: 100
    }, {
        field: 'Purchase_Order_Quntity',
        headerName: 'Purchase_Order_Quntity',
        width: 130
    },
     {
        field: 'Sales_Order_Quantity_Despatched',
        headerName: 'Sales_Order_Quantity_Despatched',
        width: 130
    },     {
        field: 'Sales_Order_Quantity_Outstanding',
        headerName: 'Sales_Order_Quantity_Outstanding',
        width: 130
    }
];

const rows5 = [
    {
        id: 'CC_Data',
        Customer_Name: 'CN_Data',
        Sales_Order_Number: 'SON_Data',
        Supplier_Document_Number: 'SDN_Data',
        Type: 'T_Data',
        Purchase_Order_Quntity: 'POQ_Data',
        Sales_Order_Quantity_Despatched:'SOQD_Data',
        Sales_Order_Quantity_Outstanding:'SOQO_Data'
    }
];

export default function PurchaseDocumentLineEnquiry() {
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

    else if(age == "20")
    {
        return(
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
            </div>        )
    }

    else if(age == "30")
    {
        return(
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
                <DataGrid rows={rows4} columns={columns4} pageSize={5} checkboxSelection/>
            </div>
            </div>       )
    }

    else if(age == '40')
    {
        return (
                        <div className="row" style={{display:"flex",padding:"20px"}}>
                <div className="col" style={{width:"20%",paddingLeft:"20px",justifyContent:"left"}}>
                    <label className={classes.NVlabel}>
                                Nominal Account  :
                    </label>

                    <label className={classes.NVlabel}>
                                Nominal Description :
                    </label>

                    <label className={classes.NVlabel}>
                                Analysis Code 1 :
                    </label>

                    <label className={classes.NVlabel}>
                                Analysis Code 2 :
                    </label>

                    <label className={classes.NVlabel}>
                                Analysis Code 3 :
                    </label>

                    <label className={classes.NVlabel}>
                                Analysis Code 4 :
                    </label>

                    <label className={classes.NVlabel}>
                                Analysis Code 5 :
                    </label>

                </div>
                <div className="col" style={{width:"20%",justifyContent:"right"}}>
                    <label className={classes.NVlabel}>
                                1001
                    </label>

                    <label className={classes.NVlabel}>
                                Stock
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
                                Product Group Code :
                    </label>

                    <label className={classes.NVlabel}>
                                Product Group Name :
                    </label>

                    <label className={classes.NVlabel}>
                                Item Code :
                    </label>

                    <label className={classes.NVlabel}>
                                Item Name :
                    </label>

                    <label className={classes.NVlabel}>
                                Amend Line Description :
                    </label>

                    <label className={classes.NVlabel}>
                                Description :
                    </label>

                    <label className={classes.NVlabel}>
                                Warehouse :
                    </label>

                    <label className={classes.NVlabel}>
                                Supplier Part Reference :
                    </label>

                    <label className={classes.NVlabel}>
                                Quantity :
                    </label>

                    <label className={classes.NVlabel}>
                                Buying Unit :
                    </label>

                    <label className={classes.NVlabel}>
                                Buying Price Unit :
                    </label>

                    <label className={classes.NVlabel}>
                                Unit Price :
                    </label>

                    <label className={classes.NVlabel}>
                                Unit Discount % :
                    </label>

                                        <label className={classes.NVlabel}>
                                Unit Discount :
                    </label>

                                        <label className={classes.NVlabel}>
                                Discounted Unit Price :
                    </label>

                                        <label className={classes.NVlabel}>
                                Landed Costs Type :
                    </label>

                                        <label className={classes.NVlabel}>
                                Landed Costs Value :
                    </label>

                                        <label className={classes.NVlabel}>
                                Total Landed Costs Value :
                    </label>

                                        <label className={classes.NVlabel}>
                                VAT Rate :
                    </label>

                                        <label className={classes.NVlabel}>
                                Net Value :
                    </label>

                                        <label className={classes.NVlabel}>
                                VAT Value :
                    </label>

                                        <label className={classes.NVlabel}>
                                ConfirmationMethod :
                    </label>

                                        <label className={classes.NVlabel}>
                                Received Quantity :
                    </label>

                                        <label className={classes.NVlabel}>
                                Invoiced Quantity :
                    </label>

                                        <label className={classes.NVlabel}>
                                Complete :
                    </label>

                                        <label className={classes.NVlabel}>
                                Currency  :
                    </label>

                                                            <label className={classes.NVlabel}>
                                Exchange Rate  :
                    </label>
                </div>


                 <div className="col" style={{width:"20%",justifyContent:"right"}}>
                    <label className={classes.NVlabel}>
                                0006
                    </label>

                    <label className={classes.NVlabel}>
                                Presentation Supplies
                    </label>

                    <label className={classes.NVlabel}>
                                BOARD001
                    </label>

                    <label className={classes.NVlabel}>
                                Whiteboard - Drywipe (900 x 1200)
                    </label>

                    <label className={classes.NVlabel}>
                                No
                    </label>

                    <label className={classes.NVlabel}>
                                Whiteboard - Drywipe (900 x 1200)
                    </label>

                    <label className={classes.NVlabel}>
                                Warehouse
                    </label>

                    <label className={classes.NVlabel}>
                                U143
                    </label>

                    <label className={classes.NVlabel}>
                                35.00000
                    </label>

                    <label className={classes.NVlabel}>
                                Each
                    </label>

                    <label className={classes.NVlabel}>
                                Each
                    </label>

                    <label className={classes.NVlabel}>
                                13.20000
                    </label>

                    <label className={classes.NVlabel}>
                                0.00%
                    </label>

                                        <label className={classes.NVlabel}>
                                0.00000
                    </label>

                                        <label className={classes.NVlabel}>
                                13.20000
                    </label>

                                        <label className={classes.NVlabel}>
                                Not Applicable
                    </label>

                                        <label className={classes.NVlabel}>
                                0.00
                    </label>

                                        <label className={classes.NVlabel}>
                                0.00
                    </label>

                                        <label className={classes.NVlabel}>
                                1 - Standard rate
                    </label>

                                        <label className={classes.NVlabel}>
                                462.00
                    </label>

                                        <label className={classes.NVlabel}>
                                92.40
                    </label>

                                        <label className={classes.NVlabel}>
                                Confirm via Despatch/Receipt
                    </label>

                                        <label className={classes.NVlabel}>
                                0.00000
                    </label>

                                        <label className={classes.NVlabel}>
                                0.00000
                    </label>

                                        <label className={classes.NVlabel}>
                                No
                    </label>

                                        <label className={classes.NVlabel}>
                                Pound Sterling
                    </label>

                                                            <label className={classes.NVlabel}>
                                1.000000
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
                <DataGrid rows={rows5} columns={columns5} pageSize={5} checkboxSelection/>
            </div>
            </div>
        )
    }

    else if(age == '70')
    {
        return <p style={{padding:"30px"}}>There Is No Data To Display</p>
    }
}
    return (
        <div className="">
            <Typography
                style={{
                marginLeft: '11px'
            }}
                className={classes.NVtitle}>Purchase Document Lines
            </Typography>
            <div style={{
                marginLeft: '13px'
            }}>
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
          <MenuItem value={10}>Invoiced/Credit Lines</MenuItem>
          <MenuItem value={20}>Receipt/Despatch Lined</MenuItem>
          <MenuItem value={30}>Requested Dates</MenuItem>
          <MenuItem value={40}>Analysis</MenuItem>
          <MenuItem value={50}>Standard Item Line Details</MenuItem>
          <MenuItem value={60}>Linked Sales Orders</MenuItem>
          <MenuItem value={70}>Linked Sales Order Totals</MenuItem>
        </Select>
      </FormControl>

      {cusomData()}

         
        </div>
    );
}

export {}