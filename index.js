console.log({origin});
if('null' !== window.origin){
	navigator?.serviceWorker.register('./sw.js').then(()=>{
		console.log('Service worker registered');
	});
}else{
	console.log('local');
}
