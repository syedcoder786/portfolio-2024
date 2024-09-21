import React from "react";

const BlogSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="mx-auto">
          <div className="flex max-md:flex-col-reverse mb-8">
            <div className="md:w-1/2 pt-8 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">My Blog</h2>
              <p className="text-gray-300 mb-4">
                Explore my blog where I share my thoughts, experiences, and
                insights on various topics. Whether it's technology,
                programming, or life in general, you'll find something
                interesting!
              </p>
              <a
                target="_blank"
                href="https://cstechmasters.blogspot.com/"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 inline-block transition duration-300"
              >
                Visit My Blog
              </a>
            </div>
            <img
              src="https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"
              alt="Blog Image"
              className="md:w-1/2 h-auto rounded-lg shadow-lg md:ml-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
