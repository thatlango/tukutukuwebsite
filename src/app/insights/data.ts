export interface Article {
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  author: { name: string; role: string };
}

export const featured: Article = {
  slug: "building-innovation-ecosystems-post-conflict",
  tag: "Innovation",
  date: "Apr 10, 2026",
  title: "Building Innovation Ecosystems in Post-Conflict Communities",
  excerpt:
    "Northern Uganda has emerged as one of East Africa's most resilient innovation stories. We explore how community-embedded systems — not top-down programs — create lasting economic change across post-conflict districts.",
  body: `Northern Uganda has emerged as one of East Africa's most resilient innovation stories. After decades of conflict that displaced communities and disrupted economic life, a new generation of entrepreneurs and institution-builders is reshaping the region.

At Tuku-Tuku Innovation Labs, we have spent over 16 years working inside this transformation. What we have learned is that innovation ecosystems in post-conflict communities cannot be imported wholesale from Silicon Valley or Nairobi. They must be grown from within.

**Why Community Embedding Matters**

Top-down programs typically parachute in expertise, run a cohort, and leave. The metrics look good on paper — participants trained, businesses registered — but the systems rarely persist. When the funding ends, so does the activity.

Community-embedded innovation works differently. It starts by asking what skills, networks, and resources already exist. It builds on local trust rather than importing external credibility. And it designs for sustainability from day one.

**What We Built in Gulu**

Our approach in Northern Uganda began not with a program, but with a listening exercise. We spent months in marketplaces, schools, and community centres asking one question: what stops a good idea from becoming a working business here?

The answers shaped everything. Access to early-stage capital. Lack of structured mentorship. No clear pathway from idea to validation to market. Limited digital access for operational tools.

Each of those gaps became a program pillar. And each pillar was designed to be run, owned, and eventually led by community members — not by our team.

**The Results**

Over 1,200 entrepreneurs supported. 50+ programs delivered. 80+ communities reached. These are not just numbers — they represent families, livelihoods, and communities that now have a stronger foundation for economic growth.

The lesson is simple: post-conflict communities do not need innovation done for them. They need systems that let them do it themselves.`,
  image:
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=80",
  author: { name: "Tuku-Tuku Team", role: "Innovation Labs" },
};

