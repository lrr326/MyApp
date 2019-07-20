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

export default class Index extends Component{
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

    getCode(){
        console.log(99999)
        const _this = this
        let code = 60
        this.timer = setTimeout(
            () => {     //  {}  这里面写要执行的内容
            console.log(988888)
                // code --
                // this.setState({
                //    code:code 
                // })
            },
            1000
        )
    }
    

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex:1,backgroundColor: '#fcfcfc'}}>
              
            </View>

        )
    }
}
const styles = StyleSheet.create({
   
});
