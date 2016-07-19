jQuery(function ($) {
	"use strict";
    $(document).ready(function () {
		/* ----------------------------------------------------------- */
		/*  #Create Player
		/* ----------------------------------------------------------- */
		new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer",
			cssSelectorAncestor: "#jp_container"
		},[
			{
				title:"DeepWoods - Chill Out",
				free:true,
				m4a:"http://wildfiremusic.us/js/music/1.m4a",
			},
			{
				title:"DeepWoods - Chill Out [Piano]",
				free:true,
				m4a:"http://wildfiremusic.us/js/music/2.m4a",
			},
			{
				title:"DeepWoods - EDM",
				m4a:"http://wildfiremusic.us/js/music/3.m4a",
			},
			{
				title:"DeepWoods - Dubstep",
				mp3:"http://wildfiremusic.us/js/music/4.mp3",
			},
			{
				title:"Coming Soon...",
				mp3:"",
				oga:""
			},
			{
				title:"Coming Soon...",
				mp3:"",
				oga:""
			},
			{
				title:"Coming Soon...",
				mp3:"",
				oga:""
			}
		],{
			swfPath: "",
			supplied: "OGA, MP3, M4A",
			wmode: "window",
			useStateClassSkin: true,
			autoBlur: false,
			smoothPlayBar: true,
			keyEnabled: false,
			enableRemoveControls:false,
		});	
    });
});	