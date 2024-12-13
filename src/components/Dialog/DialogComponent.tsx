import { Dialog, DialogContent } from '@mui/material';
import React from 'react';
import { OverlayDialog } from './Dialog.styled';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
}

export const DialogComponent = ({ isOpen, handleClose, children }: Props) => {
  return (
    isOpen ?
    <OverlayDialog>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        component="div"
      >       
        <DialogContent>
            {children}
        </DialogContent>
      </Dialog>
    </OverlayDialog> :
    null
  );
};
