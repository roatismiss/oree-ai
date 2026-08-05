# Corlaw to Orée: text-only conversion in Framer

A section-by-section prompt script for the Framer Agent. Paste one block at a time, in order, accepting or undoing each before moving on. The Agent handles narrow scopes far better than "convert the whole site".

---

## Before you start

**Four things to know.**

1. **The imagery mostly works, and that is not luck.** Corlaw's law library, classical statues and archive shots read as "we belong in a professional practice", and Orée's buyers *are* notaries and lawyers. Keep those. Swap only the litigation-coded shots: gavel, courtroom bench, scales of justice. Those say "we litigate" instead of "we advise firms like yours".

2. **The logo is the one thing text cannot fix.** The CORLAW mark is a vector, not a string. Replace it manually with the Orée mark (three bars, middle one olive and taller, plus the Orée wordmark).

3. **Do not let the Agent invent proof.** Orée is a new practice: no testimonials, no client logos, no "EST. 2000", no "10,000+ cases". The only true numbers are 27 years of experience, 3 regulated sectors, 3-day diagnostic, 4 services. Every prompt below carries that constraint.

4. **CMS content is out of reach.** `/blog`, `/case-study-details` and `/service-details` are Framer CMS collections. The Agent edits canvas layers, not CMS entries. Do those by hand in the CMS tab (see the last section).

**One optional change with an outsized payoff:** swap the pale yellow accent token in the Style Guide for Orée amber `#C8922F` or olive `#A8B26E`. One token, and every button, underline and highlight becomes Orée. If you truly want text-only, skip it.

---

## Step 0. The brief

Paste this once, as your first message. It stops the Agent inventing facts later.

```
Context for every change I ask for in this project.

We are re-purposing this law-firm template for a different business. Keep the
design exactly as it is. Only the words change.

THE BUSINESS
Name: Orée, always with the accent. An independent AI-governance consultancy
based in Québec, Canada.
Who it serves: notaries, lawyers, CHRPs (certified human resources
professionals) and small investment firms. Regulated professionals who are wary
of AI because of client-data and professional-liability risk.
What it sells: short, fixed-fee advisory mandates that tell a practice exactly
where AI belongs in its work, and where it does not.
Founder: Aminata Diabaté. Twenty-seven years in organisational transformation
across three regulated sectors: financial services, telecom, public sector.
Fully independent: she sells no software and takes no vendor commission.
The method, called O·R·É·E: Observe, Record, Evaluate, Engage. It runs as a
three-day mandate inside the client's own office and ends with a costed action
plan.
The refrain, used like a motto: "AI drafts. The human decides."
Positioning: proof, not promises. Every automation ends at a human checkpoint.
Data stays in Canada. Practices align with Québec's Law 25.

TONE
An advisor's voice, not a vendor's. Calm, precise, credentialed. The same
confidence the legal copy has now, aimed at professional risk instead of
personal injury.
Never use: streamline, empower, supercharge, leverage, unleash, transform,
seamless, cutting-edge, game-changer, revolutionary.
No emojis. No em dashes.

HARD RULE
Never invent testimonials, client names, logos, awards, years in business or
statistics. Orée is a new practice. The only real numbers are: 27 years of
experience, 3 regulated sectors, a 3-day diagnostic, 4 services.

Reply "ready" and change nothing yet.
```

---

## The guardrail block

Append this to **every** prompt below. It is the difference between a text swap and a redesign.

```
RULES: change text only. Do not change layout, size, spacing, colours, fonts,
font weights, alignment, images, icons, links, animations, component structure
or layer names. Keep the same number of items in any list or grid. Keep the
existing capitalisation style: if a layer is all-caps now, keep it all-caps.
Keep each new string within about 15% of the length of the string it replaces
so nothing reflows. If a string I gave you does not fit, tell me rather than
shortening it yourself. When you are done, list every layer you changed with
its old and new text.
```

---

## Home page

### 1. Logo, navigation and hero

Do these together: they are the whole first screen, and the visitor reads them as
one thing. This version assumes a first pass already replaced the legal copy with
generic AI-consultancy wording, so it names the strings by role rather than by
their original text.

