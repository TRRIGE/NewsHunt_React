import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, url, author, publishedAt, source} = props;
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
          <span className="badge rounded-pill bg-dark">{source}</span>
        </div>
        <img style={{ height: "180px" }} src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <div><p className="card-text"><small className="text-body-secondary"><i className="bi bi-person-fill"></i> {author} <i className="bi bi-calendar-event"></i> {new Date(publishedAt).toDateString()}</small></p></div>
          <p className="card-text">{description}...</p>
          <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem