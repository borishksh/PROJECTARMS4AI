import React, { useRef }  from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer';
import { goToPrevious, goToNext } from '../helpers/CarousalSlider';
import { Link   } from "react-router-dom";
import { blogs } from '../blogs/Blogs';
import PageLoader from '../components/PageLoader';

export default function BlogDetails(props) {
    
    const carouselRef = useRef(null);

    const handleGoToPrevious = () => {
        goToPrevious(carouselRef);
    };

    const handleGoToNext = () => {
        goToNext(carouselRef);
    };

    const reload = () => {
        window.location.reload();
    };


    const location = useLocation();
    const body = location.state.body.split('\n');

    return (
        <>
        <PageLoader/>
        <div className='containers'>
            <div className='blog-details mt-[100px]'>
                <p className="topic">
                    {location.state.topic}
                </p>
                <h1 className='text-[40px] font-extrabold'>
                    {location.state.title}
                </h1>
                <p className='date'>
                    {location.state.date}
                </p>
                <p className='sub-title-blog-deatils'>
                    {location.state.subTitle}
                </p>
                <img src={location.state.thumbnail} alt="arms4ai" />
                <p className='blog-body'>
                    {body.map((para, index) => (
                        <font key={index} className="para">{para}
                            <br /></font>
                    ))}
                </p>
                <img src={location.state.bodyImg} alt="arms4ai" />
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
                        }} onClick={reload}
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
        <Footer /></>
    )
}
