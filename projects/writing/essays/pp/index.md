---
date: "2020-09-27T20:41:20-05:00"
---

# Pure Programming

Sometimes, I feel more like a discount-attorney than a software engineer. The utopian vision of a world where anyone with a computer can create a business from scratch is certainly real, but there are _some_ barriers to entry besides writing the code. This is perfectly fine, but it doesn't align with the career I expected -- I'm not "a programmer," but rather "a problem-solver who often programs."

A few years ago, I specialized in Objective-C iOS app development. I worked for a few agencies at first, but after my side-project got acquired, I had the financial cushion to become a freelance app developer for some early-stage startups in the DC area. I used to joke, back then, that I was a professional App Store rules explainer, because in every role, I was constantly explaining to peers, managers, and clients why we couldn't build X because it violated Apple's terms & conditions. I just wanted to build what our users wanted, but instead we debated endlessly about what Apple might allow. Even then, we'd still occasionally be punished by a frivolous rejection, moving us to the back of the app-review line.

But Apple isn't the villain here -- this is a large industry trend. The entire internet is increasingly burdened by various governments, corporations, and everything in-between. Users can already feel the pain to some extent -- every time we dismiss another GDPR pop-up or navigate to Amazon's website (not their iOS app) to buy a Kindle book, we can feel hints of bureaucracy adding arbitrary hurdles to our technology. But as a developer... that's where it hurts.

In-app purchases. Email verification w/ various "unsubscribe" options. Sign-in with X. [DUNS](https://developer.apple.com/support/D-U-N-S/) numbers. Applying for AWS Service Limit increases to send any emails. These "table-stakes" features are a real drag on productivity because... well, because they're no fun to develop! It's energizing to solve real problems, and draining to solve fake problems. Early in my career, I was less picky -- the arbitrary app-store rules were the only reality I had ever known, so I built all kinds of solutions that elegantly pushed the constraints to their bleeding edge... but then the underlying frameworks shifted, the rules changed, and my work was suddenly obsolete.

The joy of creation that comes from building _anything_ is co-dependent on overcoming challenges. However, now that I've been burned by arbitrary rule-changes a few times, I recognize solutions layered with workarounds to artificial constraints for the fickle systems they are. I'm increasingly sensitive to this -- I even experience a slightly hopeless, spinning-my-wheels feeling when explaining the implementation details of cookies & local storage to other developers.

The good news is, nobody is stopping us from building whatever we want. The pure, for-the-joy-of-it engineers are safe, and these constraints only exist when you want to make money, or to build on enormous black-box abstractions (like web browsers or smartphone SDKs). Even then, it's not like these constraints are unsolvable. We have options!

1) Build a custom solution. This is possible, but it's no fun, which means we'll build it slowly & suffer an outsized productivity hit.

2) Buy it from a vendor. Even if it's cheap, it still introduces 3rd-party systems & black-box abstractions into critical pieces of your software. It sometimes means that your user's data is being sent all over the internet, and it can still have a big drag on your productivity. There's some death-by-a-thousand-cuts phenomenon that happens when you want to implement feature "X", but every time you're about get into flow & write code, you have to go read 3rd-party documentation for yet another dependency.

3) Live without the regulated feature. This basically never happens at real companies, but I've been exploring it more in my personal side-projects. This is strategically difficult for typical tech-startups (the kind that want to be "unicorns"), because things like user-accounts and private data are minimum-requirements to answer VC-101 questions, like "How does this widget become a monopoly?" We're now at a later stage of this monopoly game, where a few companies have correctly answered that question.

I think we're approaching the [end-of-the-beginning](https://stratechery.com/2020/the-end-of-the-beginning/), where the tech giants are as entrenched as car companies; their disruption will no longer be the norm, but the exception. The infrastructure around cars actually makes it _harder_ to implement a fundamental improvement to transport, not easier. There are all kinds of tiny companies building car accessories, but how many car-companies get funded each year? I can only think of 1 in my lifetime.

In the same way, most new tech companies tend to work in the small, forgotten crevices of the big tech players rather than competing against them. Most startups build products using Google or Apple SDKs (for smartphone apps), host their entire infrastructure in Amazon or Microsoft or Google data centers, and advertise through Facebook & Google. I've seen more startups building SalesForce add-on widgets than new CRMs. Even duck-duck-go didn't actually build a search engine -- they rely on Microsoft's Bing API for the search results.

This gradual centralization & regulation has been happening for several years, and it's a double-edged sword. It's bad for attracting a particular personality of programmer to certain types of companies, but some rules are necessary as the software industry matures & becomes more influential in the lives of billions of people. It's also a small price to pay in exchange for access to the best product-distribution network ever... However, it's still important to articulate this changing reality, if only to inform prospective engineers.

Many young developers are unhappy in their high-paying software jobs, often because of unrealistic expectations. Universities don't enroll prospective CS students by promising a career focused on explaining technical constraints to non-technical stakeholders -- that sounds more like how a doctor works with patients, or an attorney works with clients & juries.

Many of my programmer-friends feel as if they're somehow in the wrong job, and they have an intentional aversion to developing certain soft-skills, as if it will put them on the wrong path, leading more towards BS & further away from real engineering. This fear is actually based in truth, but it's exaggerated. Specialization is rewarded, but so is well-roundedness, or the combination of multiple skills. For the record, I vastly prefer a society of well-balanced citizens.

I love the job market, capitalism, America, all of it -- but I also think there is room for improvement, and this area is worth discussing. It saddens me when salespeople are _proudly_ ignorant of the technical details, or when some engineers opt-out of the social fabric of their community. I think the root issue is that we call them "salespeople" or "engineers", and they're just living up to the expectations attached to those labels.

People mostly think in terms of "How can I sell my labor?" This causes an oversimplification of skillsets to fit into certain categories that employers expect, and tragically, people get used to defining themselves by these narrow categories & and the traits associated with them. You can work as a programmer, or a plumber, or whatever... but that's just a job, not an identity.

> But I have to warn you that this is the word--'politics'--that nerds use whenever they feel impatient about the human realities of an organization.

- Neal Stephenson, Seveneves
