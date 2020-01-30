import React from "react";
import { AppBar, Toolbar, Typography, Container} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


export default function Footer() {

  const useStyles = makeStyles(theme => ({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    footer: {
      width: '1150px',
      display: 'flex',
      justifyContent: 'space-between !important',
      color: '#ccc'
    }
  }))
  const classes = useStyles();

 
    return (
      <div>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Container maxWidth="mb">
            <Toolbar>
              <Typography variant="body2" color="inherit">
                <div className={classes.footer}>
                <p>Вашего Детского Сада нет в нашей базе? <br />
                Напишите нам! <br />
                +996500000000 </p>
                <p>Рекламодателям <br />
                +996700000000</p>
                <p> TEAM 2 <br />
                  &copy;2020</p>
                </div>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    )
}