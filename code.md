---
layout: post
title: OpenNews Code and projects
section: code
---

<p class="bodybig">A key element to the OpenNews project is to put code out into the world that will help make better journalism. Our <a href="/fellowships">Knight-Mozilla Fellows</a> are pushing commits to GitHub regularly, and the <a href="/hackdays.html">hack days</a> we're sponsoring around the world are creating code to solve specific problems.</p>
<div id="fellowcode">
<h2>Fellows Projects and Code</h2>
<ul>
<li><a href="http://truthgoggl.es" class="fellowhack">Truth Goggles</a>
<br>Dan Schultz has built a credibility layer / automatic BS detector for the internet.
It helps catalyse critical thinking by reminding people when it is
most important to be cautious.
<br><a href="http://truthgoggl.es">On the web</a> | <a href="https://github.com/slifty/truth-goggles">On Github</a> 

<li><a href="http://newsjack.in" class="fellowhack">NewsJack</a>
<br>Dan Schultz's project leverages Hackasaurus to let anyone remix the news.  NewsJack
instigates questions about what it means to be credible online,
reminds us how important it is to challenge digital messages
regardless of their appearance, and promotes conversation about brand
and media literacy.
<br><a href="http://newsjack.in">On the web</a> | <a href="https://github.com/slifty/newsjack">On Github</a>

<li>Applicake cupcake ice cream jelly carrot cake gingerbread. Gummi bears faworki apple pie fruitcake. Caramels dragée chupa chups tiramisu. Pie toffee gummi bears.

<li>Dragée caramels chocolate bar jujubes. Jelly beans jelly chupa chups bear claw gingerbread jelly pie. Sugar plum tiramisu muffin cake marshmallow halvah sweet marzipan.

<li>Marshmallow brownie sweet roll oat cake marzipan topping pastry muffin icing. Powder fruitcake chupa chups powder halvah. Candy cotton candy sweet roll.

<li>Powder halvah faworki wafer gummies tootsie roll apple pie. Jelly-o cookie gummi bears apple pie. Halvah dragée faworki lemon drops.
</ul>
</div>
<h2>Code from Hack Days</h2>
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