```
On the Home page, replace the logo wordmark, the navigation labels and all hero
text.

LOGO
The wordmark currently reading "CORLAW" → "ORÉE"
Keep the same font, size, letter-spacing and the icon beside it. If the wordmark
is an image or SVG rather than a text layer, do not attempt it: tell me and I
will replace it by hand.

NAVIGATION
"LAWYERS"   → "SECTORS"
"TEAM"      → "ABOUT"
"EXPERTISE" → "SERVICES"
"CONTACT"   → unchanged
"PAGES"     → unchanged
Phone button "CALL NOW" → "BOOK A CALL"
Keep the globe/language button exactly as it is. Orée is bilingual and will use
it. Do not change any link destination.

HERO
Eyebrow, currently "AI CONSULTANTS · STRATEGY, AUTOMATION & ADOPTION"
→ "AI GOVERNANCE · REGULATED PROFESSIONS · QUÉBEC"

Headline line 1, the white one, currently "AI CONSULTANCY"
→ "AI WILL DRAFT IT"

Headline line 2, the accented yellow one, currently "FIRM"
→ "YOU STILL SIGN IT"

Paragraph, currently "AI consultancy firm helping teams turn complex workflows
into practical automation, sharper decisions, and measurable growth."
→ "Independent AI governance for notaries, law firms and investment firms in
Québec, where every automation ends at a human signature."

Button "SCHEDULE A FREE CONSULTATION"
→ "BOOK A FREE DIAGNOSTIC CALL"

The paragraph you have now uses the words automation, sharper decisions and
measurable growth. That is exactly the vendor language this brand refuses.
Replace it with the sentence above verbatim and do not reintroduce those words
anywhere on the page.

[paste the guardrail block]
```

Alternative headline, if you want the conditional structure the template was
built around: line 1 `IF AI ENTERS YOUR PRACTICE`, line 2 `A HUMAN MUST SIGN`.
It is longer, so check the tablet breakpoint after.

**Two manual fixes for this screen.** The circular inset photo shows two men at a
desk; Orée is one woman, so replace it with Aminata's portrait or a neutral
document close-up. And the logo icon, the angular mark beside the wordmark, has
to be swapped for the Orée three-bar mark by hand even if the text layer changes
cleanly. Keep the dark library background: it is the room Orée's clients
actually work in, and it does more for credibility here than any AI imagery
would.

### 2. Statistics band

The beige band with three floating pills, the gavel and the law book.

This is the one section where the template demands numbers Orée does not have.
A new practice cannot claim 20 years, 10,000 cases or 99% satisfaction, and
inventing them on a governance site would be self-defeating: the whole pitch is
that Orée does not oversell.

The move is to change what the numbers are *about*. Stop measuring the firm and
start measuring the market and the law. A skeptical notary is unmoved by your
satisfaction rate and very moved by "a third of the firms that deployed AI had
to rebuild it afterwards". Same layout, honest content, stronger argument.

These pills and captions are rigid. A first attempt with fuller sentences was
refused by the Agent because the strings clipped, which is the guardrail working
as designed. The version below gives the Agent a character budget per layer,
taken from the text already sitting in it, and every replacement comes in at or
under it.

```
On the Home page, the beige statistics band with the gavel image. Replace all
three statistics. These numbers describe the Québec market and the law, not this
firm.

The layers here are rigid, so each replacement is cut to fit. The character count
of the current text is in brackets. Stay at or under it.

STATISTIC 1
Pill "20 YEARS" [8] → "LAW 25" [6]
Caption "In practice across all areas of law" [35]
→ "Already governs automated decisions" [35]

STATISTIC 2
Pill "10,000+ CASE" [12] → "12.7%" [5]
Large word "HANDLED" [7] → "RUN AI" [6]
Caption "For local and international clients" [35]
→ "Of Québec businesses. ISQ, 2025" [31]

STATISTIC 3
Pill "99%" [3] → "37%" [3]
Large words "CLIENT SATISFACTION" [19, wrapping to two lines]
→ "STARTED OVER" [12, also two lines, longest word 7 characters]
Caption "Client satisfaction rate across all case types" [46]
→ "Of Québec AI adopters. ISQ, 2025" [32]

Read in sequence these say: the law already applies, your peers are already
moving, and a third of them had to start again. Keep that order.

If one string still does not fit, do not shorten it yourself and do not revert
the whole band. Apply the replacements that do fit, then tell me which layer
failed and the maximum number of characters that layer can hold. I will rewrite
that one string.

[paste the guardrail block]
```

