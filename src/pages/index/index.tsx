import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";
import headBg from "../../assects/backgrand_photo.jpeg";
import GlobalFooter from "../../components/GlobalFooter";

/**
 * 主页
 */
export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">MBTI性格测试</View>
      <View className="at-article__h2 subTitle">
        只用两分钟就能非常准确的描述出你是谁 以及你的性格特点
      </View>
      <AtButton className="enterBtn" type="primary" circle onClick={() => {
          Taro.navigateTo({
              url:'/pages/doQuestion/index'
          })
      }} >
        开始测试
      </AtButton>
      <Image src={headBg} className="headerBg" />
      <GlobalFooter />
    </View>
  );
};
