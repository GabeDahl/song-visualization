import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    resultCard: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function SearchResult() {
    const classes = useStyles();

    return (
        <Card className={classes.resultCard}>
            <CardActionArea>
                <CardMedia
                      className={classes.media}
                      image={'url'} style={{height: 100, margin: 10, backgroundSize: 'contain'}}
                      title={'title'}
                />
              <CardContent>
                    <Typography gutterBottom variant="h6">{'songtitle'}</Typography>
              </CardContent>
            </CardActionArea>
        </Card>
    );
}