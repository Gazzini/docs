---
date: "2020-02-19T21:46:48-06:00"
---

# Prediction: Apple and PWAsPrediction: Apple and PWAs

// Feb 2022

## tl;dr

I predict that Apple will implement some awful certification process for PWAs, and that they'll release a React competitor that compiles SwiftUI -> WebAssembly.

## What is a PWA, and why does Apple care?

Progressive Web Applications are just websites with extra permissions, so they feel slightly more like a native app. These extras are not exactly revolutionary:

- improved caching for offline functionality
- streamlined "install" UX for bookmarking a site on your phone's home screen
- slightly broader system permissions

To understand why Apple might care, let's first look at their competitor.

## Why does Google care?

Google is pushing progressive web applications very hard, claiming they make the web more reliable, fast, and engaging. This is provably true in the short-term, but Google has a history of improving the web, in this specific way, with eyebrow-raising side effects. For instance, AMP pages are more reliable, fast, and engaging... but they also require that Google hosts & serves all of the content, giving them even tighter control over the supply-chain of the internet.

But wait! In this case, isn't Google actually ceding control _away_ from its own Google Play Store? Yes, but it's hardly a walled-garden anyways, as Google does reviews retroactively, only after receiving complaints. This means that it's effectively the wild-west of software, especially when compared with its biggest competitor: Apple's App Store.

Google has lost the quality war for app store content, so they want to make app stores less relevant. This makes sense... but why is Apple cooperating?

## Why does Apple care?

^^ no pun intended :)

Hardware sales drive a lot of revenue for Apple. One large value-proposition of their phones and computers is the number of high-quality native apps. This software is heavily optimized for Apple's custom hardware (with relatively few virtulization layers) and painstakingly reviewed by an army of humans at Apple. It seems strange that they would update WebKit (the engine that powers their Safari browser) to support developers moving out of native apps and onto websites.

So what gives? Is this a truly a pure-play for enhancing the customer experience and pushing the web forward? Maybe.

Is there no "plan", and does Apple simply want its devices to support the latest industry-standards? Maybe.

Or... if I reach for my tin-foil hat... is Apple actually being strategic about relinquishing its 30% payment-processing fees for all things app-store?

## Apple != Google

Apple is different. Where Google announces bold new initiatives a decade before release, Apple works in secret for years and only unveils widgets close to launch. As a company, I believe that Apple is capable of far more top-down planning than Google, due to its enhanced bureaucracy and vertically-integrated product lines (that require _relatively_ less buy-in from partner companies).

Apple has updated WebKit to support _some_ of the PWA capabilities, and the rest are simply on the roadmap for future improvement. Notably, the blockers appear to be the features with UX implications (install-prompts), while the most challenging technical bits are already shipped to production (service-workers).

Why the delay? I suspect that Apple is planning something... and if I were them, it would be:

1) A new frontend web-framework that is written in SwiftUI and compiled to WebAssembly, with tons of frivolous optimizations that only really work on Apple hardware.

2) Some awful way to limit the install-prompts to PWAs that have been reviewed by Apple, just like native apps in their store.

I think that #1 would actually be a good thing. It's hilarious that javascript is so foundational to the web, and language competition is good. Number 2 would be unfortunate, but not really any worse than the world we have today.

Of course, I might be wrong -- this is all just wild speculation... but it's fun to speculate!
