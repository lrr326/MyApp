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

export default class Login extends Component{
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
        let code = 10
        this.timer = setInterval(
            () => {     //  {}  这里面写要执行的内容
            console.log(988888)
                code --
                this.setState({
                   code:code 
                })
                if(code==0){
                    clearInterval(this.timer)
                    this.setState({
                        code:'获取验证码'
                    })
                }
            },
            1000
        )
    }
    

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex:1,backgroundColor: '#fcfcfc'}}>
                <ScrollView>
                    <View style={{alignItems:'center'}}>
                    <Image style={{width:px2dp(87),height:px2dp(20),marginTop:px2dp(144)}} source={require('./images/logo.png')}/>
                    </View>
                    <View style={styles.login_wrap}>
                        <View style={{height:px2dp(145)}}>
                            <View style={[styles.flex_space_between,styles.mb_25]}>
                                <TextInput onChangeText={(text)=>{this.setState({user:text})}} placeholder={'输入手机号'} style={styles.input_style}/>
                                <Image
                                        source={require('./images/login_icon.png')}
                                        style={{
                                            width:px2dp(13),
                                            height:px2dp(17),
                                            position:'absolute',
                                            top:15,
                                            left:12
                                        }}
                                    />
                            </View>
                            <View style={styles.flex_space_between}>
                                <TextInput onChangeText={(text)=>{this.setState({pwd:text})}}
                                    placeholder={'请输入验证码'}
                                    style={styles.input_style}
                                    secureTextEntry={this.state.pwdShow}
                                />
                                <Image
                                    source={require('./images/login_icon2.png')}
                                    style={{
                                        width:px2dp(13),
                                        height:px2dp(16),
                                        position:'absolute',
                                        top:15,
                                        left:12
                                    }}
                                />
                                <TouchableWithoutFeedback onPress={()=>{this.getCode()}}>
                                    <View style={{
                                        position:'absolute',
                                        right:0,
                                        borderLeftColor:'#989898',
                                        borderLeftWidth:px2dp(1),
                                        paddingHorizontal:px2dp(14)
                                    }}>
                                        <Text style={{
                                            color:'#FF1A1A',
                                            fontSize:px2dp(14)
                                        }}>{this.state.code}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            {
                                this.state.warning &&<View>
                                    <Text style={{color:'#FC162C',fontSize:px2dp(14),paddingLeft:px2dp(20),marginTop:px2dp(11.5)}}>账号或密码错误，请重新输入</Text>
                                </View>
                            }
                        </View>
                        <TouchableWithoutFeedback onPress={()=>navigate('Index')}>
                            <View style={{justifyContent: 'center',alignItems: 'center',marginTop: px2dp(62)}}>
                                <View style={styles.login_btn}>
                                    <Text style={{fontSize:px2dp(16),color:'#fff',textAlign:'center',lineHeight:px2dp(44)}}>登录</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>navigate('Register')}>
                            <View style={{justifyContent: 'center',alignItems: 'center',marginTop: px2dp(33)}}>
                                <View style={styles.register_btn}>
                                    <Text style={{fontSize:px2dp(16),color:'#fff',textAlign:'center',lineHeight:px2dp(44)}}>注册</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
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
