import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function Item() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		Axios.get('/api')
		.then(response => setUser(response.data))
	}, [])
	return user && (
		<div className="Item">
			<header className="Item-header">
				<p>{JSON.stringify(user)}</p>
				<a
				className="Item-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
				>
				Learn React
				</a>
			</header>
		</div>
	);
}

export default Item;
