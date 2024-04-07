import React, { useState } from 'react';


export default function Articles(){
    const [showAdditionalArticles, setShowAdditionalArticles] = useState(false);

  const handleLoadMoreClick = () => {
    setShowAdditionalArticles(true);
  };

    return(
        <>
        <div className="rpanel2 mt-18">
          <div className=" bg-gray-100  text-gray-800 mt-6">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
              <a rel="noopener noreferrer" href="#" className="block gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12  bg-gray-50">
                <img src="https://www.humanresourcing.co.uk/wp-content/uploads/2023/08/connected-technology.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7  bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Women Engineers' Program</h3>
                  <span className="text-xs  text-gray-600">February 19, 2024</span>
                  <p>The Women Engineers' Mentorship Drive is Now Live! <br/>Connect with industry leaders, expand your network, and take your career to new heights.</p>
                </div>
              </a>
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-50">
                  <img role="presentation" className="object-cover w-full rounded h-44  bg-gray-500" src="https://www.theforage.com/blog/wp-content/uploads/2022/09/tech-companies.jpg" />
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Tech Trends 101: A Deep Dive into the Hottest Topics of the Year</h3>
                    <span className="text-xs  text-gray-600">February 21, 2024</span>
                    <p>From AI to Blockchain: Exploring the Cutting-Edge Technologies Revolutionizing Our World.</p>
                  </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-50">
                  <img role="presentation" className="object-cover w-full rounded h-44  bg-gray-500" src="https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1535223289827-42f1e9919769%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dtech%252Bindustry%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Mnx8dGVjaCUyMGluZHVzdHJ5fGVufDB8fHx8MTcxMDY3OTc1OHww%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60" />
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Tech Industry Unveiled: A Comprehensive Guide</h3>
                    <span className="text-xs  text-gray-600">February 22, 2024</span>
                    <p>Unlocking the Secrets, Trends, and Opportunities in Today's Digital Landscape</p>
                  </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-50">
                  <img role="presentation" className="object-cover w-full rounded h-44  bg-gray-500" src="https://www.shutterstock.com/image-photo/double-exposure-businessman-handshake-on-260nw-401268607.jpg" />
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Building Effective Mentor-Mentee Relationships</h3>
                    <span className="text-xs  text-gray-600">February 23, 2024</span>
                    <p>Navigating the Dynamics of Mentorship for Growth and Development.</p>
                  </div>
                </a>
                {showAdditionalArticles && (
                  <>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-50 hidden sm:block">
                      <img role="presentation" className="object-cover w-full rounded h-44  bg-gray-500" src="https://media.istockphoto.com/id/1356314835/photo/metaverse-future-digital-with-vr-virtual-reality-technology-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=4Nl3HmqufAA96zGDgvEoEYlK1mJ0hK2PQOi_uusA5vU=" />
                      <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Decoding Tech Jargon: Demystifying Complex Concepts</h3>
                        <span className="text-xs  text-gray-600">February 24, 2024</span>
                        <p>A Beginner's Guide to Understanding Key Terminologies in the Tech World.</p>
                      </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-50 hidden sm:block">
                      <img role="presentation" className="object-cover w-full rounded h-44  bg-gray-500" src="https://media.licdn.com/dms/image/D4E12AQG8fKjlYNvSTg/article-cover_image-shrink_600_2000/0/1693809282675?e=2147483647&v=beta&t=8vcP44GZkHMYPm9lA45b8wzBea9y-w4Ipb0bq6TId2Q" />
                      <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Role of Emotional Intelligence in Mentorship</h3>
                        <span className="text-xs  text-gray-600">February 25, 2024</span>
                        <p>Cultivating Empathy, Communication, and Trust for Meaningful Connections.</p>
                      </div>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-50 hidden sm:block">
                      <img role="presentation" className="object-cover w-full rounded h-44  bg-gray-500" src="https://img.freepik.com/premium-photo/group-people-wearing-virtual-reality-glasses-playing-games-generative-ai_175086-2962.jpg" />
                      <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Navigating the Digital Frontier: Insights into the Tech Landscape</h3>
                        <span className="text-xs  text-gray-600">February 26, 2024</span>
                        <p>Discover the Core Concepts, Innovations, and Career Pathways in Technology.</p>
                      </div>
                    </a>
                  </>
                )}
              </div>
              <div className="flex justify-center">
                {!showAdditionalArticles && (
                  <button type="button" onClick={handleLoadMoreClick} className="px-6 py-3 text-sm rounded-md hover:underline  bg-gray-50  text-gray-600">Load more posts...</button>
                )}
              </div>
            </div>
          </div>
        </div>
        </>
    )
}