import React from "react"
import "./style.css"

function GridCard({items}){
	return(
		<div className="cards">
			{items.map((item) => (
				<p>{item.name}</p>
			))}
		</div>
	)

}

export default GridCard