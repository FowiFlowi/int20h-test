import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Link from '@material-ui/core/Link';

import { useStyles } from './styles';
import Card from '../Card';

const CAN_WIKI_URL = 'https://uk.wikipedia.org/wiki/Controller_Area_Network';
const CAN_IMAGE_URL = 'https://i.ytimg.com/vi/2yWItRfjg8w/maxresdefault.jpg';

export default function Notifications() {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [badgeContent, setBadgeContent] = useState(1);

  const handleNotificationBarClick = (e) => {
    if (!anchorEl) {
      setAnchorEl(e.currentTarget);
    }

    if (isOpen) {
      setBadgeContent(0);
      return setIsOpen(false);
    }
    setIsOpen(true);
  };

  return (
    <IconButton color="inherit" onClick={handleNotificationBarClick}>
      <Badge badgeContent={badgeContent} color="secondary">
        <NotificationsIcon />
      </Badge>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Card title={'Не слышал про CAN?'} imageUrl={CAN_IMAGE_URL}>
          Читать
          <Link href={CAN_WIKI_URL} className={classes.notificationLink}>
            тут!
          </Link>
        </Card>
      </Popover>
    </IconButton>
  );
}
