import Feed from "@components/Feed"

const Home = () => {
  return (
      <div className="w-full flex-center flex-col">
          <h1 className="head_text text-center">
              Discover & Share
              <br className="max-md:hidden" />
              <span className="orange_gradient">AI-Powered Prompts for </span>
              <br className="max-md:hidden" />
              <span className="orange_gradient">Productivity</span>
          </h1>

          <p className="desc text-center">
              Promptitude is an open-source project that aims to help people discover, create and share the best of the web AI prompt, curated by Promptitude.
          </p>

          {/* Feed component goes here */}
          <Feed />
    </div>
  )
}

export default Home