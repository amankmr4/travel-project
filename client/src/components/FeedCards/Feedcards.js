/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Image } from 'cloudinary-react'

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 5,
        textAlign: "center",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} id={props.key}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.first_name} {props.last_name}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.location}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <Image style={{ width: 200, height: 200 }} cloudName="akak94" publicId={props.picture} />
                </Typography>
                <Typography variant="body2" component="p">
                    {props.activity}
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.date}
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>

        </Card>
    );
}
