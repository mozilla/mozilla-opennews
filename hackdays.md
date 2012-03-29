---
layout: post
title: Writing Code with OpenNews
section: hackdays
---

<p class="bodybig">OpenNews is sponsoring more than a dozen hack days around the world to write code that helps to solve real-world journalistic problems. From Africa to the Americas, we're looking for partners to hack the news with us. If you want to host a hack day or a developer who wants to attend one, <a href="https://donate.mozilla.org/page/s/knight-mozilla-news-hack-day">we want to hear from you.</a></p>

<div id="hackcalbox">
    <h3>Upcoming OpenNews Hack Days</h3>
    <table id="hackcal">
    </table>
    </div>
We're partnering with organizations across the globe to help enable making awesome code. Attend one of the hack days in the list above, or find out how to host your own below.

<h3>We Want to Hack with You</h3>
We want to grow the journalism code community this year, and one way we're doing it is by giving small grants to organizations, universities, newsrooms, and even individuals, to host journalism-themed hack days.

Because we understand that there are a lot of different ways to do something like this--from heads-down hacking to workshops and breakouts and beyond--we've designed this to be as open a system as possible. Here's what we're looking for:
    
* We want to get more developers building around journalistic problemsets, so there needs to be a journalistic frame to your hackday. That doesn’t mean “hack the news”—a frame that’s far too generic—it means “build geolocational tools for information gathering.”
* We want tangible outcomes—things should come out of this that can be shared, distributed, forked, and maybe even launched.
* We’d like you to keep track of how many people were there, and have a way of getting back in touch with them.
* We’re dying to hear what happened, so we’ll want a blog post that documents the day and links to the code that was made. We’d love for you to join us on the Mozilla Webmaker community call as well to talk about the day.
* And, obviously, we get to get our name in as a sponsor.

That’s not much. In fact, it’s designed to be as straightforward as possible: you want to hack, we want to help.

Maybe you’ve already got something in the works, but you want to have a two-day hackfest instead of one. Maybe you’ve got everything lined up, but you want to offer travel grants to your event. Maybe you need help getting organized. Maybe you want to bring us in to do something from scratch. There are any number of variations on how this can work—the key element is that it brings awesome hacking into the community.

<a href="https://donate.mozilla.org/page/s/knight-mozilla-news-hack-day">We’ve set up a form so you can let us know what you’re thinking and we can talk about how we can most effectively help</a>. So let's do this. 


<script type="text/javascript" src="media/js/tabletop.js"></script>

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
