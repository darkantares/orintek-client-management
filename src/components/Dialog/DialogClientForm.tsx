import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/context';
import { DialogComponent } from './DialogComponent';

import { Box, TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

import './FormTable.css';

export const DialogClientForm = () => {
    const { clientsState, setClients, showClientForm } = useContext(GlobalContext);
    const { isDialogClientFormOpen, clientToUpdate } = clientsState;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const handleClose = () => {
        showClientForm();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Datos enviados:', formData);

        // Aquí puedes agregar lógica para enviar datos
        // setClients([...clientsState.clients, formData]); // Ejemplo de lógica
    };

    useEffect(() => {
        console.log('Dialog abierto:', isDialogClientFormOpen);
    }, [isDialogClientFormOpen]);

    return (
        <DialogComponent
            isOpen={isDialogClientFormOpen}
            handleClose={handleClose}
        >
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
                            value={clientToUpdate?.firstName || formData.firstName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <TextField
                            fullWidth
                            required
                            id="lastName"
                            label="Apellido"
                            name="lastName"
                            value={clientToUpdate?.lastName ||formData.lastName}
                            onChange={handleChange}
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
                            value={clientToUpdate?.email ||formData.email}
                            onChange={handleChange}
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
                            value={clientToUpdate?.phone_number ||formData.phone}
                            onChange={handleChange}
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
                                onClick={handleClose}
                            >
                                Cancelar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </DialogComponent>
    );
};
