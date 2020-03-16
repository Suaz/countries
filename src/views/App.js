import React, {useEffect, useState} from 'react';
import './App.scss';
import ServiceCountry from "../services/ServiceCountry";
import {useDispatch, useSelector} from "react-redux";
import {countrySetAllList} from "../store/country/actions";
import CountryCard from "../components/CountryCard";

function App() {
	const dispatch          = useDispatch();
	const countryData       = useSelector(store => store.country);
	const [query, setQuery] = useState('');
	const [h, setH]         = useState(0);
	useEffect(() => {
		
		if (query === '')
			ServiceCountry.getAll((data) => {
				setH(Math.ceil(data.length / 3) * 90);
				dispatch(countrySetAllList(data));
			});
		else
			ServiceCountry.getAllByName(query, (data) => {
				setH(Math.ceil(data.length / 3) * 90);
				dispatch(countrySetAllList(data));
			});
	}, [query]);
	
	const handleInput = (event) => {
		setQuery(event.target.value);
	};
	
	return (
		<div className="App">
			<div className={'searchBox'}>
				<label htmlFor="countrySearch">Filtrar pais</label>
				<input
					name='countrySearch'
					type="text"
					onChange={handleInput}/>
			</div>
			<div className={'countries'} style={{height: h}}>
				{
					countryData.list.map(country => {
						return <CountryCard key={country.alpha2Code} country={country}/>;
					})
				}
			</div>
		</div>
	);
}

export default App;
