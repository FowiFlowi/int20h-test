import { view } from '@risingstack/react-easy-state';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {uiStore} from '../../store';

export default view(() => {
  return (
    <Dialog
      maxWidth={'lg'}
      open={uiStore.isOpenModal}
      onClose={uiStore.toggleModal}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can set my maximum width and whether to adapt or not.
        </DialogContentText>
        akmalskdmalkd
      </DialogContent>
      <DialogActions>
        <Button onClick={uiStore.toggleModal} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
});
