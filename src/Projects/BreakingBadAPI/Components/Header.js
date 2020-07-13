import React, {useState, useEffect} from "react"
import "./style.css"
import logo from "../img/logo.png"
import axios from "axios"
import GridCard from "./gridCard"
import SearchField from "./searchField"

function Header(){
	const [items, setItems] = useState([])
	const [query, setQuery] = useState('')

	useEffect(() => {
		axios.get(`https://breakingbadapi.com/api/characters?name=${query}`)
		.then((response) => {
			setItems(response.data)
		})	
		.catch((error) => {
			console.log("error", error)
		})
	}, [query])

	return(
		<div className="header">
			<img src={logo} alt="logo" />
			<SearchField getQuery={(q) => setQuery(q)} />
			<GridCard items={items} />
		</div>
	)
}

export default Header