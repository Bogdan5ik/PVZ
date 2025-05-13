let sunflower = document.querySelectorAll('.sunflower')
		let peas = document.querySelectorAll('.peas')
		let zombies = document.querySelectorAll('.zombies')

		document.querySelector('.button2').onclick = function(){
			for(let i=0; sunflower.length; i++){
				sunflower[i].style.display = 'flex';
			}
		}

		document.querySelector('.btn').onclick = function(){
			for(let i=0; peas.length; i++){
				peas[i].src = 'img/peashooter2.png';
			}
		}

		document.querySelectorAll('.zombies').onclick = function() {
			for(let i=0; zombies.length; i++){
			}
		}

		let zombiesLeft = 1100;
		let zombiesLeft1 = 1100;
		let zombiesLeft2 = 1100;
		let zombiesLeft3 = 1100;
		let zombiesLeft4 = 1100;
		let offset = 0;

			zombies[0].onclick = function() {
			zombiesLeft = zombiesLeft - 100;
			zombies[0].style.left = zombiesLeft + "px";

			if(zombiesLeft === 400){
				alert("Съеден");
				peas[0].style.display = "none";
				offset += 1;
				document.querySelector('.score').innerHTML = offset;
			}
			if(zombiesLeft === 500){
				alert("Съеден");
				sunflower[0].style.display = "none";
				offset += 1;
				document.querySelector('.score').innerHTML = offset;
			}
		}

		zombies[1].onclick = function() {
			zombiesLeft1 = zombiesLeft1 - 100;
			zombies[1].style.left = zombiesLeft1 + "px";

			if(zombiesLeft1 === 400){
				alert("Съеден");
				peas[1].style.display = "none";
				offset += 1;
				document.querySelector('.score').innerHTML = offset;
			}
			if(zombiesLeft1 === 500){
				alert("Съеден");
				sunflower[1].style.display = "none";
				offset += 1;
				document.querySelector('.score').innerHTML = offset;
			}
		}

		zombies[2].onclick = function() {
			zombiesLeft2 = zombiesLeft2 - 100;
			zombies[2].style.left = zombiesLeft2 + "px";

			if(zombiesLeft2 === 400){
				alert("Съеден");
				peas[2].style.display = "none";
				offset += 1;
				document.querySelector('.score').innerHTML = offset;
			}
			if(zombiesLeft2 === 500){
				alert("Съеден");
				sunflower[2].style.display = "none";
				offset += 1;
				document.querySelector('.score').innerHTML = offset;
			}
		}

		zombies[3].onclick = function() {
			zombiesLeft3 = zombiesLeft3 - 100;
			zombies[3].style.left = zombiesLeft3 + "px";

			if(zombiesLeft3 === 400){
				alert("Съеден");
				peas[3].style.display = "none";
				offset += 1;
				document.querySelector('.score').innerHTML = offset;
			}
			if(zombiesLeft3 === 500){
				alert("Съеден");
				sunflower[3].style.display = "none";
				offset += 1;
				document.querySelector('.score').innerHTML = offset;
			}
		}

		zombies[4].onclick = function() {
			zombiesLeft4 = zombiesLeft4 - 100;
			zombies[4].style.left = zombiesLeft4 + "px";

			if(zombiesLeft4 === 400){
				alert("Съеден");
				peas[4].style.display = "none";
				offset += 1;
				document.querySelector('.score').innerHTML = offset;
			}
			if(zombiesLeft4 === 500){
				alert("Съеден");
				sunflower[4].style.display = "none";
				offset += 1;
				document.querySelector('.score').innerHTML = offset;
			}
		}