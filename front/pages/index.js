/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import InputBase from '@material-ui/core/InputBase';

import Header from '../components/Header';

const styles = theme => ({
  root: {
    textAlign: 'center',
    // paddingTop: theme.spacing.unit * 20,
  },
  bg: {
    display: 'block',
    backgroundImage: 'url("/static/fundo.jpg")',
    height: '91.5vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  layer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  textField: {
    flexBasis: 200,
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
    width: 420,
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const HtmlHead = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body, html {
        height: 100%;
      }
    `}</style>
  </div>
);

class Index extends React.Component {
  state = {
    bairro: '',
  }

  handleChange = (e) => {
    this.setState({ bairro: e.target.value});
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Header search={false}/>
        <div className={classes.bg}>
          {/*<div className={classes.layer} style={{marginTop:64}}></div>*/}
          <Grid container justify='center' alignItems='center'>
            <Grid item xs={12} lg={6} style={{marginTop:'25vh'}}>
              <Typography variant="display1" style={{color: '#fff'}}>O bairro ideal, avaliado por quem conhece de verdade.</Typography>
              <br />
              <FormControl className={classes.margin}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  id="bootstrap-input"
                  placeholder="Sobre qual bairro você quer saber mais?"
                  defaultValue="react-bootstrap"
                  value={this.state.bairro}
                  onChange={this.handleChange}
                  classes={{
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                  }}
                />
              </FormControl>
              &nbsp;&nbsp;&nbsp;
              <Link href={"/bairro?nome=" + this.state.bairro}>
                <Button variant="contained" color="primary">Buscar</Button>
              </Link>
              <img src="/static/logo.png" />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
