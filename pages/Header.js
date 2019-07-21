//顶部导航
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Dimensions,
    TouchableWithoutFeedback, Image
} from 'react-native';
var {width,height} = Dimensions.get('window');
import px2dp from './tools/px2dp';
// import Icon from 'react-native-vector-icons/FontAwesome';
export default class Header extends Component{
    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
        this.state = {
            title:''
        }
    }
    componentWillMount(){
        this.setState({
            title:this.props.title
        })
    }
    goBack(){
        if(this.props.jump){
            this.props.navigate.navigate(this.props.jump);
        }else {
            this.props.navigate.goBack();

        }
    }
    rightBtn(){
        const navigate =  this.props.navigate;
        if(this.props.right){
            return(
                <TouchableWithoutFeedback onPress={()=>{
                    this.props.onPenRightDrawer();
                }}>
                    <View style={[styles.flex,{alignItems:"flex-end"}]}>
                        {/* <Text style={{fontSize: px2dp(14),color: '#ffffff',textAlign: 'right'}}>分类查询</Text> */}
                           {/* <Image
                            source={require('./images/flcx.png')}
                            style={{ width: px2dp(19), height: px2dp(17)}}
                            />  */}
                    </View>
                </TouchableWithoutFeedback>
            )
        }else if(this.props.check){
            return(
                <TouchableWithoutFeedback onPress={()=>{
                    navigate.navigate('CheckPay')
                }}>
                    <View style={styles.flex}>
                        <Text style={{fontSize: px2dp(14),color: '#ffffff',textAlign: 'right'}}>核算</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        }else if(this.props.login){
            return(
                <TouchableWithoutFeedback onPress={()=>{
                    navigate.navigate('SetPage')
                }}>
                    <View style={[styles.flex,styles.right_style]}>
                        {/* <Image
                            source={require('./images/xiaoxi.png')}
                            style={{width:px2dp(25),height:px2dp(25)}}
                        /> */}
                    </View>
                </TouchableWithoutFeedback>
            )
        } else if(this.props.definition){
            return(
                <View style={[styles.flex,styles.right_style]}>
                    {this.props.definition}
                </View>
            )
        }else{
            return(
                <View style={styles.flex}>

                </View>
            )
        }
    }
    leftBtn(){
        const navigate =  this.props.navigate;
        if(this.props.left){
            return(
                <View style={styles.flex}>

                </View>
            )
        }else if(this.props.leftStyle){
            return(
                <View style={styles.flex}>
                    {this.props.leftStyle}
                </View>
            )
        }else{
            return(
                <TouchableWithoutFeedback onPress={()=>{this.goBack()}}>
                    <View style={[styles.flex,styles.pl_17]}>
                       <Image
                       source={require('./images/jiantou.png')}
                       style={{
                           width:px2dp(10),
                           height:px2dp(18),
                           marginTop:px2dp(10)
                       }}
                       />
                    </View>
                </TouchableWithoutFeedback>
            )
        }
    }
    render(){
        return(
            <View>
                <StatusBar backgroundColor={'#4684FD'}/>
                <View style={this.props.isWhite?styles.headerWhite:styles.headerBox}>
                    {this.leftBtn()}
                    <View style={{flex:2,flexDirection:'row',justifyContent: 'center'}}>
                        <Text style={this.props.isWhite?styles.title_White:styles.title_style}>{this.state.title}</Text>
                    </View>
                    {this.rightBtn()}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    flex:{
        flex: 1
    },
    headerBox:{
        width:width,
        height:px2dp(88),
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingRight: px2dp(17),
        borderBottomColor:'#EBEBEB',
        borderBottomWidth:px2dp(1)
    },
    headerWhite:{
        width:width,
        height:px2dp(88),
        backgroundColor:'#ffffff',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingRight: px2dp(17),
        borderBottomColor:'#EBEBEB',
        borderBottomWidth:px2dp(1)
    },
    title_style:{
        fontSize:px2dp(19),
        color:'#000000',
        fontWeight: '600',
        letterSpacing: px2dp(2),
        lineHeight:px2dp(100)
    },
    title_White:{
        fontSize:px2dp(18),
        color:'#333333',
        // fontWeight: '600',
        letterSpacing: px2dp(2)
    },
    right_style:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        paddingTop: px2dp(5)
    },
    pl_17:{
        paddingLeft: px2dp(17)
    }
});