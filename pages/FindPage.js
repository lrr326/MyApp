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
// import {dataReset,feach_request,getStorage,Toast} from './tools/Public';
// import NoDoublePress from "./tools/NoDoublePress";
// import Header from './Header'

export default class FindPage extends Component{
    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
        this.state = {
            code:'获取验证码'
        }
    }

    componentWillMount(){
        
    }

    

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex:1,backgroundColor: '#fcfcfc'}}>
                <Text>3333</Text>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    flex_space_between:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    logo:{
        width:px2dp(120),
        height:px2dp(120),
        position: 'absolute',
        left:width/2,
        top:px2dp(80),
        marginLeft: -px2dp(60)
    },
    title:{
        textAlign: 'center',
        fontSize:px2dp(18),
        color:'#64bdf9',
        marginTop: px2dp(50),
        letterSpacing: px2dp(1),
        marginBottom:px2dp(5)
    },
    login_wrap:{
        paddingTop: px2dp(35),
        paddingHorizontal:px2dp(30)
    },
    input_style:{
        flex:1,
        borderBottomWidth: px2dp(1),
        borderBottomColor:'#cccccc',
        borderRadius: px2dp(3),
        height:px2dp(50),
        paddingLeft: px2dp(36),
        backgroundColor:'#ffffff',
        fontSize:px2dp(16),
        color:'#D3D3D3'
    },
    mb_25:{
        marginBottom: px2dp(15)
    },
    login_btn:{
        width:px2dp(295),
        height:px2dp(50),
        backgroundColor:'#FD741C',
        borderRadius:px2dp(8),
    },
    right_eye:{
        position: 'absolute',
        right:px2dp(0),
        top:px2dp(0),
        width:px2dp(50),
        height:px2dp(40),
        paddingTop: px2dp(9),
        paddingLeft:px2dp(15)
    },
    register_btn:{
        width:px2dp(295),
        height:px2dp(50),
        backgroundColor:'#838AD5',
        borderRadius:px2dp(8),
    }
});
