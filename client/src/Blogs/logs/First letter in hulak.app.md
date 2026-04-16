---
pubDate: 2026-04-17
updatedDate:
title: First letter in hulak.app
description: The first ever letter sent out on hulak.app was a success with a bit of turbulence but was a lovely experience.
tags:
  - personal
  - projects
  - time-pass
  - maker-space
draft: false
heroImage: ./images/first_hulak_letter.png
slug: ""
---
# First Letter  

So as mentioned in the previous blog post about [[Building Hulak]], this whole thing has been a ride of questionable decisions, late-night fixes, and moments where everything somehow works for no reason at all.

This is the first actual letter that went through Hulak. The point where the project stops being a collection of components and starts doing the one thing it was supposed to do from the beginning: send something.

Which feels surprisingly powerful for something that mostly started as “let’s just see if I can build this.”

And also slightly suspicious, because things are not supposed to work this early.

---

## The first published letter  

This was the content of the very first letter sent through the system:

> “Well this is a really stupid project I've been working on :)  
>
> To be somewhat honest this has taken me **_some time_**, I started this from like the 15th December of 2025 and currently it's 16th April of 2026 so you can count down the months yourself :|  
>
> Being completely honest with you this project still has a lot of polishing to do but it is in a state that the basic promise of this "app" is fulfilled.”

If you ignore the sarcasm, the emotional exhaustion, and the subtle disbelief in the timeline, what it actually says is simple: the thing runs.

Kind of. In a way that makes you not touch it too aggressively in case it stops.

You can view the letter here if you want to see it in its natural environment:

👉 https://hulak.app/open/appalling-crude-insect

Yes, the slug is still absurd. It reads like a randomly generated insult. It was not an accident, but also not fully thought through either.

---

## The envelope situation  

One of the most unexpectedly time-consuming parts of this project was something as basic as envelopes.

Which sounds like it should be trivial. A rectangle. Maybe some borders. Done.

Instead it turned into a long-running argument with CSS about spacing, alignment, responsiveness, and what “centered” actually means.

The goal was simple: make digital mail feel a bit like physical mail.

What actually happened sometimes looked closer to:

- slightly off-center paper  
- borders behaving like they were being haunted  
- fonts shifting when nobody asked them to  
- layouts breaking only when someone is watching  

Still, a few versions survived the process.

![First Hulak Letter Envelope](./images/first_hulak_letter.png)

And another one that somehow behaves differently depending on the phase of the moon:

![Second Hulak Envelope](./images/hulak_second_envelope.png)

They look calm in screenshots. In reality, there were moments where resizing the browser felt like triggering hidden traps.

---

## The Docker side quest  

Everything was relatively stable until Docker entered the workflow.

At first it felt like a reasonable step. Package the app. Make it portable. Be responsible.

Then reality responded with:

- builds that worked locally but refused to work anywhere else  
- file paths that suddenly developed opinions  
- permissions that appeared out of nowhere  
- logs that looked like ancient warnings instead of errors  
- and silence where explanations should have been  

Running locally was fine. Running inside Docker felt like negotiating with a system that had already decided it was not interested in cooperation.

At some point, debugging stopped being debugging and turned into trying random fixes until something gave up first.

Eventually it worked.

Not because everything was fully understood, but because enough attempts stacked together that the system stopped resisting.

So that part is done. Somehow.

---

## Why this letter matters  

This letter represents the moment where Hulak stops being theoretical.

It now actually:

- takes a message  
- processes it  
- wraps it inside an envelope system  
- stores it in a way that can be retrieved later  
- and displays it without falling apart  

Each of those steps sounds small in isolation. Together they form the part where things usually start breaking.

Which is exactly why this moment matters.

It marks the transition from “this is an idea that might work” to “this is a system that actually does something, even if slightly unpredictably.”

Still rough. Still early. Still fragile in places that haven’t been stress tested properly.

But functioning.

---

## The bigger picture  

Hulak continues to be a simple idea at its core.

A place to send messages that feel a bit more intentional than instant chat messages that disappear into noise.

Not emails. Not notifications. Not the usual fast, disposable communication.

Something slower. Something that feels slightly more deliberate. Something that looks like it took more effort than it actually did.

And along the way, it also became an excuse to explore and struggle through things like:

- **[Astro.js](https://astro.build/)** and how it behaves in real projects  
- building UI that survives actual use instead of just screenshots  
- containerization without slowly losing patience  
- and generally learning by breaking things and fixing them again  

---

## What this experiment taught me  

A few things became obvious through the process:

- Projects never stay small once you start caring about them  
- CSS will behave correctly until you need it to behave correctly again  
- Docker can turn simple setups into personality tests  
- “quick feature” is one of the most misleading phrases in development  
- anything that survives end-to-end deserves more credit than it gets  

There is also something different about seeing a project actually complete a full loop.

Input → processing → output → retrieval.

Even when it’s messy.

Even when half of it was held together by trial and error.

---

## Final thoughts  

The first letter does not matter because of what it says.

It matters because it exists in a working system that took enough effort, confusion, and iteration to become real.

Hulak is no longer just code sitting in a repo waiting for attention.

It now does the thing it was supposed to do.

Everything around it is still evolving, still slightly unstable, still open to improvement.

But at this point, it is no longer just an idea.

It runs.

And that alone is enough for now.