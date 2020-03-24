import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Divider } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import withStyles from "@material-ui/core/styles/withStyles";
import '../index.css'
import LoadingOverlay from 'react-loading-overlay';
import PacmanLoader from "react-spinners/PacmanLoader";

import Chart from '../components/Chart'
import Search from './Search'
import DataSelect from './DataSelect'
import {getPlaylist} from '../actions'
import GraphSelect from './GraphSelect';
import { PlaylistCard } from './PlaylistCard';
import FeaturedPlaylists from './FeaturedPlaylists';

const theme = createMuiTheme({
  palette: {
      primary: {
        main: "#2BDE6A",
        contrastText: '#1b1b1b'
      },
      secondary: {
        main: '#f1f1f1',
        contrastText: '#2BDE6A'
      }
  },
})

export class Layout extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      selectedData: 'energy',
      showArea: true,
      showBars: false,
      showNatural: false,
      showBasis: false,
    }
    this.handleDataSelect = this.handleDataSelect.bind(this)
    this.handleGraphChange = this.handleGraphChange.bind(this)
    this.getSongs = this.getSongs.bind(this)
  }

  componentDidMount() {
    this.getSongs('spotify:playlist:37i9dQZF1DXdxcBWuJkbcy')
  }

  getSongs(playlist_ID) {
    this.setState({loading: true})
    this.props.getPlaylist(playlist_ID)
    setTimeout(() => {
      this.setState({loading: false})
    }, 4000);
  }

  handleDataSelect(data) {
    this.setState({selectedData: data})
  }

  handleGraphChange(action, event) {
    if (action === 'showBars') {
      this.setState({showBars: event.target.checked})
    } else if (action === 'showArea') {
      this.setState({showArea: event.target.checked})
    } else if (action === 'showMonotone') {
      this.setState({showMonotone: event.target.checked})
    } else if (action === 'showBasis') {
      this.setState({showBasis: event.target.checked})
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <LoadingOverlay active={this.state.loading} style={{wrapper: {height: '100vh'}}} spinner={<PacmanLoader color='#2BDE6A' />}>
          <Grid container spacing={1}>
            <Grid item container xs={12} sm={6} direction='column' spacing={1}>   {/*chart + selects*/}
              <Grid item container justify='space-between' spacing={1}>     {/*selects*/}
                <Grid item xs={6}> 
                  <DataSelect 
                    selectedData={this.state.selectedData} 
                    handleDataSelect={this.handleDataSelect}
                  />
                </Grid>
                <Grid item xs={6}>
                  <GraphSelect 
                    handleGraphChange={this.handleGraphChange}
                    showBars={this.state.showBars}
                    showArea={this.state.showArea}
                    showMonotone={this.state.showMonotone}
                    showBasis={this.state.showBasis}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Chart 
                  songs={this.props.songs} 
                  selectedData={this.state.selectedData}
                  showBars={this.state.showBars}
                  showArea={this.state.showArea}
                  showMonotone={this.state.showMonotone}
                  showBasis={this.state.showBasis}
                />
              </Grid>
              </Grid>
            <Grid item xs={12} sm={6} container direction='column' spacing={1}>
              <Grid item>
                <PlaylistCard playlist={this.props.playlist} />
              </Grid>
              <Divider style={{margin: '2vh'}}/>
              <Grid item container direction='column' spacing={1} style={{backgroundColor: '#666', borderRadius:'1vh'}}>
                <Grid item>
                  <Search getSongs={this.getSongs}/>
                </Grid>
                <Grid item>
                  <FeaturedPlaylists getSongs={this.getSongs}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </LoadingOverlay>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.getPlaylist.songs,
    playlist: state.getPlaylist.playlist
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPlaylist: playlist_ID => dispatch(getPlaylist(playlist_ID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles()(Layout))
