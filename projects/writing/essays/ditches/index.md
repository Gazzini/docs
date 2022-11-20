---
date: "2019-12-28T23:55:31-06:00"
---

# Ditches

This decade, I’ve spent 20,000+ hours coding apps for 16 different clients & employers. I've learned a lot, but that knowledge is restricted to me & a few others. That sucks, and I think it's why so many great developers decide to build open-source software.

I cringe just thinking about the number of developers spinning our wheels on THE SAME PROBLEMS. Hundreds of people around the world will surely encounter the same issues in the future (not to mention the ones _before_ me). Holistically, this system is wildly inefficient. I mean, sure, we're all making money, and our employers are all building a moat of IP (supposedly). Proprietary software is _locally_ optimal in that way. But knowledge-workers everywhere are digging the same intellectual ditches between the smoothly-paved roads of a few software giants.

For most of the specific problems that developers have, many others have already encountered it, solved it, documented it, and up-voted it on StackOverflow. We’re all doing the same dance to work around the same imperfect or unintuitive tools, nearly simultaneously.

On a small scale, open-source software allows us to stand on the shoulders of our peers before us. I can spend minutes incorporating someone else’s solution instead of hours stringing together my own, based on the same documentation & StackOverflow questions. There are many libraries like this, where a neighborly developer will create an abstraction layer that provides a more succinct, intuitive way to interact with a wonky underlying system. The next few developers will spend time vetting & improving this abstraction layer, and eventually later developers can just use the library with confidence.

On a larger scale, many of these problems wouldn’t require 3rd-party abstractions if the underlying platforms were open-source. So many issues boil down to something like “Your image file is fine, but Xcode is unintuitive, so make sure you enable "render always original" or it will tint the colors if it happens to appear in a UITabBar”. If Xcode was open-source, then any of the 1,000s of developers that encountered this issue could have CHANGED XCODE. Open-source software forces these shortcomings into the light and allows communities of developers to improve, fork, or at least constructively criticize the project. Instead, Apple only has to keep Xcode tolerable enough so that developers don’t stop making iPhone apps (but given the distribution provided by the app-store, developers will tolerate quite a lot).

I think this trend holds for backend development as well -- for instance, developers are spending more & more time working around the same integration quirks between various AWS services, and they can't _really_ solve the problem because they're all black-boxes.

Zooming further out, this trend is causing companies to all build the same products (with the same flaws). As more common challenges are commoditized by proprietary software vendors, product teams stop asking “How should we build a payment-processing system?” and start asking “Which of these 3 payment providers should we use?”. This is good because it lowers the barrier to accepting online payment. However, it also creates a path-of-least-resistance for EVERYBODY to use the same black-box abstractions. So, if your company wants to do payment-processing, and there are 5 requirements, but the off-the-shelf vendors only support 4 of them, you won’t build your own payment-processing system for 1 extra feature — you'll just accept the tradeoff & forget about that 1 silly requirement that you don’t really _need_.

This is what’s inherently dangerous about building products by stringing together vendor solutions. I’ve walked several founders through dozens of these decisions, and it feels like death-by-a-thousand-cuts over the course of product-development. Supposedly, the “user experience” of the final app will be unique & superior… but, in reality, it’s a thin layer of glue holding together the same commodity solutions as everyone else.

I’ve spent the last decade of my career honing a very specific craft, assuming that my full-stack dev skills & passion for UX will give my projects an edge. However, I now think that a “unique” UX is less important as best-practices are becoming increasingly solidified & the implementation increasingly commodified. There is still plenty of room for future innovation, it’s just not in finding a clever way to present the same commodity features.

Anyways, I think that open-source work will eventually give me a better sense of purpose, but I want to be more financially independent before I focus on it. So, I’m delaying fully open-source work until after my inevitable future success, and building more proprietary software in the mean-time… Although, perhaps it’s possible to build a hybrid product that lets people fork & improve ideas while being financially sustainable for me.
