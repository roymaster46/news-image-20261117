# news-image-20261117

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/roymaster46/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/roymaster46/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

One image that sums up the world's news of **Tuesday, 17 November 2026** — a dense newspaper front page with **43 stories from 6 continents**, all of which happened or were first reported that day:

- **3 illustrated leads** — Ukraine says a Kerch Bridge span fell into the sea; Iran sends drones at a US radar in Bahrain and the US hits back at Qeshm; Ebola in DR Congo tops 11,000 cases.
- **12 illustrated secondaries** — the Quad summit in Manila, the Trump–Xi–Putin meeting set for Thursday, Nvidia's $115.8bn quarter and the Dow's 849-point drop, the US / Mexico / Bolivia measles-free status loss, Gaza's winter aid crisis, Depardieu's guilty plea, Japan scrambling jets, Moldova shutting its airspace, Serbia's student-led majority, Mongolia's president resigning, Bangladesh's garment strike, and the An-12 crash in Siberia.
- **A pinned world map** (stories 1–15) and **"Also on Tuesday 17 November"** — 28 more stories, from the 1,441 drones Russia says it downed to Voyager 1 nearing one light-day from Earth.

The image (`entry.png`, 1024×1024, drawn programmatically with PIL from verified wire reports — Reuters, AP, AFP, BBC, Al Jazeera, WHO, UN, PAHO; contested claims marked as claims) is copied to `/output/entry.png` by `main.ts`, which validates the PNG header (1024×1024) before copying. Round 4 upgraded only the illustrations: gradient skies/seas, multi-tone smoke, explosion bursts, detailed jets/flags/icons, in-scene label chips, and numbered map pins.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=26tnw136&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
