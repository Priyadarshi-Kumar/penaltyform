import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: "auto",
        maxWidth: 500
    },
    image: {
        width: 70,
        height: 70
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%"
    }
});
class PenaltyDetails extends Component {
    render() {
        const {classes} = this.props
        return (
            <div>
                <Paper className={classes.root}>
                    <Grid container spacing={16}>
                        <Grid item >
                            <ButtonBase className={classes.image}>
                                <img
                                    className={classes.img}
                                    alt="complex"
                                    src="/static/images/grid/complex.jpg"
                                />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Ayushman
                  </Typography>
                                    <Typography gutterBottom>
                                        Fleet
                  </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(PenaltyDetails);