export const posts: Article[] = [
  {
    slug: "idea-to-market-lessons-from-1200-entrepreneurs",
    tag: "Entrepreneurship",
    date: "Mar 22, 2026",
    title: "From Idea to Market: What 1,200 Entrepreneurs Taught Us",
    excerpt:
      "After supporting over a thousand founders across Northern Uganda, patterns emerge. Here are the most common gaps — and how structured programs close them.",
    body: `After supporting over 1,200 founders across Northern Uganda, patterns emerge clearly. The journey from idea to market is rarely blocked by a lack of ambition or creativity — it is blocked by structural gaps that good program design can close.

**Gap 1: Validation Comes Too Late**

Most entrepreneurs we work with spend months or years building before testing with real customers. By the time they discover the market does not want what they built, resources are exhausted. We now front-load validation in every program we run — before any product development begins.

**Gap 2: Mentorship Is Informal and Unreliable**

Founder support in most ecosystems relies on informal networks. If you know the right people, you get good advice. If you don't, you're on your own. Structured mentorship programs that match founders to operators with relevant experience dramatically improve outcomes.

**Gap 3: The Jump to Investment Is Too Big**

There is a missing middle between "I have a working business" and "I am ready for investment." Most founders in our region fall into this gap. Investment-readiness programs that address financials, governance, and documentation close it.

These three gaps — validate early, structure mentorship, prepare for investment — define how we now design every program we run.`,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    author: { name: "Programs Team", role: "Tuku-Tuku Labs" },
  },
  {
    slug: "how-development-partners-design-programs-that-work",
    tag: "Advisory",
    date: "Mar 8, 2026",
    title: "How Development Partners Can Design Programs That Actually Work",
    excerpt:
      "Most innovation programs fail not from lack of funding — but lack of systems. We share the framework we use when advising governments and NGOs on program design.",
    body: `We have advised governments, NGOs, and development agencies on dozens of programs across East Africa. The ones that work share a common trait: they are designed as systems, not as activities.

**Activities vs. Systems**

An activity is a training workshop, a pitch competition, a mentorship session. Systems connect these activities into a coherent pipeline with defined inputs, outputs, and feedback loops.

When we audit a failing program, we rarely find a shortage of activities. We find an absence of the connective tissue between them. Participants attend training but have nowhere to apply it. Mentors give advice but have no visibility into whether founders act on it. Investors show up to pitch days but see ventures that are not yet ready.

**Our Framework**

When advising on program design, we ask six questions:

1. What is the specific venture outcome this program is designed to produce?
2. What stage of the venture lifecycle does this program address?
3. How will progress be tracked at the individual venture level?
4. What happens to participants after the program ends?
5. Who owns the system when external support exits?
6. How will we know if this worked?

Programs that can answer all six questions clearly are programs that deliver. The rest — regardless of funding — tend to produce activity reports, not economic outcomes.`,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
    author: { name: "Advisory Team", role: "Consulting" },
  },
  {
    slug: "building-digital-tools-entrepreneurs-east-africa-use",
    tag: "Digital Platforms",
    date: "Feb 20, 2026",
    title: "Building Tools That Entrepreneurs in East Africa Actually Use",
    excerpt:
      "Designing digital platforms for underconnected markets requires a different playbook. Low data, intermittent power, and feature phones are the baseline — not the exception.",
    body: `When we started building digital tools for entrepreneurs in Northern Uganda, we made the same mistake most tech builders make: we designed for ourselves, not for our users.

Our first platform assumed reliable 4G, smartphones, and always-on power. The entrepreneurs we built it for had intermittent 2G, feature phones, and load-shedding. Adoption was near zero.

**The Redesign Principles**

We rebuilt from scratch with a different set of constraints as the starting point:

**Offline-first.** Every core feature must work without a live internet connection. Sync when connectivity returns.

**SMS fallback.** Critical notifications and data entry must be achievable via SMS, not just app interface.

**Low data.** Pages must load in under 3 seconds on a 2G connection. No auto-loading images. No heavy JavaScript frameworks where simple HTML works.

**Shared device ready.** Multiple users on one device. Simple, fast account switching.

**What Changed**

Adoption went from near zero to over 500 active ventures tracked on the platform within the first year of the redesigned version. Reporting cycle time dropped 40%. Partner visibility into program progress improved dramatically.

The lesson: constraints are not bugs in the design brief. They are the design brief.`,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
    author: { name: "Tech Team", role: "Platforms" },
  },
  {
    slug: "what-makes-a-hackathon-useful-for-local-entrepreneurs",
    tag: "Programs",
    date: "Feb 5, 2026",
    title: "What Makes a Hackathon Actually Useful for Local Entrepreneurs?",
    excerpt:
      "We've run over 30 hackathons across Northern Uganda. Most failed to produce lasting outcomes — until we changed the design. Here's what works.",
    body: `We have run over 30 hackathons across Northern Uganda. For the first several years, we measured success by the number of ideas generated, the energy in the room, and the quality of the final pitches. Those metrics looked good. The long-term outcomes did not.

Most teams dissolved within weeks. Most ideas never became ventures. The hackathon was exciting — and then it was over.

**What Was Wrong**

Traditional hackathons optimise for the event experience. Tuku-Tuku hackathons now optimise for what happens after.

**The Three Design Changes**

**1. Problem-first, not solution-first.** We spend the first third of every hackathon on deep community problem analysis before any ideation begins. Teams that understand the problem build solutions with better market fit.

**2. Built-in follow-on support.** Every hackathon now feeds directly into a 6-week structured follow-on program for the top teams. The event is the entry point to the pipeline, not the endpoint.

**3. Community judges, not expert panels.** We replaced external expert judges with panels of community members — potential customers, local business owners, community leaders. Teams pitch to the people they will actually serve.

**The Results**

Since redesigning our hackathon model, the percentage of teams that remain active 6 months later has risen from under 10% to over 45%. That is the metric that matters.`,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    author: { name: "Programs Team", role: "Tuku-Tuku Labs" },
  },
  {
    slug: "closing-the-gap-why-african-startups-struggle-for-investment",
    tag: "Investment Readiness",
    date: "Jan 18, 2026",
    title: "Closing the Gap: Why African Startups Struggle to Attract Investment",
    excerpt:
      "It's rarely about the idea. Most promising ventures from our region fall at the investment readiness stage. We break down the systemic gaps — and how to fix them.",
    body: `The ventures we work with in Northern Uganda are not short on good ideas. They are short on investment-ready documentation, governance structures, and financial records that give investors the confidence to write a cheque.

This is the investment gap. And it is almost entirely fixable.

**What Investors Actually Need**

When we surveyed investors who have reviewed ventures from our pipeline, the most common reasons for passing were not about market size or product quality. They were:

- No audited financials or consistent bookkeeping
- Unclear ownership and shareholder structure
- No documented business model or unit economics
- Founder dependency — no evidence the business runs without the founder present
- No clear use of funds plan

None of these are insurmountable. All of them require deliberate preparation.

**Our Investment-Readiness Program**

We designed a 12-week structured program that addresses each gap systematically. By the end, ventures have clean financials, a documented governance structure, a clear use-of-funds plan, and a practiced investor pitch.

Of the 48 ventures that have completed the full program to date, 31 have received investment or are in active due diligence. That is a 65% conversion rate — compared to under 5% for ventures that approach investors without preparation.

The investment gap is real. But it is a systems problem, not a quality problem. And systems problems have solutions.`,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    author: { name: "Investor Relations", role: "Tuku-Tuku Labs" },
  },
  {
    slug: "community-is-not-an-audience-rethinking-participation",
    tag: "Community",
    date: "Jan 4, 2026",
    title: "Community Is Not an Audience: Rethinking Participation in Innovation",
    excerpt:
      "Too many programs treat communities as beneficiaries. The ones that create lasting change treat them as architects. Here's what community-embedded innovation really looks like.",
    body: `In most innovation programs, community members are the target. They receive training, attend workshops, and benefit from interventions designed by people who are not from their community, do not live there, and will not be there when the program ends.

This model produces dependency, not capability. It produces activity reports, not economic change. And it rarely survives the departure of the implementing organisation.

**Community as Architect**

Community-embedded innovation starts from a different premise: the people most affected by a problem are also the people most capable of solving it, given the right structure and support.

This means involving community members in program design, not just program delivery. It means training community facilitators who continue the work after external teams leave. It means measuring outcomes that matter to the community — livelihoods, local economic activity, family resilience — not just outputs that satisfy a funder's logframe.

**What This Looks Like in Practice**

In Gulu, we have community innovation coordinators — local leaders trained in our methodology who run programs independently. They do not need us in the room. They understand the pipeline, know how to support ventures through it, and have deep trust with their communities that no outside team could replicate.

Three of our most successful programs in the last two years were designed and delivered almost entirely by these coordinators. Our role was technical support and quality assurance.

That is what success looks like. Not dependency on Tuku-Tuku — but communities that have internalised the systems and run them themselves.`,
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80",
    author: { name: "Tuku-Tuku Team", role: "Innovation Labs" },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  if (featured.slug === slug) return featured;
  return posts.find((p) => p.slug === slug);
}

export const tagColors: Record<string, string> = {
  Innovation: "bg-primary/10 text-primary",
  Entrepreneurship: "bg-secondary/10 text-secondary",
  Advisory: "bg-accent/30 text-accent-foreground",
  "Digital Platforms": "bg-blue-50 text-blue-700",
  Programs: "bg-purple-50 text-purple-700",
  "Investment Readiness": "bg-yellow-50 text-yellow-700",
  Community: "bg-emerald-50 text-emerald-700",
};
