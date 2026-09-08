# Setting up CI/CD for a personal website.

I've wanted to make myself a little website for a long time now, and I put this 
together in about a days worth of work.

So I had some requirements for it:
- Be simple
- Be easy to maintain
- Have some kind of blog system.

Given those things, I wanted:
- All the content to be part of the codebase (no [CMS](https://en.wikipedia.org/wiki/Content_management_system))
- As little work as possible every time I want to update it (employ CI/CD)

It might have been easier to host a Wordpress/Drupal site, possibly even cheaper
to use a website builder service. But as a programmer I enjoy control over every
bit of software I use.

So, I installed Jenkins on my server, built the website into a docker container,
and set up the pipeline for automating building / deploying.

And this is the result, simple and with lots of room for future improvements.

There is no database, but I might add one in the future for comments, because right now I'm 
writing to everyone and not giving anyone a chance to reply. I honestly feel a little silly.
But I'm primarily doing this to practice getting my thought process onto paper, so to speak, 
and I think it's good to keep some kind of record/diary type thing anyway.

If you arrived to my wonderful new website looking for a tutorial on setting up CI/CD, I'm afraid
I'm not going to write one yet.
