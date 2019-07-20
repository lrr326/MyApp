import React, { Component } from 'react';
import { 
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

var { width, height } = Dimensions.get('window');
import px2dp from './tools/px2dp';
import { red } from 'ansi-colors';

export default class User extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
            userName: '刘先生',
            userTel: '1383838338'
        }
}

    componentWillMount(){
    
    }

    render() {
        const { userName, userTel } = this.state;
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
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
        alignItems: 'center',
        justifyContent: 'space-between'
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
    }
})