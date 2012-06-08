---
layout: post
title: OpenNews Code and projects
section: code
---

<p class="bodybig">A key element to the OpenNews project is to put code out into the world that will help make better journalism. Our <a href="/fellowships">Knight-Mozilla Fellows</a> are pushing commits to GitHub regularly, and the <a href="/hackdays.html">hack days</a> we're sponsoring around the world are creating code to solve specific problems.</p>
<div id="fellowcode">
<h3>Projects by the Knight-Mozilla Fellows</h3>
<ul>
<li><a href="http://www.aljazeera.com/indepth/interactive/2012/04/20124107156511888.html" class="fellowhack">Contextual Video Player</a>
<br>Mark Boas created the Contextual Video Player to enrich the experience of a web-based video player by augmenting additional info, various viewing modes and integrating social media sharing. The editor's role should be fast and straightforward and to this end, an editor edits and stores data in a Google Docs Spreadsheet. The ongoing aim is to create a framework that can evolve for use with similar projects and also create a general web-based stand-alone player linked to AJE's documentary material.
<br>Key libraries : Popcorn.js, jPlayer and Tabletop.js
<br><a href="http://www.aljazeera.com/indepth/interactive/2012/04/20124107156511888.html">On the web</a> | <a https://github.com/maboa/contextual-video">On Github</a>
</li>

<li><a href="https://github.com/openNews/amo" class="fellowhack">Amo</a>
<br>Amo was born out of a need to be able to track multiple stories across the web in real time. It works by checking to see how many times a url has been shared on Facebook, Google Plus and Twitter. Once you have the number of shares for a particular url at any given time then you can record those and really start to see which stories the social world likes and it talking about the most.
<br>Key libraries : jsdom, node and jQuery
<br><a href="https://github.com/openNews/amo">On Github</a>
</li>

<li><a href="http://happyworm.com/clientarea/hyperaudio/hap/v22/pad.htm" class="fellowhack">Hyperaudio Pad</a>
<br>Mark Boas' Hyperaudio Pad is a tool to facilitate the easy assemblage of audio and video programs from their underlying transcripts. The ongoing aims are to create something usable that works with both audio and video and allows transitions and overlaying to be specified via in-pad natural language instructions and to build up a library of material and to integrate with other third-parties such as Amara (formerly Universal Subtitles)
<br>Key libraries: Popcorn.js, jPlayer
<br><a href="http://happyworm.com/clientarea/hyperaudio/hap/v22/pad.htm">On the web</a> | <a href="https://github.com/maboa/hyperaudiopad">On Github</a>
</li>

<li><a href="http://newsjack.in" class="fellowhack">NewsJack</a>
<br>Dan Schultz's project leverages Hackasaurus to let anyone remix the news.  NewsJack
instigates questions about what it means to be credible online,
reminds us how important it is to challenge digital messages
regardless of their appearance, and promotes conversation about brand
and media literacy.
<br><a href="http://newsjack.in">On the web</a> | <a href="https://github.com/slifty/newsjack">On Github</a>


<li><a href="http://truthgoggl.es" class="fellowhack">Truth Goggles</a>
<br>Dan Schultz has built a credibility layer / automatic BS detector for the internet.
It helps catalyze critical thinking by reminding people when it is
most important to be cautious.
<br><a href="http://truthgoggl.es">On the web</a> | <a href="https://github.com/slifty/truth-goggles">On Github</a> 

<li><a href="http://www.aljazeera.com/indepth/features/2012/04/2012418162237555962.html" class="fellowhack">YouSlide</a>
<br>Mark Boas sought to make image-based slideshows more compelling by allowing images to be zoomed and faded and an audio track to be added. The ongoing aim is to create a tool that will allow anybody to create audio slideshows from YouTube based audio and Creative Commons licensed images.
<br>Key libraries : Popcorn.js, jPlayer
<br><a href="http://www.aljazeera.com/indepth/features/2012/04/2012418162237555962.html">On the web</a> | <a href="https://github.com/maboa/YouSlide"> On Github</a>
</li>

</ul>
</div>
<h3>Code from Hack Days</h3>
<p>The <a href="/hackdays.html">global hack days</a> we're helping to sponsor are producing all sorts of interesting code. Feel free to explore the many projects spawned at OpenNews Hack Days.  
<div id="hackcode" class="multicolumn">
<ul id="daycode">
</ul>
</div>

<script type="text/javascript" src="media/js/tabletop.js"></script>

<script type="text/javascript">

$('<div id="preload"></div>').html('<img src="/media/img/ajax-loader.gif" alt="loading data" />').prependTo($('#hackcode'));
    
      window.onload = function() { init() };

      var public_spreadshseet_url = 'https://docs.google.com/spreadsheet/pub?key=0Anp-zgGKPxl7dFRBeHFiN2RIRmtablN1aFpwM05hM1E&output=html';

      $(document).ready( function() {
        Tabletop.init( { key: public_spreadshseet_url,
                         callback: showInfo,
                         debug: true } )
      });
      
        
      function showInfo() {   
      
       $('#preload').hide();     
        
        $.each( Tabletop.sheets("projects").all(), function(i, codeday) {
          var code_li = $('<li><a href="' + codeday.repo +'">' + codeday.name + '</a><br>' + codeday.description + '<br><small>Created at <a href="' + codeday.daylink + '">' + codeday.hackday +'</small></li>')
          code_li.appendTo("#daycode");
          
 		});
 		 		
 		         
      };
      
</script>