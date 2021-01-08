import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Movie from '../components/movie'
const theMovie = {
  title:"Superbad",
  trailer:"zFjaJbihWwc",
  genre: "Comedy",
  image: "https://www.indiewire.com/wp-content/uploads/2017/08/screen-shot-2014-08-12-at-3-09-17-pm.png"
}
const IndexPage = () => (
  <Layout>
      <Movie data = {theMovie}/>
  </Layout>
)

export default IndexPage

