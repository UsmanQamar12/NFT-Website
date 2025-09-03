
import {BrowserRouter, Routes, Route } from "react-router-dom";
import AosInit from "./component/layout/aos";


import ScrollToTop from "./component/layout/scrolltop";
import ErrorPage from "./page/404";
import Blog from "./page/blog";
import BlogSingle from "./page/blog-single";
import ComingSoon from "./page/coming-soon";
import Contact from "./page/contact";
import Home from "./page/home";
import OnePage from "./page/onepage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ScrollToTop />
				<AosInit />
				<Routes>
					<Route path="index-single" element={<Home />} />
					<Route path="/" element={<OnePage />} />
					<Route path="blog" element={<Blog />} />
					<Route path="blog-single" element={<BlogSingle />} />
					<Route path="coming-soon" element={<ComingSoon />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
