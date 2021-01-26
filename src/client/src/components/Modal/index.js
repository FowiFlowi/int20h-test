import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { view } from '@risingstack/react-easy-state';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { uiStore, productsStore } from '../../store';
import { formatXAxis, formatYAxis } from './utils';
import { useStyles } from './styles';

export default view(() => {
  const classes = useStyles();

  const shouldRenderChart = productsStore.prices !== null;

  return (
    <Dialog
      maxWidth={'lg'}
      open={uiStore.isOpenModal}
      onClose={uiStore.toggleModal}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title" className={classes.modalText}>
        Ціни
      </DialogTitle>
      <DialogContent>
        {!shouldRenderChart && <div>Ціни поки що відсунтні :с</div>}
        {shouldRenderChart && (
          <LineChart width={500} height={300} data={productsStore.prices}>
            <XAxis tickFormatter={formatXAxis} dataKey="time" />
            <YAxis tickFormatter={formatYAxis} />
            <Line dataKey="price" dot={false} />
          </LineChart>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={uiStore.toggleModal} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
});
