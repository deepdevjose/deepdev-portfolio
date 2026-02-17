// Shared article data for blog pages
export const articles = [
  {
    id: 1,
    slug: "ai-driven-health-twin",
    title: "Validating an AI-Driven Health Twin for Industrial Robot Arms",
    description: "Exploring the design and academic validation of an AI-powered predictive health twin for industrial robot arms, focused on anticipating failures before they propagate into costly shutdowns.",
    category: "AI Research",
    reading_time: "8 min read",
    cover_image: "/blogs/health-twin-cover.jpg",
    date: "2025 – Present",
    tags: ["AI", "PredictiveMaintenance", "DigitalTwin", "Robotics", "IndustrialSystems"],
    content: `
## Beyond Predictive Maintenance

Industrial robotics is a cornerstone of modern manufacturing, but it hides a fragile reality:
a single unexpected failure can stop an entire production line.

Robot arms are complex electromechanical systems. Bearings, gears, motors, and joints operate under continuous stress. When even a low-cost component fails in a critical joint, the consequence is not minor degradation — it is full operational downtime.

This project explores the design and academic validation of an AI-driven predictive health twin for industrial robot arms, focused on anticipating failures before they propagate into costly shutdowns.

## The Core Problem: Downtime Is the Real Cost

The primary challenge is not detecting faults after they occur, but predicting degradation early enough to act.

In industrial environments:

- Downtime costs can reach millions of dollars per hour
- Failures often appear suddenly, despite long periods of normal operation
- Traditional maintenance schedules are either too conservative or too late

The problem is not a lack of data, but the lack of actionable intelligence derived from it.

## System Overview: The Health Twin Concept

The project proposes an AI-powered digital health twin for robot arms, combining:

- Continuous sensor data acquisition (IoT)
- Machine learning–based anomaly detection
- Remaining Useful Life (RUL) estimation
- A digital representation of joint-level health

Rather than monitoring the robot as a single entity, the system models each critical joint as a health component, allowing localized predictions and targeted maintenance actions.

This shifts maintenance from reactive or schedule-based to condition-based decision making.

## Designing Under Real Constraints

This system was designed under constraints typical of academic and early-stage industrial environments:

- Limited computational resources
- No access to large-scale cloud infrastructure
- Heterogeneous robot platforms
- No tolerance for black-box decision making

These constraints forced design choices that favored:

- Lightweight models over large architectures
- Interpretability over raw accuracy
- Robustness over experimental novelty

The goal was not to maximize benchmark scores, but to ensure deployability and trust.

## Academic Validation and External Review

As part of the project lifecycle, the system and its architectural decisions were reviewed during an academic validation visit by Dr. Izhar Oswaldo Escudero Ornelas from Xi'an Jiaotong-Liverpool University.

The validation focused on:

- Technical coherence between data, models, and objectives
- Feasibility of deployment in industrial settings
- Alignment between predictive outputs and real maintenance actions
- The balance between research depth and engineering practicality

This step was critical: validation was not limited to model performance, but extended to system viability beyond the academic context.

## From Research to Guaranteed Uptime

A key outcome of the validation process was reframing the system's value proposition.

The system does not sell software.
It sells operational uptime.

By predicting failures before they occur, the health twin enables:

- Planned maintenance instead of emergency repairs
- Reduced spare-part inventory costs
- Extended component lifespan
- Increased operational reliability

In this sense, AI becomes an operational guarantee, not a feature.

## Business and Deployment Perspective

The system architecture naturally supports a Software-as-a-Service (SaaS) model:

- Subscription per robot arm
- Tiered capabilities:
  - Real-time monitoring
  - Predictive alerts and RUL estimation
  - Automated work orders and optimization insights
- Hardware integration (sensor kits) complements the software layer, enabling end-to-end deployment without deep modifications to existing robotic systems.

This model aligns technical feasibility with economic sustainability.

## The Real Lesson

This project reinforced a fundamental principle of applied AI:

**A useful system is not defined by how advanced it looks, but by how reliably it prevents failure.**

Academic validation, industrial constraints, and engineering discipline converged into a single insight:
AI systems only matter when they change decisions before problems occur.

Designing for that reality requires less hype — and far more systems thinking.
        `
  },
  {
    id: 2,
    slug: "virtual-dynamic-museum",
    title: "Engineering a Virtual and Dynamic Museum for Digital Cultural Preservation",
    description: "Documenting the engineering and deployment of a virtual museum system developed to preserve and present the artistic legacy of Byron Gálvez, culminating in a real public exhibition.",
    category: "Academic Project",
    reading_time: "9 min read",
    cover_image: "/blogs/museum-cover.jpg",
    date: "2025",
    tags: ["DigitalHeritage", "WebEngineering", "VirtualMuseum", "AcademicProject", "SystemsDesign"],
    downloadUrl: "/blogs/Article.pdf",
    content: `
## Beyond Digitization

Digital preservation is often reduced to scanning artworks and uploading images to a website.
That approach preserves files, not experience.

Cultural heritage, however, is not static. It is spatial, contextual, and interpretative. Preserving it digitally requires more than storage—it requires system design.

This article documents the engineering and deployment of a virtual museum and dynamic museum system developed to preserve and present the artistic legacy of Byron Gálvez, culminating in a real public exhibition during an official tribute event.

## The Problem: Preserving Art Beyond Physical Space

Traditional museums face inherent limitations:

- Physical accessibility (location, schedules, capacity)
- Degradation of artworks over time
- Limited interaction with younger and digital-native audiences

For cultural heritage to remain relevant, it must become accessible, explorable, and adaptable to digital environments—without trivializing the work itself.

The challenge was not artistic digitization, but engineering a system capable of representing art as a living digital space.

## System Overview: Virtual Museum + Dynamic Museum

The project was divided into two complementary systems:

### 1. Virtual Museum

A persistent, web-based 3D environment where users can:

- Navigate a digital gallery space
- Explore curated artworks spatially
- Experience lighting, scale, and composition intentionally

### 2. Dynamic Museum

A flexible extension designed to:

- Adapt exhibitions dynamically
- Support multiple configurations and narratives
- Allow updates without rebuilding the entire system

Together, these systems form a digital exhibition platform, not a static website.

## Engineering Goals

From the beginning, the project was constrained by real-world requirements:

- Web-native deployment (no local installation)
- Performance on consumer hardware
- Non-technical users as the final audience
- Long-term maintainability

These constraints shaped every technical decision.

## Architectural Decisions

Key engineering principles guided the implementation:

- Web-based rendering using modern browser capabilities
- Clear separation between content, presentation, and interaction logic
- Lightweight asset management to ensure fast loading
- Explicit interaction models (no hidden controls or gestures)

The system was designed so that users could intuitively explore the space, without instructions or prior experience with 3D environments.

Technology served the artwork—not the reverse.

## Designing for Real Audiences

Unlike experimental demos, this system was built for public deployment.

The museum was presented during an official homage event attended by:

- The artist's family
- Media representatives
- Cultural and governmental institutions
- A non-technical general audience

This context imposed a critical requirement:

**If the system fails, confuses, or distracts, it fails entirely.**

There is no tolerance for debugging during a live cultural event.

## Deployment as Validation

The public presentation acted as full system validation:

- The platform ran continuously without interruption
- Users navigated the virtual space without assistance
- The artwork remained the focal point—not the technology

This moment transformed the project from an academic exercise into a deployed cultural system.

Engineering success was measured not by metrics, but by invisibility:
the technology worked because it disappeared behind the experience.

## Interdisciplinary Engineering in Practice

This project sits at the intersection of:

- Software engineering
- Human–computer interaction
- Digital heritage preservation
- Systems design

It required translating artistic intent into technical constraints, and technical constraints back into experiential design.

That translation layer is where most projects fail—and where engineering discipline matters most.

## The Real Lesson

Digital preservation is not about copying the past into new formats.
It is about designing systems that allow culture to persist, evolve, and remain accessible.

This project demonstrated that:

- Cultural heritage can be engineered responsibly
- Web technologies are mature enough for serious preservation work
- Real validation happens in public, not in documentation
- Engineering, when done correctly, becomes an invisible bridge between art, history, and future audiences
        `
  },
  {
    id: 3,
    slug: "ai-virtual-psychologist",
    title: "Designing an AI-Based Virtual Psychologist for Educational Environments",
    description: "Documenting the design and institutional presentation of an AI-based virtual psychologist, alongside a broader vision for STEM, VR, and robotics laboratories as integrated educational infrastructure.",
    category: "AI Systems",
    reading_time: "9 min read",
    cover_image: "/blogs/ai-psychologist-cover.jpg",
    date: "2025",
    tags: ["ArtificialIntelligence", "Education", "AppliedAI", "EthicalSystems", "STEMInfrastructure"],
    content: `
## Beyond Prototypes

Artificial intelligence in education is often framed as experimentation: chatbots, demos, isolated tools.
That framing misses the real challenge.

Educational systems do not need more prototypes.
They need reliable, ethically designed systems that can operate at scale, under institutional constraints, and with real social responsibility.

This article documents the design and institutional presentation of an AI-based virtual psychologist, alongside a broader vision for STEM, VR, and robotics laboratories as integrated educational infrastructure.

## The Core Problem: Access and Saturation

Educational environments face a structural limitation:

- Limited access to psychological support
- Overloaded professionals
- High student-to-specialist ratios
- Growing demand for early detection and guidance

This is not a problem of awareness.
It is a problem of capacity.

The goal was not to replace human professionals, but to design a system that could:

- Provide first-level support
- Assist in screening and guidance
- Operate continuously
- Respect ethical and institutional boundaries

## System Overview: The Virtual Psychologist

The virtual psychologist was designed as an assistive AI system, not an autonomous authority.

Key principles:

- Support, not diagnosis
- Guided interaction, not free-form therapy
- Clear scope limitations
- Human escalation paths

The system focuses on structured interaction, emotional state indicators, and contextual guidance—acting as a bridge, not a replacement, between students and professional support services.

## Designing Under Ethical Constraints

Unlike many AI applications, this system was constrained from the start by ethical and institutional requirements:

- No medical diagnosis
- No hidden decision-making
- No opaque model behavior
- No data misuse

Every design decision was evaluated under one question:

**Can this system be responsibly deployed in a public educational institution?**

If the answer was unclear, the feature was discarded.

## Institutional Presentation as a Design Test

The system and its broader vision were formally presented to educational and governmental stakeholders, not as a finished product, but as a systems proposal.

![Institutional presentation of the AI Virtual Psychologist project](/blogs/ai-psychologist-presentation.jpg)

This context matters.

Presenting AI to institutions forces clarity:

- You must explain what the system does
- You must define what it explicitly does not do
- You must justify why it should exist at all

This process validated not just the technology, but the thinking behind it.

## Beyond a Single System: Infrastructure Thinking

The virtual psychologist was intentionally framed as one component of a larger ecosystem.

The long-term vision included:

- STEM laboratories for applied learning
- Virtual reality environments for immersive education
- Robotics labs for hands-on engineering experience

The unifying idea was simple:
**AI should not be an isolated application—it should be part of educational infrastructure.**

## Engineering for Public Systems

Designing AI for public education differs fundamentally from private or experimental contexts:

- Scalability matters more than novelty
- Explainability matters more than performance metrics
- Stability matters more than rapid iteration

A system that cannot be understood by administrators, educators, and students alike cannot be responsibly deployed, regardless of its technical sophistication.

## The Real Lesson

Applied AI in education is not about building impressive systems.
It is about designing boundaries.

This project reinforced a central insight:

**The most important feature of an AI system is knowing where it must stop.**

When AI is treated as infrastructure rather than spectacle, it becomes possible to design systems that are ethical, scalable, and genuinely useful.

That is where engineering responsibility begins.
        `
  },
  {
    id: 5,
    slug: "vex-national-competition",
    title: "Competing at National Scale: Engineering a VEX Robotics Team to a Top-10 Finish",
    description: "Documenting participation in a national VEX Robotics competition, finishing 7th place nationwide as a robotics developer responsible for software behavior and system tuning.",
    category: "Robotics",
    reading_time: "8 min read",
    cover_image: "/blogs/vex-national-cover.jpg",
    date: "2025 – Present",
    tags: ["Robotics", "VEX", "ControlSystems", "EngineeringCompetition", "TeamEngineering"],
    content: `
## From Classroom Robotics to National Competition

Robotics changes completely when it becomes competitive.

This article documents participation in a national VEX Robotics competition, representing the university team and finishing 7th place nationwide in our first appearance at this level. My role within the team was primarily as a robotics developer, responsible for software behavior, system tuning, and technical validation.

This was not an academic exercise. It was engineering under constraints, deadlines, and real consequences.

## Engineering Under Competitive Constraints

Unlike laboratory environments, robotics competitions impose strict limitations:

- Fixed hardware platforms
- Regulated motors, sensors, and controllers
- Time-restricted matches
- Unpredictable opponent strategies

Every design decision—mechanical or software—has immediate impact on performance.

The robot must work consistently, not just correctly.

## My Role: Robotics Development and Systems Logic

Within the team, my focus was on:

- Control logic and driver interaction
- Behavior consistency across matches
- Debugging failures under time pressure
- Translating strategy into executable robot actions

In VEX, small implementation details—latency, dead zones, control smoothness—can determine match outcomes.

The challenge is not writing code, but making it reliable under stress.

![Team at the national VEX Robotics competition](/blogs/vex-national-team.jpg)

## Software Is Only Half the System

One of the most important lessons reinforced during the competition is that robotics is inherently interdisciplinary.

Performance emerged from the interaction between:

- Mechanical design
- Electrical reliability
- Software behavior
- Team coordination

A strong algorithm cannot compensate for poor mechanical alignment. Likewise, excellent hardware fails without predictable control logic.

Competitive robotics forces engineers to think in systems, not components.

## Teamwork Beyond the Robot

Success at this level depends heavily on non-technical factors:

- Clear communication
- Role discipline
- Rapid decision-making
- Emotional control after failures

Matches are short. There is no time to debate—only to execute, observe, adjust, and repeat.

This environment closely mirrors real-world engineering teams working under production pressure.

## Achieving a Top-10 National Finish

Reaching 7th place nationally in our first participation validated both the technical preparation and the team's internal coordination.

![STEM recognition ceremony](/blogs/vex-national-match.jpg)

More importantly, it demonstrated the ability to:

- Adapt quickly
- Learn from stronger teams
- Compete respectfully
- Maintain performance consistency

Ranking is not the goal—it is the consequence of disciplined engineering.

## Why Competitive Robotics Matters

Competitions like VEX Robotics go far beyond student showcases.

They train engineers to:

- Build within constraints
- Accept failure as feedback
- Optimize instead of overdesign
- Collaborate under pressure

These are the same conditions found in industrial automation, embedded systems, and applied robotics.

![Recognition with institution director](/blogs/vex-national-director.jpg)

## The Real Lesson

The most valuable outcome was not the ranking.

It was understanding how engineering decisions behave when exposed to:

- Time pressure
- Human operators
- Physical systems
- Adversarial environments

Competitive robotics strips engineering down to its essentials.

**If it works here, it will likely work anywhere.**
        `
  },
  {
    id: 6,
    slug: "vr-labs-stem-education",
    title: "Deploying Virtual Reality Labs for High School STEM Education",
    description: "Documenting the design, setup, and operation of VR sessions using Pico Neo 3 Pro headsets with high school students in constrained classroom environments.",
    category: "STEM Education",
    reading_time: "8 min read",
    cover_image: "/blogs/vr-labs-cover.jpg",
    date: "2025",
    tags: ["VirtualReality", "STEMEducation", "AppliedEngineering", "EducationalTechnology", "VRLabs"],
    content: `
## Beyond the Demo

Virtual reality is often presented in education as a novelty: short experiences, isolated demos, or one-time events.
That approach misses the real challenge.

The difficulty is not showing VR.
The difficulty is deploying it as a functional educational tool, with real students, limited time, shared hardware, and no margin for technical failure.

This article documents the design, setup, and operation of VR sessions using Pico Neo 3 Pro headsets with high school students, focusing on what actually works inside a constrained classroom environment.

## Why Virtual Reality in STEM Education

STEM education benefits from experiential learning, but many concepts remain abstract:

- Spatial reasoning
- Systems interaction
- Simulation-based understanding
- Immersive visualization

VR enables students to experience systems instead of imagining them, turning passive explanation into active exploration.

The goal was not entertainment.
It was engagement with purpose.

## Hardware Selection: Pico Neo 3 Pro

Hardware choice is a deployment decision, not a preference.

The Pico Neo 3 Pro was selected based on practical constraints:

- Standalone operation (no external PC required)
- Fast setup and reset
- Acceptable battery life
- Durability for repeated student use

In educational environments, hardware must tolerate mistakes, quick handoffs, and constant supervision.
Anything fragile or overly complex becomes unusable immediately.

## Classroom Constraints Are Real Constraints

Unlike controlled lab environments, classrooms impose hard limits:

- Limited physical space
- Short session durations
- High student rotation
- Mixed technical familiarity

Each VR session had to be designed so that:

- Students could enter the experience quickly
- Instructions were minimal and visual
- Supervision was constant but lightweight

If a setup required troubleshooting, it failed by definition.

## Deployment in Practice

![Students experiencing VR during a supervised session](/blogs/vr-labs-session.jpg)

The VR sessions followed a structured flow:

**Hardware onboarding**
- Proper headset placement
- Comfort and safety check

**Guided interaction**
- Initial orientation
- Basic controls
- Exploration phase

**Short, focused experiences**

**Rotation**
- Clean handoff to the next student

This structure ensured that technology never blocked participation.

## Students as the Final Test

High school students are the most honest evaluators of technology.

They do not tolerate friction.
They do not wait for explanations that fail.
They immediately reveal whether a system works.

In this context:

- Engagement was immediate
- Interaction was intuitive
- Curiosity replaced hesitation

The success of the system was not measured in features, but in how naturally students interacted with it.

## What Actually Worked

Several lessons emerged from real deployment:

- Simplicity beats feature richness
- Short experiences outperform long sessions
- Physical comfort matters as much as content
- Instructor presence is essential

Most importantly, VR worked best when treated as infrastructure, not spectacle.

## The Real Lesson

Deploying VR in education is not about immersive graphics or advanced simulations.
It is about engineering reliability under human constraints.

When VR is designed to survive real classrooms, it becomes more than a demo—it becomes a learning tool.

This project reinforced a core principle of applied engineering:

**A system is only successful when it works for its users, not when it impresses its creators.**
        `
  },
  {
    id: 7,
    slug: "stem-robotics-labs-introduction",
    title: "Introducing Robotics Through STEM Labs: Beyond Assembly and Code",
    description: "A session designed to introduce robotics through engineering culture and soft skills, using VEX Robotics as a systems-level reference point.",
    category: "STEM Education",
    reading_time: "7 min read",
    cover_image: "/blogs/stem-robotics-cover.jpg",
    date: "2025",
    tags: ["STEMEducation", "Robotics", "VEXRobotics", "EngineeringCulture", "SoftSkills"],
    content: `
## Not a Technical Workshop

Robotics education is often reduced to two things:
how to assemble a robot and how to program it.

While both are important, they are not the first barrier students face when entering competitive robotics environments. In many cases, the real obstacles appear long before code is written or hardware is assembled.

This session was intentionally designed not as a technical deep dive, but as an introduction to robotics through the lens of engineering culture and soft skills, using VEX Robotics as a concrete reference point.

## Why Start with Context, Not Components

For students encountering robotics for the first time, jumping directly into mechanics or programming can be overwhelming. Before technical depth, students need to understand:

- What robotics competitions actually demand
- How teams function under pressure
- Why collaboration matters as much as technical skill
- What distinguishes a functional robot from a competitive one

The goal was to provide orientation, not instruction.

## VEX Robotics as a Systems Example

Rather than explaining how robots are built, VEX Robotics was used as a systems-level example:

- Game rules define constraints
- Field layout shapes strategy
- Time limits enforce prioritization
- Team roles distribute responsibility

This framing allowed students to see robotics as an engineering system, not a collection of parts.

## The Role of Soft Skills in Robotics Competitions

One of the central themes of the session was the importance of skills that are often overlooked:

- Communication under stress
- Decision-making with incomplete information
- Conflict resolution within teams
- Strategic thinking beyond individual tasks

In competitive robotics, technical excellence without coordination rarely succeeds.
This reality is not obvious to newcomers—but it determines outcomes.

## Learning Without Building

No robots were assembled.
No code was written.

And that was intentional.

By removing technical execution from the session, attention shifted to:

- How teams prepare
- How strategies are discussed
- How failures are handled
- How roles are defined

Students were able to engage without fear of "not knowing enough," which significantly lowered the entry barrier.

## STEM Labs as Exposure Environments

STEM laboratories are not only places for experimentation.
They are exposure environments.

For many students, this was their first contact with:

- Robotics competitions
- Engineering workflows
- Collaborative technical spaces

The objective was not mastery, but familiarity—making future participation feel possible rather than intimidating.

## The Real Lesson

Introducing robotics is not about teaching everything at once.
It is about teaching what matters first.

This session reinforced a key educational insight:

**Before students can build robots, they need to understand the environment they are building for.**

When robotics is presented as a human, collaborative, and strategic activity, technical learning becomes a natural next step—not a barrier.
        `
  },
  {
    id: 8,
    slug: "vex-competitive-robotics-training",
    title: "Teaching Competitive Robotics: Hardware, Software, and Systems Thinking with VEX",
    description: "A hands-on technical workshop where students work directly with robot hardware, embedded C++ programming, and system integration for competitive robotics.",
    category: "STEM Education",
    reading_time: "8 min read",
    cover_image: "/blogs/vex-training-cover.jpg",
    date: "2025",
    tags: ["Robotics", "VEXRobotics", "STEMEducation", "CPlusPlus", "AppliedEngineering"],
    content: `
## From Exposure to Execution

Introducing students to robotics is one thing.
Training them to build and compete is something entirely different.

This session was designed as a hands-on technical workshop, where students moved beyond conceptual explanations and worked directly with robot hardware, embedded programming, and system integration, using VEX Robotics as the platform for competitive preparation.

The objective was clear:
to show how hardware, software, and strategy converge in a real robotics competition.

## Robotics as a Complete System

Competitive robotics cannot be taught in isolated pieces.

A robot that is mechanically sound but poorly programmed fails.
A robot with good code but weak mechanical design also fails.

For this reason, the workshop was structured around systems thinking, emphasizing that a competitive robot is the result of:

- Mechanical design decisions
- Electrical and sensor integration
- Embedded software behavior
- Game constraints and match strategy

Students were exposed to all layers, not just one.

## Hardware: Building for Competition

The first stage focused on robot assembly.

Rather than assembling a generic example, students worked on a robot that would later be used in an actual competition. This imposed real constraints:

- Structural rigidity
- Weight distribution
- Accessibility for maintenance
- Reliability under repeated use

Every mechanical choice was discussed in terms of trade-offs, not instructions.

![Students working hands-on with VEX robot hardware](/blogs/vex-training-session.jpg)

## Software: Programming the Robot in C++

Once the hardware was operational, attention shifted to embedded programming in C++.

Key concepts covered included:

- Motor control and abstraction
- Sensor feedback
- Control logic and sequencing
- Basic debugging strategies

The goal was not to memorize syntax, but to understand how software decisions affect physical behavior.

Seeing code translate directly into robot motion made the learning immediate and tangible.

## Hardware–Software Integration

The most critical learning moment occurred when students began to integrate both layers.

Issues emerged naturally:

- Motors behaving unexpectedly
- Timing mismatches
- Mechanical limitations exposed by software commands

These moments were intentional.
They demonstrated that robotics problems are rarely isolated—and that debugging often spans multiple domains at once.

## Training for Competition, Not Demonstration

Unlike showcase workshops, this training was explicitly aligned with competitive robotics requirements:

- Robots must survive repeated matches
- Code must be reliable under pressure
- Teams must adapt quickly to failures

Students were encouraged to think not just as builders or programmers, but as engineering teams preparing for real competition scenarios.

## What Students Actually Learned

Beyond technical skills, students gained:

- Confidence in working with real systems
- An understanding of engineering trade-offs
- Exposure to professional workflows
- Awareness of how preparation impacts performance

Most importantly, they experienced that engineering is iterative, not linear.

## The Real Lesson

Teaching robotics effectively requires more than explaining how things work.
It requires letting students build, break, fix, and rethink.

This workshop reinforced a core principle of applied engineering education:

**Real learning happens when hardware and software are forced to coexist under constraints.**

By working with VEX Robotics at a competitive level, students moved from curiosity to capability—one system at a time.
        `
  },
  {
    id: 9,
    slug: "competitive-programming-contests",
    title: "Competing in Programming Contests: Learning Under Time and Cognitive Pressure",
    description: "Documenting participation in a competitive programming event (Coding Cup) and the skills developed through problem-solving under constraints.",
    category: "Software Engineering",
    reading_time: "7 min read",
    cover_image: "/blogs/coding-cup-cover.jpg",
    date: "2024",
    tags: ["CompetitiveProgramming", "SoftwareEngineering", "ProblemSolving", "Algorithms", "Education"],
    content: `
## Beyond Writing Code

Programming competitions are often misunderstood as speed-coding events.
They are not.

What they actually test is the ability to think clearly under constraints: limited time, incomplete solutions, and constant pressure to adapt.

This article documents participation in a competitive programming event (Coding Cup), an environment commonly associated with large-scale industry practices and problem-solving culture promoted by organizations such as Google.

## What Programming Competitions Really Measure

Unlike classroom exercises, competitive programming environments remove most external structure. There are no step-by-step instructions, no partial credit for intent, and no guarantees that a solution exists within familiar patterns.

Instead, participants are evaluated on:

- Problem decomposition
- Algorithmic reasoning
- Time and space complexity awareness
- Collaboration and communication
- Emotional control under time pressure

Code is just the final artifact of a much deeper cognitive process.

## Team-Based Problem Solving

Although problems are solved individually at the keyboard, competitive environments quickly become collaborative thinking spaces.

During the contest, teams naturally divide roles:

- One person focuses on understanding the problem statement
- Another explores potential algorithms or edge cases
- Another validates complexity and feasibility

This mirrors real engineering environments far more closely than isolated assignments.

## Constraints as the Core Feature

The defining characteristic of the Coding Cup experience was constraint:

- Strict time limits
- Fixed computing resources
- No external references
- Immediate feedback (correct or wrong)

These constraints force participants to abandon perfectionism and focus on progressive refinement—a critical engineering skill rarely taught explicitly.

## Learning That Cannot Be Simulated

No lecture replicates what happens when:

- A solution fails five minutes before the deadline
- An algorithm works conceptually but times out
- A minor edge case invalidates an entire approach

These moments create durable learning because they combine technical reasoning with emotional stakes.

Participants leave with a clearer understanding of their own strengths, weaknesses, and decision-making patterns.

## From Competition to Engineering Practice

The value of competitive programming is not winning.

Its real value lies in developing habits that transfer directly to professional software engineering:

- Reading ambiguous requirements carefully
- Choosing acceptable solutions under imperfect conditions
- Communicating ideas efficiently
- Managing cognitive load

These skills matter regardless of language, framework, or domain.

## The Real Lesson

Programming competitions are not about proving who knows more syntax.
They are about discovering how you think when conditions are unfavorable.

This experience reinforced a fundamental principle:

**Strong engineers are not defined by ideal conditions, but by how they operate when time, clarity, and certainty are all limited.**

That lesson persists long after the contest ends.
        `
  },
  {
    id: 10,
    slug: "stem-robotics-ai-public-media",
    title: "Bringing STEM, Robotics, and AI to Public Media",
    description: "Documenting my first experience participating in a live interview at Radio y Televisión de Hidalgo, discussing STEM laboratories, VEX Robotics, and artificial intelligence.",
    category: "Education",
    reading_time: "6 min read",
    cover_image: "/blogs/stem-media-cover.jpg",
    date: "2025",
    tags: ["STEM", "Robotics", "ArtificialIntelligence", "Education", "PublicOutreach"],
    content: `
## From the Lab to Public Conversation

Technical work only reaches its full potential when it leaves the lab.

This article documents my first experience participating in a live interview at Radio y Televisión de Hidalgo, where we discussed the role of STEM laboratories, VEX Robotics competitions, and artificial intelligence in shaping future technological careers.

It was not a technical presentation—it was a translation exercise: converting complex engineering ideas into language accessible to students, educators, and the general public.

## Why Media Exposure Matters for Engineering

Engineering is often perceived as distant or inaccessible. Public media plays a critical role in correcting that perception.

During the interview, the focus was not on showcasing finished products, but on explaining:

- What happens inside STEM laboratories
- Why robotics competitions matter beyond trophies
- How artificial intelligence is actually developed
- How early exposure changes career trajectories

The challenge was not what to explain, but how to explain it clearly without oversimplifying.

## STEM Labs as Entry Points, Not End Goals

One of the central themes was that STEM labs are not endpoints, but entry points.

They function as environments where students:

- Interact with real hardware and software
- Learn problem-solving through experimentation
- Develop confidence around technology
- Discover whether engineering is for them

Robotics, VR, and AI are tools—not objectives. The real objective is cultivating technical curiosity and disciplined thinking.

![Live interview at Radio y Televisión de Hidalgo](/blogs/stem-media-interview.jpg)

## VEX Robotics and Competitive Learning

We discussed how VEX Robotics competitions provide a structured way for students to experience:

- Team-based engineering
- Design under constraints
- Iterative failure and improvement
- Leadership and communication

Competitions simulate real engineering conditions more accurately than many classroom exercises.

They also highlight the importance of soft skills—planning, coordination, and decision-making—which are often underestimated in technical education.

## Artificial Intelligence: Demystifying the Process

A key part of the conversation focused on artificial intelligence.

Rather than presenting AI as a black box, the emphasis was on explaining:

- How AI systems are designed
- The data and logic behind them
- Their limitations and responsibilities
- Why ethics and context matter

This approach helps students understand that AI is built by people—and therefore shaped by human decisions.

## Learning to Communicate Engineering

For me, this experience reinforced an important lesson:

**Being an engineer also means being able to communicate engineering.**

Explaining technology to a non-technical audience requires clarity, structure, and respect for the listener's perspective. These are skills as critical as coding or system design.

## The Real Impact

Appearing on television was not about visibility—it was about access.

If even a few students see themselves reflected in these conversations and feel encouraged to explore technology, the effort is justified.

Engineering grows stronger when it becomes part of public dialogue.

## Closing Thought

Technology does not advance society by existing quietly in labs.

It advances when engineers are willing to explain, share, and invite others into the process.

This experience marked an important step in learning how to do exactly that.
        `
  }
];

export function getArticleBySlug(slug) {
  return articles.find(article => article.slug === slug);
}
