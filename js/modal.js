var button_form = document.querySelector(".button-search");
		var form = document.querySelector(".inner-wrapper");
		var input = form.querySelectorAll("input[type='text']");

		

		button_form.addEventListener("click", function(evt){

			evt.preventDefault()

			form.classList.toggle("form-show")

			form.classList.toggle("form-hide")
				
		})


		form.addEventListener("submit", function(evt){

			if(!input[0].value || !input[1].value || !input[3].value || !input[4].value){
				
				evt.preventDefault()

				console.log("Поля формы не заполнены!")
				
			}else{
				evt.preventDefault()
				
				console.log("Форма успешно отправлена!")
			}
			
		})


		window.addEventListener("keydown", function(evt){

				if(form.classList.contains("form-show")){
					if(evt.keyCode === 27){
						evt.preventDefault()
						
						form.classList.remove("form-show")
						form.classList.toggle("form-hide")

					}
				}
			})