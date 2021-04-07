import React, { Component } from "react";

class Blog extends Component {
  render() {
    return (
      <div className="blogContainer">
        <h1>Blog #1 - Apr 7 2021</h1>
        <p>
          Not sure why I wanted to do this. I suppose I see other people making
          blogs about what they work on and it's entertaining to some people.
          Maybe someone will think this is entertaining someday.
        </p>
        <p>Probably not.</p>
        <p>
          I'm messing around with starting kindlygiant.com and I don't know what
          I want to use that for. So I thought, might as well start with a blog.
          Next thought in that process was, obviously, what colors do I want the
          blog to have? I thought of blues, teals, nice woody browns and dark
          greys. So I thought I'd write those down.
        </p>
        <div>
            <ul>
                <li>13262F - Antique Bronze - For highlights</li>
                <li>583e23 - Cafe Noir - For lowlights</li>
                <li>73683b - Gunmetal - for backgrounds</li>
                <li>547b8c - Teal Blue - for midlights</li>
            </ul>    
        </div>
        <p>
          As you can see I have no idea what I'm doing. I've googled some basics
          and the first step was "find something you like". Well the whole
          reason I've started this was because I saw this guy's website:
          https://androidarts.com/ and thought "That's rad. I want to build some
          of his stuff." So I guess i'll look at some of his stuff to see what
          he's got going on.
        </p>
        <p>
          I love the retrofuturism look he does. Reminds me of Tales from the
          Loop which I love the art from and was kind of sad I gave that book
          away for a secret santa instead of keeping it for myself. He uses a
          lot of beige and wood colors. Greys and whites. I should probably
          throw in a light color.
        </p>
        <p>cad6dc - Light Grey - For text and stuff</p>
        <p>
          Holy crap I forgot I have the night light on and just seared my
          retinas looking at the screen. But hey, the palette doesn't look too
          shabby. At least for now. I'm sure once someone else looks at it
          they'll be like "...Why?" But who cares? This is mine for the time
          being. It's a credit to my attention span that no sooner had i
          finished picking the colors, I was already on the next thing to catch
          my attention. Mainly which text editor I should be using to write
          this. There's probably something better than nano but I'll deal for
          now.
        </p>
        <p>
          Oh shoot. Amazon made a TV series about Tales from the Loop. I wonder
          if it's any good.
        </p>
        <p>
          I'll try making something with those colors. It might be garbage. It
          might not. Who knows.{" "}
        </p>
        <p>
          Before I do I think I'll set up the website first. I've already got a
          few running on the raspberry pi. I wonder if docker works with
          raspberry pis. Apparently it works. Might as well write a Dockerfile
          for it. I've been working with my friend Luis to try and understand
          how docker works. This will be good practice.
        </p>
        <p>FROM ubuntu:latest AS build</p>
        <p>
          ENV TZ=US RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo
          $TZ > /etc/timezone
        </p>
        <p>
          RUN apt-get update && \ apt-get install -y git && \ apt-get install -y
          nodejs && \ apt-get install -y npm
        </p>
        <p>
          RUN git clone https://github.com/kindlygiant/kindlygiant.git WORKDIR
          /kindlygiant RUN npm install RUN npm run build
        </p>
        <p>
          FROM httpd:2.4 COPY --from=build /kindlygiant/build/
          /usr/local/apache2/htdocs/
        </p>
        <p>TODO Got to make a kindlygiant repo on github.</p>
        <p>
          I wonder if I could get Kubernetes to work with my raspberry pi. I'll
          have to ask Luis about that. Okay the Dockerfile is made, it's not
          going to build anything but it's there. Next question, do I REALLY
          want to make this website React as well? I mean I could I just feel
          like it's a pain. But I suppose it's better than writing static HTML
          pages and linking them together right? We'll do React. Ugh fine. I
          have to look up how to start that up. Probably some node nonsense.
        </p>
        <p>npx create-react-app my-app cd my-app npm start</p>
        <p>
          Yep. Although I did make the mistake of making the kindlygiant
          directory before running this. Oops. Nested directories. I had to
          rename the existing folder and re run the commands.
        </p>
        <p> npm start Starts the development server.</p>
        <p> npm run build Bundles the app into static files for production.</p>
        <p> npm test Starts the test runner.</p>
        <p>
          {" "}
          npm run eject Removes this tool and copies build dependencies,
          configuration files and scripts into the app directory. If you do
          this, you can’t go back!
        </p>
        <p>
          Just gonna add these commands in here because I'm a big dummy who
          can't remember things. Oops, gotta add sass:
        </p>
        <p>npm install node-sass</p>
        <p>
          Yee haw. Now we're cooking with gas. I'll just move over the blog
          folder and Dockerfile then commit this locally for now. Luckily git is
          something I decently know how to use. The default color for the
          background of the react site isn't bad. I downloaded a color picker
          tool called Gpick to see what it is.
        </p>
        <p>20232A - Raisin Black </p>
        <p>
          Not Bad. I can work with this palette. Maybe I'll get Mymi to give her
          opinion.
        </p>
        <p>
          Gonna set something real simple up. Just two pages. Homepage and one
          blog page. Right now this will be the only entry. To do that we need
          to link to a new page and we need
        </p>
        <p>npm install react-router-dom</p>
        <p>
          Make sure we have some routes inside a router and some pages to visit
          and we're done. Not pretty but it will work. The challenge is getting
          this blog post to show. I'll work on that later I am much too tired at
          the moment to try.
        </p>
      </div>
    );
  }
}

export default Blog;
