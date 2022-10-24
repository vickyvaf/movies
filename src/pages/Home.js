import Banner from "../components/Banner"
import Header from "../components/Header"
import Row from "../components/Row"
import requests from "../components/request"

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className="row-wrapper">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.netflixOriginals}
          isLargeRow
        />
        <Row
          title="Trending Now"
          fetchUrl={requests.trending}
        />
        <Row
          title="Top Rated"
          fetchUrl={requests.topRated}
        />
        <Row
          title="Action Movies"
          fetchUrl={requests.actionMovies}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.comedyMovies}
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.horrorMovies}
        />
        <Row
          title="Romance Movies"
          fetchUrl={requests.romanceMovies}
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.documentaries}
        />
      </div>
    </>
  )
}

export default Home