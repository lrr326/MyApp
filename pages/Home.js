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
import px2dp from './tools/px2dp';
// import {dataReset,feach_request,getStorage,Toast} from './tools/Public';
// import NoDoublePress from "./tools/NoDoublePress";
// import Header from './Header'

export default class Home extends Component{
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
            <View style={{flex:1,backgroundColor: '#FFFFFF'}}>
                <ScrollView>
                    <View>
                        <Image 
                            source={
                                require('./images/banner.png')
                            }
                            style={{
                                width:'100%',
                                height:px2dp(209)
                            }}
                        />
                        <View style={{paddingHorizontal:px2dp(15)}}>
                            <View style={[styles.flex_space_between,{paddingHorizontal:px2dp(3),marginTop:px2dp(33)}]}>
                                <TouchableWithoutFeedback onPress={()=>navigate('InstantRecharge')}>
                                    <View style={{alignItems:'center'}}>
                                        <Image 
                                            source={
                                                require('./images/sy1.png')
                                            }
                                            style={{
                                                width:px2dp(46),
                                                height:px2dp(46)
                                            }}
                                        />
                                        <Text style={styles.banner_text}>油卡直冲</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <View style={{alignItems:'center'}}>
                                    <Image 
                                        source={
                                            require('./images/sy2.png')
                                        }
                                        style={{
                                            width:px2dp(46),
                                            height:px2dp(46)
                                        }}
                                    />
                                    <Text style={styles.banner_text}>充话费</Text>
                                </View>
                                <View style={{alignItems:'center'}}> 
                                    <Image 
                                        source={
                                            require('./images/sy3.png')
                                        }
                                        style={{
                                            width:px2dp(46),
                                            height:px2dp(46)
                                        }}
                                    />
                                    <Text style={styles.banner_text}>领油卡</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <Image 
                                        source={
                                            require('./images/sy4.png')
                                        }
                                        style={{
                                            width:px2dp(46),
                                            height:px2dp(46)
                                        }}
                                    />
                                    <Text style={styles.banner_text}>小万商城</Text>
                                </View>
                                <View style={{alignItems:'center'}}> 
                                    <Image 
                                        source={
                                            require('./images/sy5.png')
                                        }
                                        style={{
                                            width:px2dp(46),
                                            height:px2dp(46)
                                        }}
                                    />
                                    <Text style={styles.banner_text}>拼团</Text>
                                </View>
                            </View>
                            <View style={[styles.flex_space_between,]}>
                                <ImageBackground
                                    source={require('./images/cz_box1.png')}
                                    style={{
                                        width:px2dp(168),
                                        height:px2dp(196),
                                        paddingHorizontal:px2dp(14),
                                        paddingTop:px2dp(19),
                                        marginTop:px2dp(19),
                                        borderRadius:px2dp(6)
                                    }}
                                >
                                    <Text style={{color:'#FFFFFF',fontSize:px2dp(17)}}>油卡充值套餐</Text>
                                    <Text style={{color:'#FFFFFF',fontSize:px2dp(12),marginTop:px2dp(6)}}>按月充值、优惠折扣</Text>
                                </ImageBackground>
                                <View style={[styles.flex_space_between,styles.flex_wrap,{width:px2dp(170),marginTop:px2dp(10)}]}>
                                    <ImageBackground
                                       source={require('./images/cz_box2.png')}
                                       style={{
                                           width:px2dp(79),
                                           height:px2dp(93),
                                           marginBottom:px2dp(10)
                                       }}
                                    >
                                        <View style={styles.top_month}>
                                            <Text style={styles.top_month_text}>12个月</Text>
                                        </View>
                                        <Text style={{color:'#FD741C',fontSize:px2dp(8),position:'absolute',top:4,right:0}}>推荐</Text>
                                        <View>
                                            <Text style={styles.month_money}>¥500/月</Text>
                                            <Text style={styles.discount_monty}>折后价:1233</Text>
                                        </View>
                                        <Text style={styles.discount_bottom_text}>6.8折</Text>
                                    </ImageBackground>
                                    <ImageBackground
                                       source={require('./images/cz_box2.png')}
                                       style={{
                                           width:px2dp(79),
                                           height:px2dp(93),
                                           marginBottom:px2dp(10)
                                       }}
                                    >
                                        <View style={styles.top_month}>
                                            <Text style={styles.top_month_text}>12个月</Text>
                                        </View>
                                        <Text style={{color:'#FD741C',fontSize:px2dp(8),position:'absolute',top:4,right:0}}>推荐</Text>
                                        <View>
                                            <Text style={styles.month_money}>¥500/月</Text>
                                            <Text style={styles.discount_monty}>折后价:1233</Text>
                                        </View>
                                        <Text style={styles.discount_bottom_text}>6.8折</Text>
                                    </ImageBackground> 
                                    <ImageBackground
                                       source={require('./images/cz_box2.png')}
                                       style={{
                                           width:px2dp(79),
                                           height:px2dp(93),
                                       }}
                                    >
                                        <View style={styles.top_month}>
                                            <Text style={styles.top_month_text}>12个月</Text>
                                        </View>
                                        <Text style={{color:'#FD741C',fontSize:px2dp(8),position:'absolute',top:4,right:0}}>推荐</Text>
                                        <View>
                                            <Text style={styles.month_money}>¥500/月</Text>
                                            <Text style={styles.discount_monty}>折后价:1233</Text>
                                        </View>
                                        <Text style={styles.discount_bottom_text}>6.8折</Text>
                                    </ImageBackground>       
                                    <ImageBackground
                                       source={require('./images/cz_box2.png')}
                                       style={{
                                           width:px2dp(79),
                                           height:px2dp(93),
                                       }}
                                    >
                                        <View style={styles.top_month}>
                                            <Text style={styles.top_month_text}>12个月</Text>
                                        </View>
                                        <Text style={{color:'#FD741C',fontSize:px2dp(8),position:'absolute',top:4,right:0}}>推荐</Text>
                                        <View>
                                            <Text style={styles.month_money}>¥500/月</Text>
                                            <Text style={styles.discount_monty}>折后价:1233</Text>
                                        </View>
                                        <Text style={styles.discount_bottom_text}>6.8折</Text>
                                    </ImageBackground>    
                                </View>
                            </View>
                            <View style={styles.title}>
                                <Text>精品专区</Text>
                            </View>
                            <View style={[styles.flex_space_between,styles.flex_wrap]}>
                                <View style={styles.boutique_box}>
                                    <View style={styles.top_blue_box}>
                                       <Text style={styles.top_blue_text}>限量</Text>
                                    </View> 
                                    <View style={{flexDirection:'row'}}>
                                        <View>
                                            <Text style={styles.boutique_title}>时尚取暖壶</Text>
                                            <Text style={styles.boutique_text}>快速炙热</Text>
                                        </View>
                                        <Image 
                                        source={
                                            require('./images/sy5.png')
                                        }
                                        style={{
                                            width:px2dp(52),
                                            height:px2dp(66),
                                            marginLeft:px2dp(14)
                                        }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.boutique_box}>
                                    <View style={styles.top_orange_box}>
                                       <Text style={styles.top_blue_text}>特价</Text>
                                    </View> 
                                    <View style={{flexDirection:'row'}}>
                                        <View>
                                            <Text style={styles.boutique_title}>时尚取暖壶</Text>
                                            <Text style={styles.boutique_text}>快速炙热</Text>
                                        </View>
                                        <Image 
                                        source={
                                            require('./images/sy5.png')
                                        }
                                        style={{
                                            width:px2dp(52),
                                            height:px2dp(66),
                                            marginLeft:px2dp(14)
                                        }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.boutique_box}>
                                    <View style={styles.top_red_tex}>
                                       <Text style={styles.top_blue_text}>狠优惠</Text>
                                    </View> 
                                    <View style={{flexDirection:'row'}}>
                                        <View>
                                            <Text style={styles.boutique_title}>时尚取暖壶</Text>
                                            <Text style={styles.boutique_text}>快速炙热</Text>
                                        </View>
                                        <Image 
                                        source={
                                            require('./images/sy5.png')
                                        }
                                        style={{
                                            width:px2dp(52),
                                            height:px2dp(66),
                                            marginLeft:px2dp(14)
                                        }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.boutique_box}>
                                    <View style={styles.top_purple_tex}>
                                       <Text style={styles.top_blue_text}>有格调</Text>
                                    </View> 
                                    <View style={{flexDirection:'row'}}>
                                        <View>
                                            <Text style={styles.boutique_title}>时尚取暖壶</Text>
                                            <Text style={styles.boutique_text}>快速炙热</Text>
                                        </View>
                                        <Image 
                                        source={
                                            require('./images/sy5.png')
                                        }
                                        style={{
                                            width:px2dp(52),
                                            height:px2dp(66),
                                            marginLeft:px2dp(14)
                                        }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.title}>
                                <Text>超划算</Text>
                            </View>
                            <View style={[styles.flex_space_between,styles.flex_wrap]}>
                                <View>
                                    <Image 
                                        source={
                                            require('./images/feishan.png')
                                        }
                                        style={{
                                            width:px2dp(72),
                                            height:px2dp(72),
                                        }}
                                    />
                                    <Text style={{color:'#666666',fontSize:px2dp(12),textAlign:'center',marginBottom:px2dp(16)}}>
                                        电扇
                                    </Text>
                                </View>
                                <View>
                                    <Image 
                                        source={
                                            require('./images/taideng.png')
                                        }
                                        style={{
                                            width:px2dp(72),
                                            height:px2dp(72),
                                        }}
                                    />
                                    <Text style={{color:'#666666',fontSize:px2dp(12),textAlign:'center',marginBottom:px2dp(16)}}>
                                        电扇
                                    </Text>
                                </View>
                                <View>
                                    <Image 
                                        source={
                                            require('./images/feishan.png')
                                        }
                                        style={{
                                            width:px2dp(72),
                                            height:px2dp(72),
                                        }}
                                    />
                                    <Text style={{color:'#666666',fontSize:px2dp(12),textAlign:'center',marginBottom:px2dp(16)}}>
                                        电扇
                                    </Text>
                                </View>
                                <View>
                                    <Image 
                                        source={
                                            require('./images/feishan.png')
                                        }
                                        style={{
                                            width:px2dp(72),
                                            height:px2dp(72),
                                        }}
                                    />
                                    <Text style={{color:'#666666',fontSize:px2dp(12),textAlign:'center',marginBottom:px2dp(16)}}>
                                        电扇
                                    </Text>
                                </View>
                                <View>
                                    <Image 
                                        source={
                                            require('./images/feishan.png')
                                        }
                                        style={{
                                            width:px2dp(72),
                                            height:px2dp(72),
                                        }}
                                    />
                                    <Text style={{color:'#666666',fontSize:px2dp(12),textAlign:'center',marginBottom:px2dp(16)}}>
                                        电扇
                                    </Text>
                                </View>
                                <View>
                                    <Image 
                                        source={
                                            require('./images/feishan.png')
                                        }
                                        style={{
                                            width:px2dp(72),
                                            height:px2dp(72),
                                        }}
                                    />
                                    <Text style={{color:'#666666',fontSize:px2dp(12),textAlign:'center',marginBottom:px2dp(16)}}>
                                        电扇
                                    </Text>
                                </View>
                                <View>
                                    <Image 
                                        source={
                                            require('./images/feishan.png')
                                        }
                                        style={{
                                            width:px2dp(72),
                                            height:px2dp(72),
                                        }}
                                    />
                                    <Text style={{color:'#666666',fontSize:px2dp(12),textAlign:'center',marginBottom:px2dp(16)}}>
                                        电扇
                                    </Text>
                                </View>
                                <View>
                                    <Image 
                                        source={
                                            require('./images/feishan.png')
                                        }
                                        style={{
                                            width:px2dp(72),
                                            height:px2dp(72),
                                        }}
                                    />
                                    <Text style={{color:'#666666',fontSize:px2dp(12),textAlign:'center',marginBottom:px2dp(16)}}>
                                        电扇
                                    </Text>
                                </View>
                            </View>
                            {/* 商品 */}
                            <View>
                                <View style={{marginBottom:px2dp(30)}}> 
                                    <Image 
                                        source={
                                            require('./images/goodImg.png')
                                        }
                                        style={{
                                            width:px2dp(345),
                                            height:px2dp(185),
                                            borderRadius:px2dp(6)
                                        }}
                                    />
                                    <Text style={styles.goods_title}>艾美特空调</Text>
                                    <View style={styles.flex_space_between}>
                                        <Text style={{color:'#FF7141',fontSize:px2dp(16)}}>
                                            ¥281.00
                                            <Text style={{color:'#999999',fontSize:px2dp(11)}}>  ¥281.00</Text>
                                        </Text>
                                        <Text style={{color:'#666666',fontSize:px2dp(12)}}>已售999</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
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
    flex_wrap:{
        flexWrap: 'wrap'
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
    },
    banner_text:{
        color:'#333333',
        textAlign:'center',
        fontSize:px2dp(14),
        marginTop:px2dp(4)
    },
    top_month:{
        width:px2dp(34),
        height:px2dp(13),
        backgroundColor:'#FB643F',
        borderRadius:px2dp(9),
        borderTopLeftRadius:px2dp(6),
        borderBottomLeftRadius:px2dp(0)
    },
    top_month_text:{
        color:'#FFFFFF',
        fontSize:px2dp(9),
        textAlign:'center',
        lineHeight:px2dp(13)
    },
    month_money:{
        color:'#845741',
        fontSize:px2dp(13),
        marginTop:px2dp(13),
        textAlign:'center'
    },
    discount_monty:{
        color:'#BC6941',
        fontSize:px2dp(10),
        textAlign:'center',
        marginTop:px2dp(2)
    },
    discount_bottom_text:{
        color:'#FB5F48',
        fontSize:px2dp(10),
        textAlign:'center',
        marginTop:px2dp(19)
    },
    title:{
        color:'#000000',
        fontSize:px2dp(18),
        marginVertical:px2dp(13),
        fontWeight:'bold',
        borderLeftColor:'#FD741C',
        borderLeftWidth:px2dp(4),
        paddingLeft:px2dp(6)
    },
    boutique_box:{
        width:px2dp(168),
        height:px2dp(100),
        backgroundColor:'#EEEEEE',
        borderRadius:px2dp(6),
        marginBottom:px2dp(10)
    },
    top_blue_box:{
        width:px2dp(50),
        height:px2dp(18),
        backgroundColor:'#58BDFF',
        borderTopLeftRadius:px2dp(6),
        borderBottomRightRadius:px2dp(6)
    },
    top_orange_box:{
        width:px2dp(50),
        height:px2dp(18),
        backgroundColor:'#FE8834',
        borderTopLeftRadius:px2dp(6),
        borderBottomRightRadius:px2dp(6)
    },
    top_red_tex:{
        width:px2dp(50),
        height:px2dp(18),
        backgroundColor:'#FC3F4D',
        borderTopLeftRadius:px2dp(6),
        borderBottomRightRadius:px2dp(6)
    },
    top_purple_tex:{
        width:px2dp(50),
        height:px2dp(18),
        backgroundColor:'#8B7DF7',
        borderTopLeftRadius:px2dp(6),
        borderBottomRightRadius:px2dp(6)
    },
    top_blue_text:{
        color:'#FFFFFF',
        fontSize:px2dp(12),
        textAlign:'center',
        lineHeight:px2dp(18)
    },
    boutique_title:{
        color:"#191919",
        fontSize:px2dp(16),
        marginLeft:px2dp(9),
        marginTop:px2dp(13)
    },
    boutique_text:{
        color:'#666666',
        fontSize:px2dp(13),
        marginLeft:px2dp(9),
        marginTop:px2dp(6)
    },
    goods_title:{
        color:'#191919',
        fontSize:px2dp(5),
        marginVertical:px2dp(10)
    }
});
