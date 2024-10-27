import {Image, View} from "@tarojs/components";
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";
import headBg from "../../assects/backgrand_photo.jpeg";
import GlobalFooter from "../../components/GlobalFooter";
import {getBestQuestionResult} from "../../utils/bizUtils";
import questions from "../../data/questions.json";
import questionsResults from "../../data/question_results.json";

/**
 * 主页
 */
export default () => {

  const answerList = Taro.getStorageSync("answerList")

    if (!answerList || answerList.length < 1){
        Taro.showToast({
            title:"答案为空",
            icon:"error",
            duration: 3000
        })
    }
const result = getBestQuestionResult(answerList,questions,questionsResults)
  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h2 subTitle">{result.resultDesc}</View>
      <AtButton className="enterBtn" type="primary" circle onClick={() => {
          Taro.reLaunch({
              url:'/pages/index/index'
          });
      }}>
        返回主页
      </AtButton>
      <Image src={headBg} className="headerBg" />
      <GlobalFooter />
    </View>
  );
};
