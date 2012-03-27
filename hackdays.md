---
layout: post
title: Hack Days with OpenNews
---

<p class="bodybig">This is the HackDay introduction. This is the HackDay introduction. This is the HackDay introduction. This is the HackDay introduction. This is the HackDay introduction. This is the HackDay introduction. This is the HackDay introduction. This is the HackDay introduction. This is the HackDay introduction.</p>

<div id="hackcalbox">
    <h3>Upcoming OpenNews Hack Days</h3>
    <table id="hackcal">
    </table>
    </div>
    
Well, “many more” is now a mandate in the OpenNews project. We have plans (and budget) to help sponsor, organize, or produce journalism-associated hackdays in a major way this year. We’re shooting for 15-20, but may end up able to do more. That’s a ton of hackdays. Clearly, we’re not hosting all those ourselves. Our plan is the opposite, in fact: we want to help you with your hackdays. What’s in it for us? It’s pretty simple:

* We want to get more developers building around journalistic problemsets, so there needs to be a journalistic frame to your hackday. That doesn’t mean “hack the news”—a frame that’s far too generic—it means “build geolocational tools for information gathering.”
* We want tangible outcomes—things should come out of this that can be shared, distributed, forked, and maybe even launched.
* We’d like you to keep track of how many people were there, and have a way of getting back in touch with them.
* We’re dying to hear what happened, so we’ll want a blog post that documents the day and links to the code that was made. We’d love for you to join us on the Mozilla Webmaker community call as well to talk about the day.
* And, obviously, we get to get our name in as a sponsor.

That’s not much. In fact, it’s designed to be as straightforward as possible: you want to hack, we want to help.

Here’s a great example of how this flows:

This weekend in Chicago, the Code for America fellows will host the Chicago Civic IdeaHack a hack day dedicated to develop tools for accessing civic data. The CfA fellows that are working with the City of Chicago this year organized the hackday, but needed help covering the costs associated with the day. Enter OpenNews: There’s tons of overlap between the civic data and journo-hacker community. In reality, they are two sides of the same coin. Getting developers interesting in working with civic datasets and building tools that help inform a community is, at its essence, getting them interested in journalism. The journalistic frame was there, so we reached out and offered to cover the costs for the day. And, boom, a better hack day was had for everyone.

We want to do this again and again and again this year. Each one will be different; each one will be awesome.

We’ve been talking with people from Hacks/Hackers, from various news organizations, from universities, and others about helping out on hackdays. But, we also want to hear from you. Really. We’ve set up a form so you can let us know what you’re thinking and we can talk about how we can most effectively help. Maybe you’ve already got something in the works, but you want to have a two-day hackfest instead of one. Maybe you’ve got everything lined up, but you want to offer travel grants to your event. Maybe you need help getting organized. Maybe you want to bring us in to do something from scratch. There are any number of variations on how this can work—the key element is that it brings awesome hacking into the journalism community.

That’s the best thing about our hackday plan is that it’s scalable: we want to work with you the way you want to work with us. So let’s do this. 

<script type="text/javascript" src="media/js/tabletop.js"></script>

<script type="text/javascript">

$(document).ready(function () { 
$('#nav li a.hackdays').addClass('active');

});


</script>

<script type="text/javascript">
    
      window.onload = function() { init() };

      var public_spreadshseet_url = 'https://docs.google.com/spreadsheet/pub?key=0Anp-zgGKPxl7dFRBeHFiN2RIRmtablN1aFpwM05hM1E&output=html';

      $(document).ready( function() {
        Tabletop.init( { key: public_spreadshseet_url,
                         callback: showInfo,
                         debug: true } )
      });
      
        
      function showInfo() {        
        
        $.each( Tabletop.sheets("Sheet1").all(), function(i, hackday) {
          var hack_li = $('<tr><td class="date">' + hackday.date + '</td><td class="event"><a href="' + hackday.website +'">' + hackday.title + '</a></td><td class="location">' + hackday.location + '</td></tr>')
          hack_li.appendTo("#hackcal");
          
       if (hackday.status != 'happening') {
            hack_li.addClass('hide');
            };
 		});
 		 		
 		         
      };
      
</script>