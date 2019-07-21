import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Dimensions,
    TextInput,
    ScrollView,
    AsyncStorage,
    Image
} from 'react-native';
var {width,height} = Dimensions.get('window');
import px2dp from './tools/px2dp';
import TabNavigator from 'react-native-tab-navigator'
// import {dataReset,feach_request,getStorage,Toast} from './tools/Public';
// import NoDoublePress from "./tools/NoDoublePress";
// import Header from './Header'
import Home from './Home'
import Welfare from './Welfare'
import FindPage from './FindPage'
import User from './User'
import Center from './Center'

export default class Index extends Component{
    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }

    componentWillMount(){
        
    }

    changePage(tab){
        this.setState({selectedTab:tab})
    }
    

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex:1,backgroundColor: '#FFFFFF'}}>
            <TabNavigator>
                <TabNavigator.Item
                        selected={this.state.selectedTab==='home'}
                        title="首页"
                        titleStyle={{color:'#9DA1A7',fontSize:px2dp(10)}}
                        selectedTitleStyle={{color:'#FD741C',fontSize:px2dp(10)}}
                        onPress={()=>this.changePage('home')}
                        renderIcon = {()=>  < Image style={styles.img} source={require('./images/home.png')}/>}
                        renderSelectedIcon = {()=>  < Image style={styles.img} source = {require('./images/menu1.png')} /> }
                    >
                    <Home {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                        selected={this.state.selectedTab==='welfare'}
                        title="福利"
                        titleStyle={{color:'#999'}}
                        selectedTitleStyle={{color:'#FD741C'}}
                        onPress={()=>this.changePage('welfare')}
                        renderIcon = {()=>  < Image style={styles.img} source={require('./images/menu2.png')}/>}
                        renderSelectedIcon = {()=>  < Image style={styles.img} source = {require('./images/Welfare.png')} /> }
                    >
                    <Welfare {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                        selected={this.state.selectedTab==='Center'}
                        titleStyle={{color:'#999'}}
                        selectedTitleStyle={{color:'#FD741C'}}
                        onPress={()=>{this.changePage('Center')}}
                        renderIcon = {()=>  < Image style={{width:px2dp(45),height:px2dp(33)}} source={require('./images/menu5.png')}/>}
                        renderSelectedIcon = {()=>  < Image style={{width:px2dp(45),height:px2dp(33)}}  source = {require('./images/menu5.png')} /> }
                    >
                    <Center {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                        selected={this.state.selectedTab==='FindPage'}
                        title="订单"
                        titleStyle={{color:'#999'}}
                        selectedTitleStyle={{color:'#FD741C'}}
                        onPress={()=>{this.changePage('FindPage')}}
                        renderIcon = {()=>  < Image style={styles.img} source={require('./images/find.png')}/>}
                        renderSelectedIcon = {()=>  < Image style={styles.img} source = {require('./images/findSected.png')} /> }
                    >
                    <FindPage {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                        selected={this.state.selectedTab==='User'}
                        title="我的"
                        titleStyle={{color:'#999'}}
                        selectedTitleStyle={{color:'#FD741C'}}
                        onPress={()=>{this.changePage('User')}}
                        renderIcon = {()=>  < Image style={styles.img} source={require('./images/user.png')}/>}
                        renderSelectedIcon = {()=>  < Image style={styles.img} source = {require('./images/menu4.png')} /> }
                    >
                    <User {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>
            </View>


        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    icon:{
        width:10,
        height:10
    },
    img:{
        width:px2dp(24),
        height:px2dp(24)
    }
});
