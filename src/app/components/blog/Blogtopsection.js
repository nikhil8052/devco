'use client';

export default function Blogtopsection({ blogs }) {
    if (!blogs || !blogs.data) {
        return <p className="text-center">No blog available.</p>;
    }

    const { image, date, title, content } = blogs.data;

    return (
        <div className="Blogtopsection">
            <div className="container mx-auto">
                <div className="blogs_content w-full max-w-[890px] mx-auto">
                    <div className="blog_cartd_image">
                        <img src={image || '/default-image.jpg'} alt="Blog Thumbnail" />
                    </div>
                    <div className="blog_meta">
                        <span className="blog_date">{date || 'Unknown Date'}</span>
                    </div>
                    <h2 className="post_title"
                     dangerouslySetInnerHTML={{ __html: blog.title }}></h2>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: content || '' }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