**Swap-ins,** if you would rather lead with credibility or with a deadline. Each
keeps the pill / large-word / caption structure:

- `27 YEARS` / `OF PRACTICE` / "Across financial services, telecom and the public sector."
- `73%` / `STALL ON SCOPE` / "Name unidentified operational needs as their top barrier to AI. CPQ, 2024."
- `2027` / `TRAINING DEADLINE` / "Mandatory AI ethics training for CHRPs. Their order has already set the date."
- `3 DAYS` / `TO A COSTED PLAN` / "From the first interview to the executive debrief."

**Verify before publishing.** These figures come from the briefing deck (ISQ and
CPQ). Confirm the exact wording and dates of each source before the site goes
live. Publishing a loose statistic on a site that sells governance rigour is the
one mistake this brand cannot afford.

**The images have to go.** The gavel and the "LAW" book are the most
litigation-coded objects on the page and they now contradict the copy. Replace
them, keeping the same cut-out-on-beige floating treatment: a sealed or stamped
document, a fountain pen resting on a signature line, a bound register or
archive box, the Québec parliament facade. Nothing with a robot or a circuit
board.

### 3a. "Practice areas" list section, two columns of five

The dark section with the two-line headline and ten linked rows. The two-column
split is the opportunity here: the left column becomes what Orée does, the right
becomes who it is for, so the section answers both questions at once.

```
On the Home page, the dark section whose eyebrow reads "PRACTICE AREAS".

Eyebrow "PRACTICE AREAS"
→ "SERVICES & SECTORS"

Headline line 1 "THE FULL RANGE OF"
→ "THE WORK WE DO,"

Headline line 2 "SERVICES FOR YOU"
→ "AND WHO IT IS FOR"

LEFT COLUMN
Column label, currently "FOR BUSINESSES"
→ "WHAT WE DO"
Row 1 "BUSINESS CONTRACTS"              → "DIAGNOSTIC ORÉE"
Row 2 "BUSINESS CONTRACTS"              → "FORMATION ORÉE"
Row 3 "INTELLECTUAL PROPERTY PROTECTION"→ "APPUI ORÉE"
Row 4 "MERGERS & ACQUISITIONS"          → "LAW 25 RADAR"
Row 5 "EMPLOYMENT & HR LAW"             → "HUMAN-AI LEXICON"

RIGHT COLUMN
Column label, currently also "FOR BUSINESSES"
→ "WHO IT IS FOR"
Row 1 "PERSONAL INJURY CLAIMS"  → "NOTARIES · VISION 2030"
Row 2 "FAMILY LAW & DIVORCE"    → "LAW FIRMS · BARREAU DUTIES"
Row 3 "IMMIGRATION & RESIDENCY" → "CHRP & HR TEAMS"
Row 4 "CRIMINAL DEFENSE"        → "INVESTMENT FIRMS"
Row 5 "WILLS & ESTATE PLANNING" → "PUBLIC SECTOR BODIES"

Note on lengths: several of these rows are deliberately shorter than the text
they replace. The rows are fixed-width pills, so nothing reflows. Do not pad
them out to match the old length.

Leave every link destination as it is. I will repoint them myself once the
service and sector pages exist.

[paste the guardrail block]
```

**Two template bugs this fixes on the way past.** Both column labels currently
read "FOR BUSINESSES", even though the right column lists personal injury,
family law and wills; and the left column lists "BUSINESS CONTRACTS" twice. The
mapping above gives each column a distinct label and each row a distinct value,
so both disappear. Worth telling the Agent you noticed, otherwise it may
faithfully preserve the duplication.

### 3b. Practice-areas card grid, if your build has one instead

