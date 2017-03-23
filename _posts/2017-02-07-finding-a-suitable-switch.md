---
title: Finding a suitable switch
category: switchy
---
Stay late at the office. Pick up all switches you can find on people's 
desks. Pop the boxes open. Google stalk the biggest, centermost chip. 
Put things back like nothing happened.

I found three different Cisco 100 series dumb switches. Nothing fancy here. 
Nice metal enclosure though. The lid is held on by a single Philips screw 
and removing it doesn't even void the warranty. That's lucky.

Player1 is an SF100D-08 with a Realtek RTL8309E inside. I have a bit of
history with this one. I had to do some VLAN magic with an RTL8309SC but
that's the most advanced it could do. No octet counting thingies here.
Version E might be smarter but if it had any publicly available 
documentation, I would have probably came across it.

Player2 is a Marvell 88E6070 powered SF100D-05. There's no info on this
guy. 88E6060 has a pretty detailed datasheet available and it has frame 
counters. Not exactly what I'm looking for but it's promising and nothing
tells me this doesn't have any of those fancier counters.

Player3 is an SF110D-05 with an RTL8305NB. Wow. This chip is tiny. And
it has a datasheet. And the datasheet mentions _MIB counters_. And that's
what I'm here for. Then I realize this is just a functional description
and there's no word on programming this one. Bummer.

Marvell's documentation is pretty convincing so I think I'll go for that 
one. I belive the RTL8305NB is doable, and I have absolutely no idea 
about the RTL8309E. Yupp, 88E6070, here we go.
