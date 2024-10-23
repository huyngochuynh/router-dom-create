import React from 'react'
import Modal from '@mui/material/Modal';
import { Stack, Typography } from '@mui/material';

function LearnModal({ open, handleClose, book }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
     <Stack spacing={3} alignItems="center" sx={{ maxWidth: 400, mx: 'auto', mt: 5, padding: 3, bgcolor: 'grey.900', color: 'white', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          {book?.title ?? ""}
        </Typography>

        <Typography variant="h5" gutterBottom>
          {book?.description ?? ""}
        </Typography>

        <Typography variant="h5" gutterBottom>
          Skills: {book?.skills ?? ""}
        </Typography>

        <Typography variant="h5" gutterBottom>
          City: {book?.city ?? ""}
        </Typography>
      </Stack>
    </Modal>
  )
}

export default LearnModal;