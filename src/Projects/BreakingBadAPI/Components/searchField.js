import React, {useState} from "react"

function SearchField({getQuery}){
	const [text, setText] = useState('')

	const onChange = (q) => {
		setText(q)
		getQuery(q)
	}

	return(
		<section className="input-field">
			<form>
				<input 
					type="text" 
					value={text} 
					className="form-control" 
					placeholder="Search..." 
					onChange={(e) => onChange(e.target.value)} 
					autoFocus
				/>
			</form>
		</section>
	)
}

export default SearchField