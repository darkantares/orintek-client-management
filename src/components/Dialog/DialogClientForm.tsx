import { OverlayDialog, DialogTitle } from './Dialog.styled';

import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/context';

import './FormTable.css';
import { CreateClientsInput } from '../../interfaces';
import { Box, Button, Dialog, DialogContent, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const DialogComponent = () => {

    const [client, updateClient] = useState<CreateClientsInput>();
    const {clientsState, setClients, showClientForm} = useContext(GlobalContext);
    const {isDialogClientFormOpen} = clientsState;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const handleClose = () => {
        showClientForm();
      };

    const handleChange = (event:any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(formData);
    };
    
    useEffect(() => {
      console.log(isDialogClientFormOpen);
    }, [isDialogClientFormOpen])
    
    return (
        <>
            { isDialogClientFormOpen && 
                <OverlayDialog>
                    <Dialog
                        open={isDialogClientFormOpen}
                        onClose={handleClose}
                        component="div"
                        PaperProps={{
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries((formData as any).entries());
                            const email = formJson.email;
                            console.log(email);
                        },
                        }}
                    >
                        <div style={{display: 'flex', justifyContent: 'center', marginTop:'20px'}}>
                            <DialogTitle>Formulario de clientes</DialogTitle>
                        </div>
                        <DialogContent>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{ mt: 3, mx: 'auto', maxWidth: 900, p: 2 }}
                                >
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="firstName"
                                        label="Nombre"
                                        name="firstName"
                                    />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="lastName"
                                        label="Apellido"
                                        name="lastName"
                                    />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="email"
                                        label="Email"
                                        name="email"
                                        type="email"
                                    />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="phone"
                                        label="Teléfono"
                                        name="phone"
                                        type="tel"
                                    />
                                    </Grid>
                                    <Grid size={12}>
                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{ mt: 2 }}
                                            >
                                                Enviar
                                            </Button>
                                            <Button
                                                type="button"                                   
                                                variant="contained"
                                                sx={{ mt: 2 }}
                                            >
                                                Cancelar
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </DialogContent>
                    </Dialog>
                </OverlayDialog>
            }
        </>
    )
}