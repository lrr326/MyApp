import React, { Component } from 'react';
import { 
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
    ImageBackground,
    TouchableWithoutFeedback
} from 'react-native';

var { width, height } = Dimensions.get('window');
import px2dp from './tools/px2dp';


export default class User extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
            userName: '刘先生',
            userTel: '1383838338', 
            cardList: [
                {
                    name: '中国石化1',
                    cardNumber: '1234567890123456'
                },
                {
                    name: '中国石化2',
                    cardNumber: '1234567890123456'
                },
                {
                    name: '中国石化3',
                    cardNumber: '1234567890123456'
                }
            ],
            menuData: [
                {
                    title: '我的油卡',
                    imgSrc: require('./images/wode1.png')
                },
                {
                    title: '优惠券',
                    imgSrc: require('./images/wode2.png')
                },
                {
                    title: '充值订单',
                    imgSrc: require('./images/wode3.png')
                },
                {
                    title: '商城订单',
                    imgSrc: require('./images/wode4.png')
                }
            ]
        }
}

    componentWillMount(){
    
    }

    renderCardItemList = (obj) => {
        const { item } = obj;
        const tmpCard = item.cardNumber.match(/\d{4}/g).join(' ');
        return (
            <ImageBackground style={styles.cardListWrap} source={require('./images/kabeijing1.png')}>
                <View style={styles.logoWrap}>
                    <Image style={styles.cardLogo} source={require('./images/zhongshihua.png')}/>
                </View>
                <Text style={styles.cardNumber}>{tmpCard}</Text>
            </ImageBackground>
        )
    }

    render() {
        const { userName, userTel, cardList, menuData } = this.state;
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <ScrollView>
                <TouchableWithoutFeedback>
                    <View style={styles.settingWrap}>
                        <Image style={{ width: px2dp(21), height: px2dp(23) }} source={require('./images/shezhi.png')} />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.userInfoWrap}>
                    <View style={styles.userInfoLeft}>
                        <TouchableWithoutFeedback>
                            <View>
                                <Image style={styles.userHeadPic} source={require('./images/tx.png')}/>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style={styles.userInfo}>
                                <Text style={styles.userName}>{userName}</Text>
                                <Text style={styles.userTel}>{userTel}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <TouchableWithoutFeedback>
                        <View style={styles.checkInWrap}>
                            <Image style={{width: px2dp(28), height: px2dp(28), marginLeft: px2dp(8), marginRight: px2dp(8)}} source={require('./images/qiandao1.png')}/>
                            <View>
                                <Text style={styles.text1}>签到领积分</Text>
                                <Text style={styles.text2}>好礼送不停</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.cardInfoWrap}>
                    <FlatList
                        data={cardList}
                        renderItem={this.renderCardItemList}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={styles.myMenuWrap}>
                    {
                        menuData.map((menu, index) => {
                            const { imgSrc, title } = menu;
                            return (
                                <TouchableWithoutFeedback key={index}>
                                    <View style={styles.menu}>
                                        <Image style={styles.menuLogo} source={imgSrc}/>
                                        <Text>{title}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    menuLogo: {
        width: px2dp(24),
        height: px2dp(24),
        marginBottom: px2dp(10),
        marginTop: px2dp(24)
    },
    myMenuWrap: {
        width: px2dp(345),
        height: px2dp(91),
        marginTop: px2dp(22),
        marginLeft: px2dp(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    settingWrap: {
        marginTop: px2dp(58),
        marginLeft: px2dp(338),
        marginRight: px2dp(16),
        marginBottom: px2dp(14)
    },
    userInfoWrap: {
        marginLeft: px2dp(15),
        height: px2dp(67),
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: px2dp(23)
    },
    userInfoLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    userInfo: {
        marginLeft: px2dp(12),
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    userName: {
        lineHeight: px2dp(35),
        fontSize: px2dp(18)
    },
    userTel: {
        lineHeight: px2dp(35),
        fontSize: px2dp(15)
    },
    userHeadPic: {
        width: px2dp(67),
        height: px2dp(67)
    },
    checkInWrap: {
        width: px2dp(129),
        height: px2dp(42),
        backgroundColor: '#FFEBE7',
        borderTopLeftRadius: px2dp(21),
        borderBottomLeftRadius: px2dp(21),
        flexDirection: 'row',
        alignItems: 'center'
    },
    text1: {
        lineHeight: px2dp(20),
        fontSize: px2dp(14),
        fontWeight: '500'
    },
    text2: {
        lineHeight: px2dp(15),
        fontSize: px2dp(11),
        color: '#FD741C',
        fontWeight: '500'
    },
    cardInfoWrap: {
        // width: px2dp(323),
        // height: px2dp(130),
    },
    cardListWrap: {
        width: px2dp(323),
        height: px2dp(130),
        borderRadius: px2dp(10),
        flexDirection: 'column',
        alignItems: 'center'
    },
    logoWrap: {
        width: px2dp(323),
        marginBottom: px2dp(10)
    },
    cardLogo: {
        marginTop: px2dp(20),
        marginLeft: px2dp(30),
        width: px2dp(83),
        height: px2dp(21)
    },
    cardNumber: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: px2dp(23),
        // lineHeight: px2dp(18),
    }
})