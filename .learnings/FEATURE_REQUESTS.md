# Feature Requests

Capabilities requested by the user.

---

## [FEAT-20260620-001] self-improving-agent-continuous-use

**Logged**: 2026-06-20T06:11:00+07:00
**Priority**: medium
**Status**: pending
**Area**: docs

### Requested Capability
Automatically keep learning from corrections, errors, and better approaches so the assistant becomes more useful over time.

### User Context
The user explicitly wants the self-improvement skill installed and used so the assistant can improve every day.

### Complexity Estimate
medium

### Suggested Implementation
Append learnings and errors to `.learnings/*.md`, then promote recurring or broadly useful items into `MEMORY.md`, `AGENTS.md`, `TOOLS.md`, or `SOUL.md` as appropriate.

### Metadata
- Frequency: recurring
- Related Features: self-improving-agent

---
