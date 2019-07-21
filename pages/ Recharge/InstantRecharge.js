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
    Image,
    ImageBackground
} from 'react-native';
var {width,height} = Dimensions.get('window');
import px2dp from '../tools/px2dp';
// import {dataReset,feach_request,getStorage,Toast} from './tools/Public';
// import NoDoublePress from "./tools/NoDoublePress";
import Header from '../Header'

export default class InstantRecharge extends Component{
    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentWillMount(){
        
    }

    

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex:1,backgroundColor: '#FFFFFF'}}>
                <Header 
                 title={'即时充值'}
                 navigate={this.props.navigation} 
                />
                <View style={{paddingHorizontal:px2dp(15)}}>
                    <ImageBackground
                        source={require('../images/kabeijing1.png')}
                        style={{
                            width:px2dp(345),
                            height:px2dp(130)
                        }}
                    >
                        <View style={{marginLeft:px2dp(30),paddingTop:px2dp(11),flexDirection:'row'}}>
                            <Image
                                source={require('../images/zhongshihua_bai.png')}
                                style={{
                                    width:px2dp(18),
                                    height:px2dp(18),
                                    marginRight:px2dp(6)
                                }}
                            />
                            <Text style={{color:'#FFFFFF'}}>中国石化</Text>
                        </View>
                        <Text style={{color:'#FFFFFF',fontSize:px2dp(23),textAlign:'center',marginTop:px2dp(20)}}>6777 8889 8889 999</Text>
                    </ImageBackground>
                    <View>
                        <Text style={{color:'#000000',fontSize:px2dp(19),marginTop:px2dp(33),marginBottom:px2dp(15)}}>选择优惠套餐</Text>
                    </View>
                    <View style={[styles.flex_space_between,styles.flex_wrap]}>
                        <View style={styles.discount_box}> 
                            <Text style={styles.discount_text}>9.6折</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#333333'}}>
                                    3个月
                                </Text>
                                <Text style={{color:'#D9D9D9',marginLeft:px2dp(10),fontSize:px2dp(14)}}>已售70000</Text>
                            </View>
                        </View>
                        <View style={styles.discount_box}> 
                            <Text style={styles.discount_text}>9.6折</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#333333'}}>
                                    3个月
                                </Text>
                                <Text style={{color:'#D9D9D9',marginLeft:px2dp(10),fontSize:px2dp(14)}}>已售70000</Text>
                            </View>
                        </View>
                        <View style={styles.discount_box}> 
                            <Text style={styles.discount_text}>9.6折</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#333333'}}>
                                    3个月
                                </Text>
                                <Text style={{color:'#D9D9D9',marginLeft:px2dp(10),fontSize:px2dp(14)}}>已售70000</Text>
                            </View>
                        </View>
                        <View style={styles.discount_box}> 
                            <Text style={styles.discount_text}>9.6折</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#333333'}}>
                                    3个月
                                </Text>
                                <Text style={{color:'#D9D9D9',marginLeft:px2dp(10),fontSize:px2dp(14)}}>已售70000</Text>
                            </View>
                        </View>
                        <View style={styles.discount_box}> 
                            <Text style={styles.discount_text}>9.6折</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#333333'}}>
                                    3个月
                                </Text>
                                <Text style={{color:'#D9D9D9',marginLeft:px2dp(10),fontSize:px2dp(14)}}>已售70000</Text>
                            </View>
                        </View>
                        <View style={styles.discount_box}> 
                            <Text style={styles.discount_text}>9.6折</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#333333'}}>
                                    3个月
                                </Text>
                                <Text style={{color:'#D9D9D9',marginLeft:px2dp(10),fontSize:px2dp(14)}}>已售70000</Text>
                            </View>
                        </View>
                    </View>
                </View>
            
            </View>

        )
    }
}
const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    flex_wrap:{
        flexWrap: 'wrap'
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
    discount_box:{
        width:px2dp(165),
        height:px2dp(74),
        borderColor:'#D9D9D9',
        borderWidth:px2dp(1),
        borderRadius:px2dp(4),
        padding:px2dp(12),
        marginBottom:px2dp(15)
    },
    discount_text:{
        fontSize:px2dp(18),
        color:'#000000',
        fontWeight:'700',
        marginBottom:px2dp(7)
    }

});
