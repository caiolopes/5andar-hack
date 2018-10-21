/* eslint-disable jsx-a11y/anchor-is-valid */

import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Header from '../components/Header';
import MyMapComponent from '../components/MyMapComponent';
import Grid from '@material-ui/core/Grid';
import { Line } from 'rc-progress';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

function getPosNegStr(posNegBool) {
  if (posNegBool) return 'negative'

  return 'positive';
}

const styles = theme => ({
  root: {
    textAlign: 'center',
    flexGrow: 1,
  },
  card: {
    marginTop:16,
    // width: '70%',
  },
});

class About extends React.Component {
  state = {
    isMarkerShown: false,
    positiveComments: true,
    percents: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    status: null,
    comments: null,
    visibleComments: [],
  }

  delayedShowMarker() {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  componentDidMount() {
    this.delayedShowMarker();

    (async () => {
      const [status, comments] = await Promise.all([
        axios.get(`http://10.229.3.72:8080/avaliacao/${this.props.query.nome}`),
        axios.get(`http://10.229.3.72:8080/avaliacao/allComments`)
      ]);

      const percentsVal = Object.keys(status.data).filter(key => {
        if (key != 'bairro' && key != 'name') {
          return true;
        }
      }).map(key => status.data[key]);

      const visibleComments = comments.data.filter(c => c.positive_negative === 'positive');

      this.setState({status: percentsVal, comments: comments.data, visibleComments}, () => this.increase());
    })();
  }

  increase = () => {
    let clear = true;
    let newPercents = [];
    for (let i = 0; i < this.state.status.length; i++) {
      let percent = this.state.percents[i];
      if (percent <= this.state.status[i]) {
        percent = this.state.percents[i] + 1;
        clear = false;
      }
      newPercents.push(percent);
    }

    this.setState({ percents: newPercents });

    if (clear) {
      clearTimeout(this.tm);
    } else {
      this.tm = setTimeout(this.increase, 10);
    }
  }

  changeReviews = (e) => {
    this.setState((state, props) => {
      return {
        positiveComments: !state.positiveComments,
        visibleComments: state.comments.filter(c => c.positive_negative === getPosNegStr(state.positiveComments))
      };
    });
  }

  static getInitialProps({query}) {
    return {query}
  }

  render() {
    const { classes, query } = this.props;

    return (
      <div>
        <Header search={true} searchValue={query.nome} />
        <Grid container justify="center" className={classes.root} spacing={16} style={{padding: '0px 16px'}}>
          {query.nome &&
            <div>
            <Grid item xs={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Busca
              <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
              />
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
          <Grid container>
            <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Status
            </Typography>
            </Grid>
              <Grid item xs={6}><Typography>Vida noturna</Typography></Grid>
              <Grid item xs={6}><Line strokeWidth="5" percent={this.state.percents[0]} /></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Typography>Segurança</Typography></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Line strokeWidth="5" percent={this.state.percents[1]} /></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Typography>Ruídos diurno</Typography></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Line strokeWidth="5" percent={this.state.percents[2]} /></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Typography>Ruídos noite</Typography></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Line strokeWidth="5" percent={this.state.percents[3]} /></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Typography>Crianças pelo bairro</Typography></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Line strokeWidth="5" percent={this.state.percents[4]} /></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Typography>Jovens pelo bairro</Typography></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Line strokeWidth="5" percent={this.state.percents[5]} /></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Typography>Idosos pelo bairro</Typography></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Line strokeWidth="5" percent={this.state.percents[6]} /></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Typography>Fluxo veículos</Typography></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Line strokeWidth="5" percent={this.state.percents[7]} /></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Typography>Comércio</Typography></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Line strokeWidth="5" percent={this.state.percents[8]} /></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Typography>Residência</Typography></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Line strokeWidth="5" percent={this.state.percents[9]} /></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Typography>Lazer</Typography></Grid>
              <Grid style={{marginTop:12}} item xs={6}><Line strokeWidth="5" percent={this.state.percents[10]} /></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h6" gutterBottom>
              Comentários
            </Typography>
              <div style={{display: 'flex',justifyContent: 'space-around'}}>
                <Button
                  onClick={this.changeReviews}
                  fullWidth
                  variant={this.state.positiveComments ? 'contained' : 'outlined'} color="primary" className={classes.button}>
                  Positivos
                </Button>
                &nbsp;&nbsp;
                <Button
                  onClick={this.changeReviews}
                  fullWidth
                  variant={this.state.positiveComments ? 'outlined' : 'contained'} color="secondary" className={classes.button}>
                  Negativos
                </Button>
              </div>
              <br />
              <div style={{overflowY: 'scroll', height: '60vh'}}>
              {this.state.visibleComments.map(comment => (
                <Card className={classes.card}>
                  <CardContent>
                  <Typography gutterBottom variant="subtitle2" style={{textAlign:'left'}}>{comment.comments_name}</Typography>
                  <Typography component="p" style={{textAlign:'left'}}>
                    {comment.content}
                  </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography color="primary">{comment.comments_autor}</Typography>
                    <Typography color="primary" style={{marginLeft: 'auto'}}>{comment.comments_date}</Typography>
                  </CardActions>
                </Card>
              ))}
            </div>
          </Grid>
          </div>
          }
          {!query.nome &&
              <Typography style={{marginTop: 32}} variant="h6" gutterBottom>Bairro inválido ou não encontrado</Typography>
          }
        </Grid>
      </div>
    );
  }
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