```
On the Home page, the practice-areas section. It advertises areas of law and
must now advertise Orée's four services.

Section heading → "Four services, one method"
Section subheading → "Every mandate follows O·R·É·E: observe, record, evaluate,
engage. Every deliverable ends with a human signature."

Card 1 title → "Diagnostic Orée"
Card 1 text → "Three days inside your office: files observed, tasks mapped,
then a costed action plan you approve line by line."

Card 2 title → "Formation Orée"
Card 2 text → "Your team learns to supervise AI: which roles to delegate, where
the checkpoints go, and how each decision is documented."

Card 3 title → "Appui Orée"
Card 3 text → "A guided rollout: tools chosen, templates written, results
tracked, until the practice holds without us."

Card 4 title → "Law 25 Radar"
Card 4 text → "A standing watch on your obligations: consents, registers,
incidents. You know where you stand before anyone asks."

If the grid holds more than four cards, fill the extras with these, which are
the AI roles Orée maps inside a practice:
"The drafting assistant" / "Facts in, a structured first draft out, with a
visible step where the human signs."
"The document librarian" / "Ask a file a question and get an answer that points
back to the exact clause."

If the grid holds fewer than four, tell me which services do not fit and stop.

[paste the guardrail block]
```

### 4. "Why the firm" / What sets our practice apart

The section with the eyebrow, the two-line condensed headline, three paragraphs,
four labelled cards and a button, over the faded statue image.

```
On the Home page, the section whose eyebrow reads "WHY THE FIRM". Replace the
text.

Eyebrow "WHY THE FIRM"
→ "WHY ORÉE"

Headline line 1 "WHAT SETS OUR"
→ "WHAT SETS THIS"

Headline line 2 "PRACTICE APART"
→ "ADVICE APART"

Paragraph 1 "Corlaow is a specialist legal consultancy serving individuals,
businesses, and international clients across personal injury, family law,
immigration, and criminal defense."
→ "Orée is a specialist AI-governance consultancy serving notaries, law firms,
certified human resources professionals and investment firms across Québec and
Canada."

Paragraph 2 "We operate as a close-knit team of senior consultants each
bringing deep expertise to every case we take on."
→ "You work with one senior consultant, from the first interview to the final
debrief, not a rotating bench of juniors."

Paragraph 3 "We don't take on every case. We take on the right ones and we see
them through with the full weight of the firm behind them."
→ "We don't automate everything. We find the few tasks where AI earns its
place, and we mark the ones where a human must always sign."

Card 1 label "SENIOR-LED FROM DAY ONE"
→ "INDEPENDENT BY DESIGN"

Card 2 label "CLEAR, TRANSPARENT FEES"
→ "FIXED FEE, FIXED DATE"

Card 3 label "CROSS-JURISDICTIONAL REACH"
→ "THE HUMAN ALWAYS SIGNS"

Card 4 label "OUTCOME-FOCUSED STRATEGY"
→ "DATA THAT STAYS IN CANADA"

Button "SCHEDULE A FREE CONSULTATION"
→ "BOOK A FREE DIAGNOSTIC CALL"

[paste the guardrail block]
```

Alternative headline if you want the profession named rather than the advice:
line 1 `WHY REGULATED`, line 2 `FIRMS CALL ORÉE`.

**Two manual fixes this section needs afterwards.** The background is the Statue
of Liberty, which is American and jars for a Québec practice: swap it for a
Montréal courthouse column, the Québec parliament facade, an old notarial seal
or a law-library interior, keeping the same faded treatment. And card 3's icon
is a gavel, which says litigation rather than advice: swap it for a signature,
a pen or a checkmark.

### 5. Testimonials

The honest one. Do not skip the choice.

```
On the Home page, the testimonials section. Orée is a new practice with no
clients cleared to be quoted, so we cannot write testimonials.

Ask me which option I want before you act.

A) Hide the section. Do not delete it, set it to hidden so we can restore it
later.

B) Convert the quotes into Orée's four commitments, keeping the card layout
exactly as it is, with the attribution line removed or set to "Orée commitment":
1. "Nothing you show us leaves your office without your signature."
2. "We quote a fee and a date, and we hold both."
3. "You keep every template, map and document we produce."
4. "When the mandate ends, your team runs it without us."

[paste the guardrail block]
```

### 6. FAQ

