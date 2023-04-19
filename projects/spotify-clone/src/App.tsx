import { HiHeart, HiHome, HiLibrary, HiOutlinePlus, HiSearch } from "react-icons/hi";

import { Navbar } from "./components/navbar";
import { Section } from "./components/section";
import { playlistMain } from "./data/playlist";
import { Container, Control, Main, MenuLeft } from "./styles/container.style";
import { Menu, MenuPlaylist } from "./styles/menu.style";
import { Body } from "./ui/body";
import { Divider } from "./ui/divider";

export default function App() {
	return (
		<Container>
			<Main>
				<MenuLeft>
					<Menu>
						<ul>
							<li>
								<a href="#">
									<HiHome />
									<span>Home</span>
								</a>
							</li>
							<li>
								<a href="#">
									<HiSearch />
									<span>Search</span>
								</a>
							</li>
							<li>
								<a href="#">
									<HiLibrary />
									<span>Your Library</span>
								</a>
							</li>
							<div style={{ height: 20 }} />
							<li>
								<a href="#">
									<HiOutlinePlus />
									<span>Create Playlist</span>
								</a>
							</li>
							<li>
								<a href="#">
									<HiHeart />
									<span>Liked Songs </span>
								</a>
							</li>
						</ul>
					</Menu>
					<Divider />
					<MenuPlaylist>
						<ul>
							{Array.from({ length: 20 }).map((_, i) => (
								<li key={`menu-left-playlist-item-${i}`}>
									<a href="#">
										<span>Playlist {i + 1}</span>
									</a>
								</li>
							))}
						</ul>
					</MenuPlaylist>
				</MenuLeft>
				<Body>
					<Navbar />
					{playlistMain.map((x, i) => (
						<Section {...x} key={`section-${i}`} />
					))}
				</Body>
			</Main>
			<Control></Control>
		</Container>
	);
}
