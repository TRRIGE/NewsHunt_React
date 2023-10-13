import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=your_api_key&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsHunt`;
    updateNews();
    // eslint-disable-next-line 
  }, [])

  // const handlePrevClick = async () => {
  //   setPage(page - 1)
  //   updateNews();
  // }

  // const handleNextClick = async () => {
  //   setPage(page + 1);
  //   updateNews()
  // }

  const fetchMoreData = async () => {   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=your_api_key&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px',marginTop:'85px' }}>NewsHunt - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={fetchMoreData}
        hasMore={articles ? articles.length !== totalResults : ""}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className="row">
            {articles && articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 55) : ""} description={element.description ? element.description.slice(0, 90) : "The proper description is not available at the moment, plz go to read more to get proper insights!"} imageUrl={element.urlToImage ? element.urlToImage : "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/4/newspaper-stock-image-1-6217562-1672862742220.jpg"} url={element.url} author={element.author ? element.author : "Unknown"} publishedAt={element.publishedAt ? element.publishedAt : 2023} source={element.source.name ? element.source.name : "unknown"} mode={props.mode}/>
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className=" d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={() => this.onPreviosClick()}>&larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} className="btn btn-dark" onClick={() => this.onNextClick()}>Next &rarr;</button>
        </div> */}
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'General'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
