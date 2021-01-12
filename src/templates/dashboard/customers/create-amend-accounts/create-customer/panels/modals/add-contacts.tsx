import React from "react"
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: '100%',
        },
        table: {
            minWidth: 650,
        },
        modal: {
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        heading: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
        },
        modalparent: {
            display: 'flex',
            padding: theme.spacing(1),
            alignItems: 'center',
            justifyContent: 'center',
        },
        modalfooter: {
            display: 'flex',
            justifyContent: 'flex-end',
            "& > button:not(:first-child)": {
                marginLeft: 15
            },
            marginTop: 15
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

const AddContactModal: React.FC<{ addContactModal: boolean, handleAddContactModal: any }> = ({ addContactModal, handleAddContactModal }) => {
    const classes = useStyles()
    const rootRef = React.useRef<HTMLDivElement>(null);
    const [roleName, setRoleName] = React.useState<string[]>([]);

    const handleRoleMultiple = (event: React.ChangeEvent<{ value: unknown }>) => {
        const { options } = event.target as HTMLSelectElement;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        setRoleName(value);
      };
    return (
        <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            onClose={() => handleAddContactModal(false)}
            open={addContactModal}
            aria-labelledby="add-contact-modal-title"
            aria-describedby="add-contact-modal-description"
            className={classes.modalparent}
            container={() => rootRef.current}
        >
            <div className={classes.modal}>
                <h3 id="server-modal-title">Add Contact</h3>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink id="salutation">
                        Salutation
                    </InputLabel>
                    <Select
                        labelId="salutation"
                        id="salutation-select"
                        className={classes.selectEmpty}
                    >
                        <MenuItem value={'mr'}>Mr.</MenuItem>
                        <MenuItem value={'ms'}>Ms.</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="name"
                    label="Name"
                    style={{ margin: 8 }}
                    placeholder="Name"
                    fullWidth
                    margin="dense"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="telephone"
                    label="Telephone"
                    type="number"
                    style={{ margin: 8 }}
                    placeholder="Telephone"
                    fullWidth
                    margin="dense"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="email"
                    type="email"
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder="Email"
                    fullWidth
                    margin="dense"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    id="mobile"
                    type="number"
                    label="Mobile"
                    style={{ margin: 8 }}
                    placeholder="Mobile"
                    fullWidth
                    margin="dense"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    id="fax"
                    label="Fax"
                    style={{ margin: 8 }}
                    type="number"
                    placeholder="Fax"
                    fullWidth
                    margin="dense"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="roles-select">
                        Roles
                     </InputLabel>
                    <Select
                        multiple
                        native
                        value={roleName}
                        onChange={handleRoleMultiple}
                        inputProps={{
                            id: "roles-select",
                        }}
                    >

                        <option key={"role1"} value={"role1"}>
                            {"Role1"}
                        </option>
                        <option key={"role2"} value={"role2"}>
                            {"Role2"}
                        </option>

                    </Select>
                </FormControl>
                <div className={classes.modalfooter}>
                    <Button variant="contained">
                        Cancel
                </Button>
                    <Button variant="contained" color="primary">
                        Add
                </Button>
                </div>
            </div>
        </Modal>
    )
}

export default AddContactModal