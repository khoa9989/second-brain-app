# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.

### Self-Improvement Files

- `.learnings/LEARNINGS.md` → corrections, insights, better approaches
- `.learnings/ERRORS.md` → command failures and integration errors
- `.learnings/FEATURE_REQUESTS.md` → requested capabilities

Use these as append-only logs, then promote durable patterns into `AGENTS.md`, `SOUL.md`, `MEMORY.md`, or this file when they repeat.

For second-brain behavior, review recent entries and extract only the durable parts: preferences, decisions, recurring tasks, and stable tool gotchas.

## Related

- [Agent workspace](/concepts/agent-workspace)
