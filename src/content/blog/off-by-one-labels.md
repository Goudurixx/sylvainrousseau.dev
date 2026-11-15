---
title: "The drone was a sports ball: an off-by-one in object detection labels"
description: "Adding a recorded-footage demo mode to an on-device detector surfaced a label bug that had been there since day one."
pubDate: 2026-11-15
---

[Edge Drone Detector](https://github.com/Goudurixx/andronide) is a side project: an Android app that runs a small SSD-MobileNet model on the camera feed and measures how fast a phone can do it. It's a benchmark, not an operational system.

Testing it in the Android emulator was useless. The emulator's virtual camera shows a tidy living room with nothing in the sky. So I added a demo mode.

## Feeding it real footage

In debug builds, the app can take a video file instead of the camera. Frames are pulled from the file about fifteen times a second and go through exactly the same path as camera frames: the same detector, the same box overlay, the same FPS and latency readout. A chip on screen says "DEMO · recorded footage", so a screenshot can never pass for a live camera.

The footage is a public-domain clip from the US Bureau of Land Management, showing quadcopters taking off and flying.

## The drone was a sports ball

The first recording looked great, with a box sitting right on the drone, until I read the labels. The drone was a "sports ball", a "bench" in other frames, and the man flying it was "???".

The model has no drone class, so I expected a near miss like bird or kite. But "???" for a clearly visible person meant something was off in the labels, not in the model.

## One entry off

The COCO label file used with these models starts with a placeholder line, `???`, before `person`. The model's class indices start at 0 for person. So looking up `labels[classId]` returns the entry *before* the right one, for every single detection:

- class 0 (person) read as `???`
- the kite class read as its neighbour in the list, "sports ball"

The fix is one line: `labels[classId + 1]`. With it, the person is "person" at 73–77%, and the drone comes out as "kite" (sometimes "bird") at 50–63%. Those are the closest things COCO knows to a quadcopter.

The bug had been there from the first commit and also affected the live camera path. On the virtual living room nothing ever got detected, so it never showed.

## Takeaway

A demo mode with real data isn't only for screenshots. It's often the first time the whole pipeline runs on the kind of input it was built for, and that's when the quiet bugs show up.
