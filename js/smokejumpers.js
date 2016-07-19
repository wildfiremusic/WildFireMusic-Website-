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
				title:"SmokeJumpers - Pleasant Suprise",
				free:true,
				mp3:"http://wildfiremusic.us/js/music/smokejumpers/1.mp3",
			},
			{
				title:"SmokeJumpers - Collab (Ft. Master Logic)",
				free:true,
				m4a:"http://wildfiremusic.us/js/music/smokejumpers/2.m4a",
			},
			{
				title:"SmokeJumpers - (Name Coming Soon...)",
				m4a:"http://wildfiremusic.us/js/music/smokejumpers/3.m4a",
			},
			{
				title:"SmokeJumpers - (Name Coming Soon...) [Edit]",
				mp3:"http://wildfiremusic.us/js/music/smokejumpers/4.m4a",
			},
			{
				title:"Star Wars[The Force Awakens] REMIX [Artist : MasterLogic]",
				m4a:"http://wildfiremusic.us/js/music/smokejumpers/5.m4a",
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