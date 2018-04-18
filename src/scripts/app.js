import svg4everybody from 'svg4everybody';

import Tabs from './modules/Tabs';
import Gallery from './modules/Gallery';
import MobileMenu from './modules/MobileMenu';
import StickyBar from './modules/StickyBar';
import Catalog from './modules/Catalog';
import StarRating from './modules/StarRating';


document.addEventListener('DOMContentLoaded', function(e) {


	// external svg sprite polyfill
	svg4everybody();



	// sticky bar
	let stickyBar = document.querySelector('.js-sticky-bar');
	new StickyBar(stickyBar);



	// catalog
	let cloneContainer = document.querySelector('.js-catalog-cloned');

	cloneContainer.appendChild(document.querySelector('.js-catalog').cloneNode(true));

	let catalog = Array.from(document.querySelectorAll('.js-catalog'));
	catalog.forEach(element => new Catalog(element));



	// tabs
	let tabs = Array.from(document.querySelectorAll('.js-tabs'));
	tabs.forEach(element => new Tabs(element));



	// gallery
	let gallery = Array.from(document.querySelectorAll('.js-gallery'));
	gallery.forEach(element => new Gallery(element));



	// mobile menu
	new MobileMenu();



	// star rating
	let rating = Array.from(document.querySelectorAll('.js-rating'));
	rating.forEach(element => new StarRating(element));



	// enable transitions
	document.body.classList.remove('is-disabled-transition');

});