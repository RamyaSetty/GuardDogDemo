$(function() {
	"use strict";
	$(window).on("load resize", function() {
		$(".fill-screen").css("height", (window.innerHeight)/1.5);
		$(".fill-screen").css("width", window.innerWidth);
	});
	
	//header
	
	$(window).scroll(function(){
		if ($(this).scrollTop() <= 1) {
			$("#nav-bar-header").css('background-color', 'black');
		} 
		if($(this).scrollTop() > 1)
		{
			$("#nav-bar-header").css('background-color', 'rgba(0,0,0,0.65)');
		}
	});
	
	//parallax scrolling
	$(window).stellar();
	
	
	$('#announcements a').bind('click', function(){
		$('html, body').stop().animate({
			scrollTop:$($(this).attr('href')).offset().top
		},1500, 'easeInOutExpo');
		event.preventDefault();
	});
	
	$(window).ready(function() {
	$('.postleft').addClass("porthidden").viewportChecker({
	    classToAdd: 'portvisible animated bounceInLeft', // Class to add to the elements when they are visible
	    offset: 100    
	   });   
	$('.postright').addClass("porthidden").viewportChecker({
	    classToAdd: 'portvisible animated bounceInRight', // Class to add to the elements when they are visible
	    offset: 100    
	   });   
		
	$('#items').addClass("porthidden").viewportChecker({
	    classToAdd: 'portvisible animated bounceInUp', // Class to add to the elements when they are visible
	    offset: 100    
	   });   
});            
	
});// JavaScript Document
