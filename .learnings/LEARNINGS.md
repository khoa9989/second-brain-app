# Learnings

Corrections, insights, and knowledge gaps captured during development.

**Categories**: correction | insight | knowledge_gap | best_practice

---

## [LRN-20260620-001] best_practice

**Logged**: 2026-06-20T06:11:00+07:00
**Priority**: medium
**Status**: pending
**Area**: docs

### Summary
Self-improvement skill uses `.learnings/` files in the workspace to capture corrections, errors, and feature requests.

### Details
The installed `self-improving-agent` skill expects a workspace-level `.learnings/` directory with `LEARNINGS.md`, `ERRORS.md`, and `FEATURE_REQUESTS.md`. Existing files should never be overwritten; entries should be appended so the agent can accumulate durable lessons over time.

### Suggested Action
Keep using `.learnings/` for future corrections, failures, and requested capabilities, and promote recurring or broadly useful items into `MEMORY.md`, `AGENTS.md`, or `TOOLS.md` when they become broadly useful.

### Metadata
- Source: conversation
- Related Files: /home/openclawtom/.openclaw/skills/self-improving-agent/SKILL.md
- Tags: self-improvement, learnings, workflow

---

## [LRN-20260620-002] best_practice

**Logged**: 2026-06-20T06:22:00+07:00
**Priority**: high
**Status**: pending
**Area**: memory

### Summary
The assistant should act like a second brain by synthesizing daily conversations into durable memory and reusable habits.

### Details
anh Khoa explicitly wants TÔM to proactively summarize daily interactions, self-correct, keep learning, remember useful things, and improve continuously. This is broader than a single task and should guide ongoing behavior.

### Suggested Action
Promote second-brain behavior into workspace guidance, and keep extracting durable facts, preferences, and workflows from daily conversations into memory files.

### Metadata
- Source: user_feedback
- Related Files: /home/openclawtom/.openclaw/workspace/MEMORY.md, /home/openclawtom/.openclaw/workspace/AGENTS.md, /home/openclawtom/.openclaw/workspace/SOUL.md
- Tags: second-brain, memory, self-improvement

---

## [LRN-20260620-003] best_practice

**Logged**: 2026-06-20T06:25:00+07:00
**Priority**: medium
**Status**: pending
**Area**: docs

### Summary
A dedicated SecondBrain operating system document helps formalize how to capture, promote, and reuse durable knowledge.

### Details
The user asked to proceed with the next steps for the second-brain setup. Creating a concise operating guide makes the workflow explicit: what to capture, where to store it, when to promote it, and how to review it.

### Suggested Action
Keep `SECOND_BRAIN.md` as the working protocol and update it when the workflow changes or gets better.

### Metadata
- Source: conversation
- Related Files: /home/openclawtom/.openclaw/workspace/SECOND_BRAIN.md
- Tags: second-brain, workflow, memory

---

## [LRN-20260620-004] best_practice

**Logged**: 2026-06-20T17:59:58+07:00
**Priority**: high
**Status**: pending
**Area**: docs

### Summary
The official core skill for infrastructure dossier review is `self-improving-agent`, and it must operate on evidence only.

### Details
The user approved the skill proposal and asked for proactive adoption into memory so future sessions use it as the default workflow. The skill supports both loose files and full project folders, and the critical behavior is evidence-based thẩm định without guessing.

### Suggested Action
Treat `self-improving-agent` as the default review workflow, and keep reinforcing its rules in memory and operating docs.

### Metadata
- Source: user_feedback
- Related Files: /home/openclawtom/.openclaw/workspace/MEMORY.md, /home/openclawtom/.openclaw/workspace/SECOND_BRAIN.md, /home/openclawtom/.openclaw/skills/self-improving-agent/SKILL.md
- Tags: skill, thẩm định, evidence-only

## [LRN-20260623-001] best_practice

**Logged**: 2026-06-23T15:34:30+07:00
**Priority**: high
**Status**: pending
**Area**: workflow

### Summary
anh Khoa wants OpenClawtom to proactively inspect the system, find errors or gaps, fix what is safe, and surface difficult issues early instead of waiting for explicit instructions.

### Details
This is a standing operating preference for managing the workspace, Vault, skills, memory, and related tooling. The assistant should run checks on its own initiative, preserve user context, and only ask before risky or external actions.

### Suggested Action
Adopt proactive self-audit as the default mode for OpenClawtom, with concise status updates and clear escalation when a fix is blocked or unsafe.

### Metadata
- Source: user_request
- Tags: proactive, self-audit, autonomy, workflow

---

## [LRN-20260703-001] correction

**Logged**: 2026-07-03T18:38:05+07:00
**Priority**: high
**Status**: pending
**Area**: docs

### Summary
Do not answer legal questions from memory when the user explicitly provides a newer controlling legal basis.

### Details
In a legal workflow, if the user states that older citations are obsolete and points to a newer decree/circular, the answer must switch to the newer authority or explicitly say the needed text is unavailable. Do not repeat outdated citations as if they were current.

### Suggested Action
Treat user-specified legal updates as controlling input and verify the latest text before answering. If the exact text cannot be verified, say so and ask for the authoritative document or link instead of inferring.

### Metadata
- Source: user_feedback
- Related Files: /home/openclawtom/.openclaw/workspace/MEMORY.md
- Tags: legal-accuracy, outdated-citation, verification

---

## [LRN-20260705-001] best_practice

**Logged**: 2026-07-05T22:40:00+07:00
**Priority**: high
**Status**: completed
**Area**: interaction

### Summary
When the user sends a direct follow-up or asks for confirmation, the assistant should reply immediately with a short acknowledgment instead of waiting to finish a longer structured response.

