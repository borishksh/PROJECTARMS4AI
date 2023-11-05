import React, { useEffect } from 'react'
import './pageloader.css'

export default function PageLoader() {

    useEffect(() => {
        const textSpans = document.querySelectorAll(".texts-container span");
    
        textSpans.forEach((span, index) => {
            setTimeout(() => {
                span.style.opacity = "1";
                span.style.transform = "translateY(0)";
            }, (index + 1) * 200);
        });
    
        setTimeout(() => {
            const preloader = document.querySelector(".preloader");
            preloader.classList.add("loaded");
        }, textSpans.length * 1000);
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>ARMS </span>
                <span>4 </span>
                <span>AI</span>
            </div>
        </div>
    )
}
