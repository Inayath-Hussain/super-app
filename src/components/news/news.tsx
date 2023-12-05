import useNewsApi from "@/hooks/useNews";
import "./news.scss";
import { useEffect, useState } from "react";
import { getDateAndTime } from "@/utilities/dateTime/dateTime";



const News = () => {
    const { data } = useNewsApi()
    const [articleNumber, setArticleNumber] = useState(0);

    // duration of time in which a single article is displayed in minutes
    // @ts-ignore
    let articleDisplayPeriod = 1

    useEffect(() => {
        let intervalID = setInterval(() => {

            if (data) {

                // check if the next articleNumber exceeds total article size
                if (data.articles.length <= articleNumber + 1) {
                    console.log("FETCH AGAIN");
                }
                else {
                    console.log(articleNumber)
                    setArticleNumber(prev => prev + 1);
                }
            }

        }, 10 * 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [data, articleNumber])

    const formatContent = (str: string) => {
        const index = str.lastIndexOf('[')

        const subString = str.substring(0, index - 1)

        return subString
    }

    const articleData = data?.articles[articleNumber] || null

    const articleDate = articleData !== null ? getDateAndTime(new Date(articleData.publishedAt)) : null

    return (
        <div className="news-layout">

            {articleData !== null &&
                <>
                    <div className="image-and-title">
                        <img src={articleData.urlToImage} alt="" />

                        <div className="title-section">
                            {/* title */}
                            <p className="title">{articleData.title}</p>

                            {/* date and time */}
                            <div className="published-at">
                                <p>{articleDate?.date} </p>
                                <p>{articleDate?.time}</p>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <p>{formatContent(articleData.content)}</p>
                    </div>
                </>
            }

        </div>
    );
}

export default News;