import strLogo from './images/Star-wars-logo.webp'

function StarWars(){
    return (<>
    <section>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Galary</a></li>
        <li><a href="#">About the Cast and Details</a></li>
        <li><a href=" #">Contact us</a></li>
        <li><a href="#">Read more here</a></li>
      </ul>
    </nav>
    <header>
      <h2>Star Wars now</h2>
    </header>
  </section>
  <section>
    <div>
      <img src={strLogo} alt="Flow"  style={{ width: "100%", height: "auto"}} height ="600"/>
    </div>
  </section>
  <section style={{border: "3px solid blue"}}>

<aside style={{textalign:"center"}}>
  <h1>Star Wars </h1>
  <p>Star Wars is an American epic space opera media franchise created by George Lucas, which began with the
    eponymous
    1977 film and quickly became a worldwide pop culture phenomenon. </p>
  <h1> A New Hope </h1>
  <p> “A New Hope” came out on May 25, 1977. Featuring Luke Skywalker (Mark Hamill), Han Solo (Harrison Ford) and
    Princess Leia (Carrie Fisher) in their career-defining roles for the first time, “A New Hope” ushered in the
    cultural phenomenon of a franchise that continues even today.</p>

</aside>
</section>
<section>
    <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
  </section>

  <footer>
    <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
  </footer>

    </>)
}
export default StarWars;