```
On the Home page, the FAQ section. Replace each question and answer, keeping
the same number of items and the same order of length (longest answers stay in
the same slots).

"Will our client data leave the office?"
"No. A diagnostic runs on your own systems, and every tool we recommend is
assessed for where its data is stored. Anything that cannot keep client data in
Canada does not make the list."

"Does this satisfy Law 25?"
"Law 25 asks who decided and on what basis. The method documents the human
checkpoint at each step, which is the record you would need to produce."

"Do we have to buy new software?"
"Often not. Most practices start by using what they already own more
deliberately. Orée sells no software and takes no commission, so there is
nothing to push."

"What if our order updates its guidelines?"
"That is what the Law 25 Radar is for. Obligations are tracked as they change
and you are told what each change means for your practice."

"How long does a mandate take?"
"The diagnostic is three days inside your office plus one executive debrief.
You leave with a costed 90-day roadmap."

[paste the guardrail block]
```

### 7. Closing call to action

```
On the Home page, the final call-to-action band above the footer.

Heading → "Book your Orée diagnostic"
Paragraph → "Three days in your office, one costed plan you approve line by
line. Bring the questions your order has already started asking."
Primary button → "BOOK A FREE DIAGNOSTIC CALL"
Secondary button, if present → "SEE THE METHOD"

[paste the guardrail block]
```

### 8. Navigation and footer

```
The header navigation and the footer, which appear on every page.

Navigation labels:
"LAWYERS" → "SECTORS"
"TEAM" → "ABOUT"
"EXPERTISE" → "SERVICES"
"CONTACT" stays
"PAGES" stays
Phone button "CALL NOW" → "BOOK A CALL"

Footer:
Tagline line → "Independent AI governance for regulated professions in Québec.
AI drafts. The human decides."
Column headed "Practice areas" → "Services", with the links renamed to
Diagnostic Orée, Formation Orée, Appui Orée, Law 25 Radar.
Column headed "Company" keeps its heading, with links: About, Sectors,
Insights, Contact.
Copyright line → "© 2026 Orée. Québec, Canada."

Do not change any link destinations.

[paste the guardrail block]
```

---

## Other pages

### /about

```
The /about page. Replace all text.

Page heading → "An advisor at the edge of the woods"

Intro → "An orée is the edge of a wood, the line where you can still see where
you came from and already see where you are going. That is where Orée works:
with practices standing at the edge of AI, deciding what to bring in and what
to leave out."

Story block → "Orée exists because regulated professionals are being sold AI by
people who do not carry their liability. A notary, a lawyer, a CHRP and a
portfolio manager each answer to an order, and each order is writing its rules
right now. Orée reads those rules, watches how the practice actually works, and
says plainly which tasks AI should touch and which it should never touch."

Founder name → "Aminata Diabaté"
Founder role → "Founder and principal consultant"
Founder bio → "Twenty-seven years in organisational transformation across three
regulated sectors: financial services, telecom and the public sector. Long
mandates with the Fonds de solidarité FTQ, Bell, Telus, Bombardier, CGI, Banque
Nationale and Université de Montréal. Fully independent, with no software to
sell and no vendor commission to collect."

Values, keeping the same count:
"Independent" / "No product, no commission, no reseller agreement."
"Time-boxed" / "A fixed fee and a fixed end date, agreed before we start."
"Documented" / "Every recommendation is written down so it can be defended
later."
"Human-signed" / "The last step of any process we design belongs to a person."

[paste the guardrail block]
```

### /service

```
The /service page. The same four services as the Home page, with room for
detail.

Page heading → "Four services, one method"
Intro → "Every mandate follows O·R·É·E: observe, record, evaluate, engage. Each
one ends with something you own and can run without us."

Use the same four card titles and short texts as the Home services section. For
any longer description field, use these:

Diagnostic Orée → "The entry point. Three days inside your practice: two days
observing files and interviewing the people who do the work, one day scoring
every recurring task on the Orée grid, then an executive debrief. You leave
with a findings report, a 90-day roadmap, a process map and a human-AI lexicon
your team will actually use."

Formation Orée → "Training built from your own diagnostic, not a generic
course. Your team learns the six roles AI can play in a practice, where each
one stops, and how to record the human decision so it holds up under review."

Appui Orée → "Monthly accompaniment while the plan is put in place. Tools
selected, templates drafted, results measured, and a deliberate exit: the
mandate is designed to end."

Law 25 Radar → "A standing watch on privacy and AI obligations as they change:
consents, registers, incident procedures, and whatever your order has published
since we last spoke."

[paste the guardrail block]
```

