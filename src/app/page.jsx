import Footer from "@/components/footer";
import Header from "@/components/Header";
import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import Welcome from "@/components/welcome";
const API_KEY = process.env.API_KEY;

export default async function Home({ params }) {
  const searchParams = new URLSearchParams(params.searchParams);
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  const results = data.results;

  return (
    <div>
      <Header />
      <Welcome />
      <SearchBox />
      <Results results={results} />
      <Footer />
    </div>
  );
}
