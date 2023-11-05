import React, { useRef } from 'react';
import { goToPrevious, goToNext } from '../helpers/CarousalSlider';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import { blogs } from '../blogs/Blogs';
import PageLoader from '../components/PageLoader';

export default function Resources() {
  const carouselRef = useRef(null);

  const handleGoToPrevious = () => {
    goToPrevious(carouselRef);
  };

  const handleGoToNext = () => {
    goToNext(carouselRef);
  };


  return (
    <>
    <PageLoader/>
      <div className='containers'>
        <div className="blog-head-line">
          <div className="head-line-left">
            <p className="topic">
              {blogs[0].topic}
            </p>
            <h3>
              {blogs[0].title}
            </h3>
            <font>
              {blogs[0].subTitle}
            </font>
            <Link
              to="/blogdetails"
              state={{
                topic: blogs[0].topic,
                title: blogs[0].title,
                subTitle: blogs[0].subTitle,
                body: blogs[0].body,
                date: blogs[0].date,
                thumbnail: blogs[0].thumbnail,
                bodyImg: blogs[0].bodyImg
              }}
            >
              <button>Read article</button>
            </Link>
          </div>
          <div className='head-line-right'>
            <img src={blogs[0].thumbnail} alt="arms4ai" />
          </div>
        </div>
      </div>

      <div className='recent-post'>
        <div className='containers'>
          <h3 className='recent-heading'>Recent Posts</h3>
          <div className="carousals" ref={carouselRef}>
            {blogs.map((blog, index) => (
              <div className='recent-carosal-item' key={index}>
                <img src={blog.thumbnail} alt="arms4ai" />
                <p className="topic">
                  {blog.topic}
                </p>
                <Link
                  to="/blogdetails"
                  state={{
                    topic: blog.topic,
                    title: blog.title,
                    subTitle: blog.subTitle,
                    body: blog.body,
                    date: blog.date,
                    thumbnail: blog.thumbnail,
                    bodyImg: blog.bodyImg
                  }}
                >
                  <h4>{blog.title}</h4>
                </Link>
                <p className="date">{blog.date}</p>
              </div>
            ))}
          </div>
          <div className='slider'>
              <div onClick={handleGoToPrevious}>❰</div>
              <div onClick={handleGoToNext}>❱</div>
          </div>
        </div>
      </div>

      <div className='containers'>
      <h3 className='all-post-heading'>All Posts</h3>
        <div className='all-post'>
            {blogs.map((blog, index) => (
              <div className='post' key={index}>
                <img src={blog.thumbnail} alt="arms4ai" />
                <p className="topic">
                  {blog.topic}
                </p>
                <Link
                  to="/blogdetails"
                  state={{
                    topic: blog.topic,
                    title: blog.title,
                    subTitle: blog.subTitle,
                    body: blog.body,
                    date: blog.date,
                    thumbnail: blog.thumbnail,
                    bodyImg: blog.bodyImg
                  }}
                >
                  <h4>{blog.title}</h4>
                </Link>
                <p className="date">{blog.date}</p>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
}