### /case-study becomes the sector pages

```
The /case-study page. Orée has no published case studies, so this page becomes
the sector pages: one entry per profession. Keep the card grid exactly as it is.

Page heading → "Four professions, four different fears"
Intro → "Every regulated profession is meeting AI on its own timetable, set by
its own order. Here is where each one stands."

Card 1 → "Notaries" / "Vision 2030 and the first pilot practices. What changes
for deeds, minutes and client files."
Card 2 → "Lawyers" / "The Barreau's obligations, client confidentiality, and
where an assistant may and may not draft."
Card 3 → "CHRPs" / "Twelve thousand members, guidelines published in 2026, and
mandatory ethics training in 2027."
Card 4 → "Investment firms" / "Sensitive client data, suitability records, and
the audit trail a regulator will ask for."

If the grid holds more than four cards, hide the extras rather than inventing
professions.

[paste the guardrail block]
```

### /team

```
The /team page. Orée is one person today, so this page becomes "who you work
with".

Page heading → "Who you work with"
Intro → "One consultant, not a bench of juniors. The person who observes your
practice is the person who writes the plan and the person who presents it."

Keep the first team-member card and hide the rest. Do not delete them.
Name → "Aminata Diabaté"
Role → "Founder and principal consultant"
Bio → "Twenty-seven years in organisational transformation across financial
services, telecom and the public sector. Independent: no software to sell, no
vendor commission."

[paste the guardrail block]
```

### /contact

```
The /contact page.

Heading → "Book a diagnostic call"
Intro → "Tell us which profession you practise and what your order has already
asked you about AI. The first call is thirty minutes and costs nothing."

Keep the form fields and their structure. Rename any field like "Case details"
or "Tell us about your case" to "What are you being asked about AI?"
Submit button → "REQUEST THE CALL"
Location heading → "Québec, Canada"

Any line promising a free case evaluation → "A thirty-minute call. No
obligation, no sales deck."

Leave the phone number and email values untouched. I will fill in the real ones
myself.

[paste the guardrail block]
```

### /404, /terms-conditions, /licence

```
The /404 page:
Heading → "This page is off the path"
Text → "The link you followed does not lead anywhere. Head back to the home
page and start again."
Button → "BACK TO HOME"

The /terms-conditions and /licence pages: replace every occurrence of the
template's company name with "Orée", and every reference to legal services with
"AI advisory services". Do not rewrite the clauses themselves. I will have them
reviewed.

[paste the guardrail block]
```

---

## CMS content, done by hand

The Agent will not reliably rewrite CMS entries. Open the CMS tab and either
edit the demo entries or delete them and add your own.

**Insights articles**, chosen to match what Orée's buyers already search for:

- How a law firm can use AI without risking client data
- What Law 25 actually requires when software makes a suggestion
- AI for notaries: what Vision 2030 changes in daily practice
- The six roles AI can play in a professional practice
- Three questions to ask any AI vendor before you sign

**Sector detail entries** (if `/case-study-details` is a collection): one per
profession, using the four cards above as the summary and expanding with the
regulatory timeline for each.

---

## Final checks

Run these after the Agent work is done. They catch what a text swap always
leaves behind.

- **Hunt the leftovers.** Search the project for: attorney, lawsuit, verdict,
  settlement, injury, court, litigation, case, plaintiff, counsel. They survive
  in small labels, buttons, alt text and form placeholders.
- **Page titles and meta descriptions.** These live in Framer's page settings,
  not on the canvas, and the Agent does not touch them. Rewrite each one.
- **Tablet and phone breakpoints.** Text overridden per breakpoint does not
  inherit the desktop change. Check the hero especially, where the headline is
  usually re-sized by hand.
- **The logo.** Replace the CORLAW mark with the Orée mark on every breakpoint,
  in the header, the footer and the favicon.
- **Images.** Swap gavel, courtroom and scales-of-justice shots. Keep the law
  library, archive and classical-statue imagery: Orée's clients live in those
  rooms.
- **Alt text.** Written for the old images, wrong for the new ones.
- **The accent colour**, if you decided to take it: Style Guide token to
  `#C8922F` amber or `#A8B26E` olive.
- **Domain, Open Graph image and social preview** before publishing.
