import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { setVideoList, getdata } from '../action';
import Headder from '../common/Headder';
import Reactanglecard from '../Component/reactanglecard';
import data from "../config/localdata.json"
import chatVideoData from "../config/chatvideos.json";
import { Loading } from '../common/loader';
import { colors } from '../config/assets/gloableconstant';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: []
    };

  }

  async componentDidMount() {
    // debugger
    this.props.setVideoList(chatVideoData)
    await this.props.getdata(data)

    this.setState({
      main: this.props.state.Alldata.map(el => el.data)
    })
    console.log('Component did mount ', this.props)
  }

  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <View>
        <Headder
          logo={true}
          maintitle={true}
          notifi={true}
        />
        <ScrollView>
          {
            this.state.main.length === 0 ?
              <Loading 
              isActive={true}
              color={colors.black}
              />
              :
              this.props.state.Alldata.map((item, index) =>
                <View key={index}>
                  {
                    item.type.includes('reactangle_card') && (
                      <Reactanglecard
                        data={item.data}
                        navigation={this.props.navigation}
                      />
                    )}

                </View>
              )
          }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    state,
    //  alldata: state.Alldata
  }
};

const mapDispatchToProps = dispatch => ({
  setVideoList: (data) => dispatch(setVideoList(data)),
  getdata: (data) => dispatch(getdata(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)