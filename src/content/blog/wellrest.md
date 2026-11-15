---
title: "WellRest: a rest timer that gets me off my phone"
description: "Why I built an automatic rest timer for WHOOP strength workouts, how it gets better between sets, and why its real job is to send me back to the bar."
pubDate: 2026-11-15
---

![WellRest: automatic-start setup and the rest dial](/projects/wellrest.webp)

I train with a WHOOP strap and its Strength Trainer. It knows which exercise I'm on and when a set ends. What it doesn't do is tell me when my rest is over, and the WHOOP app can't be changed.

So every rest went the same way. Rack the weight, pick up the phone, open a timer, and then I'm in my messages or my feed. Ninety seconds turn into four. The phone was the thing I needed for the timer, and also the thing that stretched every rest.

## What it does

[WellRest](https://github.com/Goudurixx/wellrest) sits next to WHOOP. It reads WHOOP's workout notification, and the moment a set ends it starts the countdown on its own. No tap. When the rest is over it rings once, even with the phone on silent, and buzzes twice. If I start the next set early, it cancels itself.

The rest length is set once on a crown-style dial, from 15 seconds to 10 minutes, with presets for the usual 30 s to 2 min. Then I don't touch it again for the whole session.

There's no account, no analytics, and no internet permission. It stays on the phone.

## Why I built it

I wanted the timer to be something I never have to look at. That's the point. An app that needs my attention between sets is an app that wins the fight for my attention between sets. One that starts by itself and calls me back with a single ring lets the phone stay in the bag.

It's also the kind of project I like: a small, sharp problem I hit every week, a closed app I can't modify, and a way in that isn't obvious. Here the way in is Android's notification listener, reading only the text WHOOP actually shows on screen.

## The gym is the test bench

The first version came out on 9 November. The next big batch came five days later, and almost every change in it came from a real session:

- **The listener sometimes dropped.** Android had stopped it in the background, so it now reconnects itself.
- **I didn't hear the end of a rest with headphones on.** The chime now plays in the headphones too, even on vibrate.
- **Adjusting the rest mid-workout was fiddly.** That gave the crown dial with haptics, START/STOP, and a knob that no longer jumps across the minute mark.

Each problem showed up under a barbell, not at a desk. I'd notice it, keep training, and fix it at home that evening, with the next session as the check.

## Not tweaking it in the gym

The trap with a side project you carry into the gym is turning your workout into a debugging session. I fell into it once or twice early on: watching the listener log between sets instead of resting.

What helps is that the app is built to disappear. Once the dial is set, there's nothing to tap, so there's nothing to tinker with. A problem in the gym becomes a one-line note, and the fixing waits for later.

That ring at the end of a rest has become the moment I put the phone down and go back to the bar. That's the job I wanted from it.

## What's next

- A Google Play release.
- An iOS version with a one-tap start and a Live Activity, already planned in the repo.

The Android app, the code and the release notes are on [GitHub](https://github.com/Goudurixx/wellrest).
