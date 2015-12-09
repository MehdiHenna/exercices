"use strict"
$(document).ready(function(){
	
	$(document).on('click', '#checkOn', function(){
		var contenu = $('input[name=rechercher]').val();

		
			$('#todoshermanos').append('<li class="description hello"><input type="checkbox" class="check"/>' + contenu + '</li>');

		

	});

	

	$(document).on('click', '[type=checkbox]', function(){

		$('li').toggleClass("java");

	});


	});