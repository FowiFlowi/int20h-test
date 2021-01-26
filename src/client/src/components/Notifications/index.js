import React, { useState } from 'react';
import clsx from 'clsx'
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MaterialCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

import canbusImage from './canbus.png';

const CAN_WIKI_URL = 'https://uk.wikipedia.org/wiki/Controller_Area_Network';

export default function Notifications() {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [badgeContent, setBadgeContent] = useState(1);

  const handleNotificationBarClick = (e) => {
    setAnchorEl(e.target);

    if (isOpen) {
      setBadgeContent(0);
      return setIsOpen(false);
    }

    setIsOpen(true);
  };

  return (
    <IconButton color="inherit" onClick={handleNotificationBarClick} disabled={!badgeContent}>
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
        <MaterialCard className={clsx(classes.fullHeight, classes.notificationContentContainer)}>
          <CardActionArea className={classes.fullHeight}>
            {canbusImage && (
              <CardMedia
                className={classes.image}
                component="img"
                height="240"
                image={canbusImage}
              />
            )}
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="b"
              >
                Не чув про кан-шину?
                <Link href={CAN_WIKI_URL} onClick={(e) => e.stopPropagation()}>
                  Дізнатися!
                </Link>
              </Typography>
            </CardContent>
          </CardActionArea>
        </MaterialCard>
      </Popover>
    </IconButton>
  );
}
