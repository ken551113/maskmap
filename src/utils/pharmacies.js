import gql from "graphql-tag";
import apolloClient from "./graphql";

export function getArticleList() {
  return apolloClient.query({
    query: gql`
      query {
        getMasks {
          payload {
            #id
            code
            ## 醫事機構名稱
            name
            ## 醫事機構地址
            address
            ## 醫事機構電話
            phone
            ## 機構經緯度
            location {
              lat
              lon
            }

            ## 成人口罩總剩餘數
            adult_count

            ## 兒童口罩剩餘數
            child_count

            ## 來源資料時間
            updated_at
          }
          message
          errors
          status
        }
      }
    `
  });
}