### Details
anh Khoa reported that responses can feel delayed and that the assistant sometimes answers in chunks, requiring an extra nudge to complete the reply. For direct operational chats, the safer pattern is:
- acknowledge promptly in one short sentence,
- then continue with the substantive answer,
- avoid leaving the user with an apparently unfinished turn.

### Suggested Action
Use a "fast acknowledge then answer" pattern for direct messages, especially when the user asks whether the assistant has replied or is waiting on a next step.

### Metadata
- Source: user_feedback
- Tags: latency, acknowledgement, direct-response, interaction

---

## [LRN-20260706-001] best_practice

**Logged**: 2026-07-06T10:43:00+07:00
**Priority**: high
**Status**: completed
**Area**: interaction

### Summary
Fast-acknowledge + Batch Response mechanism: approved and implemented as permanent operating standard.

### Details
anh Khoa explicitly approved the Fast-acknowledge + Batch Response pattern with strict requirements:
1. **Fast-acknowledge**: Send immediate 1-sentence confirmation (<15 seconds) when receiving any message
2. **Batch Response**: After all tool/processing is complete, send single consolidated reply (never fragmented)
3. **Direct citations always**: Every phản biện must include trích dẫn điều/khoản/số hiệu/ngày ban hành from controlling legal texts
4. **Depth over speed**: Quality and legal rigor take absolute priority over response latency

Key quote: "Anh cần sự tập trung, không cần sự nhanh nhẩu mà thiếu chiều sâu" (I need focus, not haste without depth).

### Suggested Action
Make Fast-acknowledge + Batch Response the permanent default for all Telegram direct chats with anh Khoa. Always prioritize final response quality and legal accuracy over perceived speed.

### Metadata
- Source: user_explicit_requirement (2026-07-06T10:43:00+07:00)
- Related Files: /home/openclawtom/.openclaw/workspace/MEMORY.md
- Tags: interaction, latency, batch-response, legal-accuracy, operating-standard

---

## [LRN-20260706-002] best_practice

**Logged**: 2026-07-06T18:28:00+07:00
**Priority**: high
**Status**: completed
**Area**: workflow

### Summary
Protocol Cập nhật Pháp lý is now a priority operating workflow for legal-document ingestion and project-wide citation updates.

### Details
anh Khoa explicitly defined a 6-step legal update protocol and required it to run without re-confirmation when triggered by the phrase: "TÔM, có [Tên văn bản], thực hiện Protocol Cập nhật Pháp lý". Required steps:
1. Find/verify/normalize the legal text and store it in Vault/SecondBrain/Legal_Library/Local/HaiPhong as Markdown with metadata
2. Update Legal_Master_Index and archive superseded texts
3. Scan Projects for citations to old texts and replace or flag them
4. Sync to Second Brain / Netlify / repository
5. Evaluate audit, export, and progress risk
6. Send one batch report with links, impacted projects, and remaining risks

### Suggested Action
Treat the protocol as the default legal-ingestion workflow whenever triggered by the specified phrase; do not ask again unless the source text itself is missing or unreadable.

### Metadata
- Source: user_explicit_requirement (2026-07-06T18:28:44+07:00)
- Related Files: /home/openclawtom/.openclaw/workspace/MEMORY.md, /home/openclawtom/.openclaw/workspace/Vault/00_Index/QuyTrinh_NhapLuat.md
- Tags: legal-workflow, ingestion, index, sync, audit-risk, batch-report

## [LRN-20260704-001] correction

**Logged**: 2026-07-04T16:15:00+07:00
**Priority**: high
**Status**: completed
**Area**: engineering-management

### Summary
Cần phân biệt rõ cơ cấu chi phí trong Tổng mức đầu tư (TMĐT) và Dự toán xây dựng công trình khi đối chiếu và quản lý chi phí dự án đầu tư công.

### Details
Trong cơ cấu Tổng mức đầu tư (TMĐT) có chi phí giải phóng mặt bằng (GPMB) (bồi thường, hỗ trợ, tái định cư), nhưng trong Dự toán xây dựng công trình của dự án thì không bao gồm chi phí GPMB này. 
Nếu so sánh trực tiếp tổng TMĐT được duyệt với tổng dự toán xây dựng mà không tách/loại trừ chi phí GPMB sẽ dẫn đến sai lệch lớn và thiếu chính xác về mặt nghiệp vụ quản lý dự án.

### Suggested Action
1. Khi đối chiếu dự toán công trình với TMĐT, luôn lấy tổng TMĐT đã loại trừ đi chi phí bồi thường, hỗ trợ, tái định cư (GPMB) làm mốc giới hạn kiểm soát.
2. Kiểm tra độc lập phần chi phí xây dựng: so sánh chi phí xây dựng trong dự toán đề xuất với chi phí xây dựng được duyệt trong TMĐT để đánh giá mức độ biến động chi phí xây dựng.
3. Kiểm tra phần chi phí dự phòng: khi chi phí xây dựng tăng lên và bù đắp bằng cách rút bớt chi phí dự phòng, cần cảnh báo rủi ro thiếu hụt dự phòng cho các phát sinh khối lượng trong quá trình thi công thực tế.

### Metadata
- Source: user_feedback (Nguyen Dang Khoa)
- Related Files: /home/openclawtom/.openclaw/workspace/Vault/SecondBrain/Projects/QL5_QL10 (tranh VB)/01_PhapLy_HopDong/QD4933_PheDuyetDuAn_Extract.md
- Tags: quản-lý-chi-phí, dự-toán, TMĐT, đầu-tư-công, GPMB

