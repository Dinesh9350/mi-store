import React, {useState, useEffect} from 'react'
import NavCard from './NavCard.jsx';
import '../styles/NavOptions.css'

const NavOptions = ({miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories}) => {
	const [miPhonesToggle, setMiPhonesToggle] = useState(false);
	const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
	const [tvToggle, setTvToggle] = useState(false);
	const [laptopToggle, setLaptopToggle] = useState(false);
	const [fitnessAndLifeStyleToggle, setFitnessAndLifeStyleToggle] = useState(false);
	const [homeToggle, setHomeToggle] = useState(false);
	const [audioToggle, setAudioToggle] = useState(false);
	const [accessoriesToggle, setAccessoriesToggle] = useState(false);
	useEffect(() => {
		if(window.location.pathname === "/miphones"){
			return setMiPhonesToggle(true);
		}
		if(window.location.pathname === "/redmiphones"){
			return setRedmiPhonesToggle(true);
		}
		if(window.location.pathname === "/tv"){
			return setTvToggle(true);
		}
		if(window.location.pathname === "/laptops"){
			return setLaptopToggle(true);
		}
		if(window.location.pathname === "/fitnessandlifeStyle"){
			return setFitnessAndLifeStyleToggle(true);
		}
		if(window.location.pathname === "/home"){
			return setHomeToggle(true);
		}
		if(window.location.pathname === "/audio"){
			return setAudioToggle(true);
		}
		if(window.location.pathname === "/accessories"){
			return setAccessoriesToggle(true);
		}
	}, [])
	
	return (
		<div className='NavOptions'>
			{miPhonesToggle? miPhones.map((item, index)=>(
				<NavCard index={index} name={item.name} price={item.price} image={item.image} />
			)): null}
			{redmiPhonesToggle? redmiPhones.map((item, index)=>(
				<NavCard index={index} name={item.name} price={item.price} image={item.image} />
			)): null}
			{tvToggle? tv.map((item, index)=>(
				<NavCard index={index} name={item.name} price={item.price} image={item.image} />
			)): null}
			{laptopToggle? laptop.map((item, index)=>(
				<NavCard index={index} name={item.name} price={item.price} image={item.image} />
			)): null}
			{fitnessAndLifeStyleToggle? fitnessAndLifeStyle.map((item, index)=>(
				<NavCard index={index} name={item.name} price={item.price} image={item.image} />
			)): null}
			{homeToggle? home.map((item, index)=>(
				<NavCard index={index} name={item.name} price={item.price} image={item.image} />
			)): null}
			{audioToggle? audio.map((item, index)=>(
				<NavCard index={index} name={item.name} price={item.price} image={item.image} />
			)): null}
			{accessoriesToggle? accessories.map((item, index)=>(
				<NavCard index={index} name={item.name} price={item.price} image={item.image} />
			)): null}
		</div>
	)
}

export default NavOptions