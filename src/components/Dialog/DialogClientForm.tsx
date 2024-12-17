import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/context';
import { DialogComponent } from './DialogComponent';
import { Box, TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
// import { Delete } from '@mui/icons-material';
import './FormTable.css';
import { Address } from '../../interfaces';
import { IconButton } from '../Button/ButtonComponent.styled';
import { InfoAlert } from '../alert/InfoAlert';
import usePostClient from '../../hooks/useCreateClient';
import useUpdateClient from '../../hooks/useUpdateClient';

const phoneRegex = /^(\+?\d{1,4}[\s\-])?(\(?\d{1,3}\)?[\s\-]?)?(\d{3})[\s\-]?(\d{4})$/;
const emailRegex = /\S+@\S+\.\S+/;
const initial = {
    firstName: '',
    lastName: '',
    email: '',
    phone_number: '',
    addresses: [] as Address[],
}
export const DialogClientForm = () => {
    
    const [formData, setFormData] = useState(initial);

    const { clientsState, setClients, showClientForm } = useContext(GlobalContext);
    const { isDialogClientFormOpen, clientToUpdate } = clientsState;

    const {postClient,error} = usePostClient('client')
    const {updateClient} = useUpdateClient('client')

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone_number: '',
        addresses: [] as string[],
    });

    useEffect(() => {
        if (clientToUpdate) {
            setFormData({
                firstName: clientToUpdate.firstName,
                lastName: clientToUpdate.lastName,
                email: clientToUpdate.email,
                phone_number: clientToUpdate.phone_number,
                addresses: clientToUpdate.addresses || [],
            });
        }
    }, [clientToUpdate]);

    const handleClose = () => {
        showClientForm();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === 'phone_number') {
            if (!phoneRegex.test(value)) {
                setErrors((prev) => ({ ...prev, phone_number: 'Número de teléfono inválido' }));
            } else {
                setErrors((prev) => ({ ...prev, phone_number: '' }));
            }
        }

        if (name === 'email') {
            if (!emailRegex.test(value)) {
                setErrors((prev) => ({ ...prev, email: 'Correo electrónico inválido' }));
            } else {
                setErrors((prev) => ({ ...prev, email: '' }));
            }
        }
    };

    const handleAddressChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const updatedAddresses = [...formData.addresses];
        updatedAddresses[index] = { ...updatedAddresses[index], [name]: value };
        setFormData((prev) => ({ ...prev, addresses: updatedAddresses }));
    };

    const addAddress = () => {
        setFormData((prev) => ({
            ...prev,
            addresses: [
                ...prev.addresses,
                { street_address: '', city: '', state: '', zip_code: '', country: '' },
            ],
        }));
    };

    const removeAddress = (index: number) => {
        const updatedAddresses = formData.addresses.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, addresses: updatedAddresses }));
    };

    const validateForm = () => {
        const newErrors: any = {};
        let isValid = true;

        if (!formData.firstName) {
            newErrors.firstName = 'El nombre es obligatorio';
            isValid = false;
        }
        if (!formData.lastName) {
            newErrors.lastName = 'El apellido es obligatorio';
            isValid = false;
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = 'Por favor ingrese un email válido';
            isValid = false;
        }
        if (!formData.phone_number || !phoneRegex.test(formData.phone_number)) {
            newErrors.phone_number = 'Por favor ingrese un teléfono válido';
            isValid = false;
        }

        formData.addresses.forEach((address, index) => {
            console.log(address, index);
            
            if (!address.street_address || !address.city || !address.state || !address.zip_code || !address.country) {                
                // newErrors.addresses[index] = 'Todos los campos de la dirección son obligatorios';
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        console.log('Datos enviados:', formData);
        if (!validateForm()) {
            return;
        }

        if (clientToUpdate) {
            console.log('Actualizando');            
            console.log(formData);
            updateClient(clientToUpdate.id, formData).then(() =>{           
                console.log(error);
                     
                if (!error) {
                    InfoAlert({title:"Cliente actualizado correctamente",icon:"success"})    
                    setFormData(initial)        
                    showClientForm();
                }                
            })            
        } else {
            console.log('Guardando');
            
            postClient(formData).then(() =>{                
                if (!error) {
                    InfoAlert({title:"Cliente creado correctamente",icon:"success"})    
                    setFormData(initial)        
                    showClientForm();
                }                
            })
        }
    };    

    return (
        <DialogComponent isOpen={isDialogClientFormOpen} handleClose={handleClose}>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, mx: 'auto', maxWidth: 900, p: 2 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <TextField
                            fullWidth
                            required
                            id="firstName"
                            label="Nombre"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <TextField
                            fullWidth
                            required
                            id="lastName"
                            label="Apellido"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
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
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <TextField
                            fullWidth
                            required
                            id="phone_number"
                            label="Teléfono"
                            name="phone_number"
                            type="tel"
                            value={formData.phone_number}
                            onChange={handleChange}
                            error={!!errors.phone_number}
                            helperText={errors.phone_number}
                        />
                    </Grid>

                    <Grid container spacing={2}>
                        {formData.addresses.map((address, index) => (
                            <Grid size={{ lg: 12 }} key={index}>
                                <Box 
                                    display="flex" 
                                    flexDirection="row" 
                                    gap="5px"
                                >
                                    <Grid size={{ lg: 6 }}>
                                        <TextField
                                            fullWidth
                                            label={`Dirección ${index + 1}`}
                                            name="street_address"
                                            value={address.street_address}
                                            onChange={(e) => handleAddressChange(index, e)}
                                            placeholder="Calle"
                                        />
                                    </Grid>
                                    <Grid size={{ lg: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Ciudad"
                                            name="city"
                                            value={address.city}
                                            onChange={(e) => handleAddressChange(index, e)}
                                            placeholder="Ciudad"
                                        />
                                    </Grid>

                                    <Grid size={{ lg: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Estado"
                                            name="state"
                                            value={address.state}
                                            onChange={(e) => handleAddressChange(index, e)}
                                            placeholder="Estado"
                                        />
                                    </Grid>

                                    <Grid size={{ lg: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Código Postal"
                                            name="zip_code"
                                            value={address.zip_code}
                                            onChange={(e) => handleAddressChange(index, e)}
                                            placeholder="Código Postal"
                                        />
                                    </Grid>
                                    <Grid size={{ lg: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="País"
                                            name="country"
                                            value={address.country}
                                            onChange={(e) => handleAddressChange(index, e)}
                                            placeholder="País"
                                        />
                                    </Grid>
                                    <Button onClick={() => removeAddress(index)} style={{ background: '#dc3545' }}>
                                        <IconButton src="./imgs/trash.svg" style={{ width: '25px' }} />
                                    </Button>
                                </Box>
                            </Grid>
                        ))}
                        <Grid size={{ xs: 12 }}>
                            <Button type="button" variant="outlined" onClick={addAddress} sx={{ mt: 2 }}>
                                Agregar Dirección
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {clientToUpdate ? (
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 2, backgroundColor: 'warning.main', color: 'white' }}
                                >
                                    Actualizar
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 2, backgroundColor: 'primary.main', color: 'white' }}
                                >
                                    Guardar
                                </Button>
                            )}
                            <Button
                                type="button"
                                variant="contained"
                                sx={{ mt: 2, backgroundColor: 'error.main', color: 'white' }}
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
