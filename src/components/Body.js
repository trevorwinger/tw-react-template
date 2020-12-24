import React from 'react';
import '../tailwind.output.css';
const Body = ({header_text, main_head}) => {
    return(
        <body className='antialiased bg-body text-body font-body'>
            <div className='container mx-auto px-4'>
                <section className='py-12 px-4 text-center'>
                    <span className='text-sm font-semibold'>{header_text}</span>
                    <h2 className='text-5xl mt-2 mb-6 leading-tight font-semibold font-heading'>{main_head}</h2>
                    <p className='mb-8 text-gray-400 leading-relaxed'>Professional, dedicated, local. {header_text} is on its best patch to change the way you think about paper. That’s us - people who sell limitless paper in the paperless world.</p>
                    <div>
                        <a class="inline-block py-4 px-8 mr-6 leading-none text-white bg-primary hover:bg-primary font-semibold rounded shadow" href="#">Sign up</a>
                        <a class="text-secondary hover:underline" href="#">Learn more</a></div>
                </section>
            </div>
        </body>
    )
}

export default Body;