---
layout: post
title: OpenNews Hack Days
section: hackdays
---
<img src="/media/img/hackdays.jpg" class="topline">
<p class="caption">Heads-down at the 2013 Hack Jersey Hack Day (photo/deb)</p>

<p class="bodybig">Communities around the world organize hack days to bring together coders and journalists to learn from each other and tackle problems. OpenNews offers financial and planning support to local organizers, and <a href="https://sendto.mozilla.org/page/s/knight-mozilla-news-hack-day">we'd love to help with your event</a>.</p>

<div id="hackcalbox">
    <h3>Upcoming OpenNews Hack Days</h3>
    <table id="hackcal">
    </table>
    </div>
We’re partnering with organizations to support the journalism code communities that are growing in cities across the globe. Attend one of the hack days in the list above, or find out how to host your own below.

<h3>We Want to Hack with You</h3>

We want to support the journalism code community, and one way we’re doing it is by giving small grants to organizations, universities, newsrooms, and even individuals, to host journalism-themed hack days.

Maybe you’ve already got something in the works, but you want to have a two-day hackfest instead of one. Maybe you’ve got everything lined up, but you want to offer travel grants to your event. Maybe you need help getting organized. Maybe you want to bring us in to do something from scratch. There are any number of variations on how this can work—the key element is that it brings awesome hacking into the community.

Because we understand that there are a lot of different ways to do something like this, we’ve designed this to be as open a sponsorship process as possible. Here’s what we’re looking for:

* We want to get more developers building around journalistic problemsets, so there needs to be a journalistic frame to your hack day. That doesn’t mean “hack the news”—a frame that’s far too generic—it means “build geolocational tools for information gathering.”
* We want to hear about the projects created at your event and to learn how this event helped your community.
* We’d like you to keep track of how many people were there, and have a way of getting back in touch with them.
* We’re dying to hear what happened, so we’ll want a blog post that documents the day and links to the code that was made. We’d love for you to join us on the <a href="https://wiki.mozilla.org/OpenNews/Calls">OpenNews community call</a> to talk about the day.
* And, obviously, we get our name listed as a sponsor.

That’s not much. In fact, it’s designed to be as straightforward as possible: you want to hack, we want to help.

We're also working on some <a href="https://github.com/erikao/journohackdays">documentation</a> to help you in planning, organizing, and facilitating hack day events. Your questions and feedback are a critical part of making the documentation more useful for everyone. 

<a href="https://sendto.mozilla.org/page/s/knight-mozilla-news-hack-day">We’ve set up a form so you can let us know what you’re thinking and we can talk about how we can most effectively help</a>. So let's do this. 

<h3>Join in the hacking</h3>

If you're looking to get more involved in the journalism code community, participating in a hack day is one of the best ways to get connected. At hack days, you learn from people who, like you, have a ton of amazing skills, meet new collaborators, and get to spend time working on interesting problems. 

Keep an eye on the schedule above for OpenNews-sponsored hack days, and keep up with Source for a <a href="http://source.mozillaopennews.org/en-US/articles/tags/events/">weekly listing</a> of hack days and other community events. <a href="mailto:opennews@mozillafoundation.org">Get in touch</a> if you know of an event that isn't listed or if you want to tell us about an event you attended.

<script type="text/javascript" src="media/js/tabletop.js"></script>

<script type="text/javascript">
    
      //window.onload = function() { init() };

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
