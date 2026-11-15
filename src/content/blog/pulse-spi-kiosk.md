---
title: "A fluid orb on a 3.5″ SPI screen"
description: "Building Pulse, a Raspberry Pi 5 kiosk: why Chromium crawled at 2 fps on a cheap SPI panel, and the five fixes that made the animation smooth."
pubDate: 2026-11-14
---

Pulse is a small kiosk on my desk: a Raspberry Pi 5 driving a 3.5″ touchscreen. It shows the health of the machines and services I run as a breathing particle orb, and opens a chat with a local model on tap. You can [play with a simulated version](/#pulse) on the home page.

The page itself is one HTML file with a canvas. Getting it to animate smoothly on this panel took a day of finding out what an SPI screen does differently from HDMI.

## The panel

It's a common 480×320 board with an ILI9486 controller and a resistive touch layer, wired to the Pi over SPI. Two early lessons:

- The vendor's install script targets old Raspbian with the fbtft framebuffer driver. On current Pi OS the right path is the DRM `piscreen` overlay, which also brings the touch input.
- A generic MIPI-DBI overlay gives a scrambled picture: this controller wants 16-bit padded SPI words.

The panel also shows red and blue swapped. A full-page SVG colour filter fixed the colours, and made performance far worse (more on that below).

## Why it ran at 2 fps

An HDMI display tells the system when it's ready for the next frame, through vertical blanking. This SPI panel has no such signal. Chromium paces its rendering on those frame callbacks, never gets them, and falls back to a crawl of about two frames per second. `requestAnimationFrame` effectively stalls.

## The fixes, in order

1. **Animate on a timer, not on `requestAnimationFrame`.** The orb loop schedules itself with `setTimeout`, so it runs whether or not the display reports frames.
2. **Stop Chromium from throttling the kiosk.** Running it with `--disable-gpu-vsync --disable-frame-rate-limit` removes the pacing. Unpaced, Chromium happily eats two and a half cores, so the kiosk now runs in a systemd scope capped at one core.
3. **No page-wide filter.** The colour-swap filter forced a redraw of the whole screen on every frame, and every redraw is a full transfer over SPI. Swapping red and blue in the stylesheet itself, once at load, gives the same colours for free.
4. **A smaller canvas.** Only the orb's area changes each frame, so the canvas is just big enough for it. Less to redraw, less to send.
5. **The fastest SPI clock that works.** The Pi 5 derives SPI from a 200 MHz clock divided by an even number. Asking for 48 MHz gives a real 33.3 MHz; asking for 50 gives 50 MHz, and this panel garbles the picture. So 33.3 MHz is its ceiling.

With all five, the orb moves smoothly and the Pi stays cool.

## What I'd tell myself at the start

On an SPI display, every pixel you change costs bus time. Think about what you redraw before you think about how fast you draw it. And when a browser animation stalls on unusual hardware, check whether the display is sending frame callbacks at all.
