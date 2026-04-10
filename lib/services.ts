export interface ServiceSection {
  heading: string
  body: string
}

export interface Service {
  slug: string
  title: string
  shortTitle: string
  subtitle: string
  description: string
  href: string
  heroTagline: string
  sections: ServiceSection[]
  ctaLabel: string
  ctaHref: string
}

export const services: Service[] = [
  {
    slug: 'financial-strategy',
    title: 'Financial Strategy',
    shortTitle: 'Financial Strategy',
    subtitle: 'Long-term financial clarity for ambitious companies',
    description:
      'Developing robust financial frameworks — from capital allocation strategies and KPI structures to multi-year roadmaps that align with your business objectives.',
    href: '/financial-strategy',
    heroTagline: 'From ambiguity to a clear, actionable financial direction.',
    sections: [
      {
        heading: 'Service Overview',
        body: 'Effective financial strategy is the backbone of every high-performing organisation. Vladimir works with leadership teams to build long-term financial plans, establish performance benchmarking frameworks, and create the capital allocation disciplines needed to sustain growth — even through market turbulence.',
      },
      {
        heading: 'Key Deliverables',
        body: 'Engagements typically produce a multi-year financial roadmap, a bespoke KPI framework aligned with business unit targets, a capital allocation strategy that balances investment and risk, and a budget governance model that the finance function can operate independently after the engagement concludes.',
      },
      {
        heading: 'Who This Is For',
        body: 'Growth-stage companies preparing for their next funding round, owner-managed businesses formalising their financial planning for the first time, and established firms seeking an independent strategic review ahead of an exit or acquisition.',
      },
      {
        heading: 'Engagement Process',
        body: 'The engagement follows four phases: Discovery — a deep-dive into your current financial position, reporting structures, and strategic objectives. Analysis — quantitative modelling and benchmarking against sector peers. Strategy — development and stress-testing of the financial roadmap. Implementation Support — advisory presence during rollout, ensuring the plan translates from document to daily decision-making.',
      },
    ],
    ctaLabel: 'Book a strategy consultation',
    ctaHref: 'mailto:contact@vladimgonda.com?subject=Financial Strategy Consultation',
  },
  {
    slug: 'restructuring-joint-ventures',
    title: 'Restructuring & Joint Ventures',
    shortTitle: 'Restructuring & JV',
    subtitle: 'Navigating complexity in financial distress and M&A',
    description:
      'Debt restructuring, turnaround management, and joint venture formation across multiple European jurisdictions — with hands-on execution oversight.',
    href: '/restructuring-joint-ventures',
    heroTagline: 'Turning financial complexity into a clear path forward.',
    sections: [
      {
        heading: 'Restructuring Advisory',
        body: 'When a business faces financial distress — whether from overleveraging, declining revenues, or operational inefficiency — speed and precision are critical. Vladimir provides immediate financial health assessments, identifies the restructuring levers available, and works directly with management, creditors, and advisors to execute a turnaround plan that preserves value and restores stability.',
      },
      {
        heading: 'Debt & Operational Restructuring',
        body: 'Engagements cover debt renegotiation and covenant relief, operational cost base reduction, cash flow stabilisation, and, where necessary, managed wind-down planning. The focus is always on protecting the core business while addressing the root cause of financial stress.',
      },
      {
        heading: 'Joint Ventures & Partnerships',
        body: 'Vladimir supports the financial and structural aspects of joint venture formation — from initial feasibility and financial modelling, through shareholder agreement review, to post-incorporation financial governance. With direct experience across multiple European jurisdictions, he brings practical knowledge of cross-border regulatory and tax considerations.',
      },
      {
        heading: 'Geographic Experience',
        body: 'Restructuring and JV work has been executed across Central and Eastern Europe, including Slovakia, the Czech Republic, Hungary, and Austria. This multi-jurisdictional experience is particularly valuable for businesses operating across EU member states with differing insolvency regimes and commercial law frameworks.',
      },
    ],
    ctaLabel: 'Discuss your restructuring needs',
    ctaHref: 'mailto:contact@vladimgonda.com?subject=Restructuring Enquiry',
  },
  {
    slug: 'compliance-audits',
    title: 'Compliance & Audits',
    shortTitle: 'Compliance & Audits',
    subtitle: '400+ European audits completed with precision',
    description:
      'Regulatory compliance across EU frameworks including IFRS and local GAAP. Internal audit preparation, external audit support, and gap remediation planning.',
    href: '/compliance-audits',
    heroTagline: 'A 400+ audit track record built on rigour and reliability.',
    sections: [
      {
        heading: 'Audit Track Record',
        body: 'With over 400 completed audits across European markets, Vladimir brings a depth of practical audit experience that is rare among independent advisors. Engagements span statutory financial audits, internal control reviews, and special-purpose audit procedures commissioned by boards, investors, or regulators.',
      },
      {
        heading: 'Regulatory Compliance',
        body: 'Advisory covers compliance with EU financial reporting frameworks — including IFRS, Czech GAAP, Slovak accounting standards, and Hungarian regulations. Vladimir provides gap analysis against applicable standards, supports remediation planning, and advises on disclosure obligations and regulatory filings.',
      },
      {
        heading: 'Internal Audit Preparation',
        body: 'For organisations building or maturing their internal audit function, Vladimir designs audit programmes, develops risk-based audit plans, and prepares the finance team for external review. This is particularly valuable for SMEs and mid-market companies that lack a dedicated internal audit resource.',
      },
      {
        heading: 'External Audit Support',
        body: 'Acting as a liaison between management and the external auditor, Vladimir coordinates information requests, resolves technical accounting queries, and manages the audit process to minimise disruption to the finance team — while ensuring the auditor has everything they need to complete fieldwork efficiently.',
      },
    ],
    ctaLabel: 'Request a compliance review',
    ctaHref: 'mailto:contact@vladimgonda.com?subject=Compliance & Audit Enquiry',
  },
  {
    slug: 'transaction-fraud',
    title: 'Transaction Fraud',
    shortTitle: 'Transaction Fraud',
    subtitle: 'Forensic analysis and fraud risk containment',
    description:
      'Detection of fraudulent transactions and financial statement manipulation. Forensic financial analysis in cooperation with legal teams and regulators.',
    href: '/transaction-fraud',
    heroTagline: 'Uncovering financial irregularities with forensic precision.',
    sections: [
      {
        heading: 'Fraud Detection & Investigation',
        body: "When financial irregularities are suspected — whether through internal controls failure, whistleblower reports, or unexplained variances — Vladimir conducts structured forensic investigations to identify the nature, scale, and origin of the fraud. This includes transaction-level data analysis, reconciliation of financial records, and review of documentary evidence.",
      },
      {
        heading: 'Financial Statement Forensics',
        body: 'Financial statement manipulation — including revenue recognition fraud, expense misclassification, and balance sheet misrepresentation — requires a trained eye and deep accounting knowledge. Vladimir identifies the indicators of manipulation, quantifies the financial impact, and documents findings in a manner suitable for legal or regulatory proceedings.',
      },
      {
        heading: 'Risk Exposure Assessment',
        body: 'Beyond reactive investigation, Vladimir conducts prospective fraud risk assessments — identifying weaknesses in internal controls, approval workflows, and financial reporting processes that create exposure to fraud. Findings are presented with practical, prioritised recommendations for remediation.',
      },
      {
        heading: 'Legal & Regulatory Cooperation',
        body: 'Vladimir has extensive experience working alongside legal counsel, external auditors, and regulatory authorities. He can provide expert financial input to legal proceedings, prepare financial expert reports, and act as a liaison between the business and investigating authorities — ensuring that the financial dimension of any case is communicated clearly and accurately.',
      },
    ],
    ctaLabel: 'Contact for confidential consultation',
    ctaHref: 'mailto:contact@vladimgonda.com?subject=Transaction Fraud Enquiry',
  },
  {
    slug: 'erp-sad-integration',
    title: 'ERP / SAD Integration',
    shortTitle: 'ERP / SAD Integration',
    subtitle: 'Finance-aligned enterprise system implementation',
    description:
      'ERP implementation oversight for SAP, Oracle, and Microsoft Dynamics. SAD process integration for customs and trade, with finance function alignment throughout.',
    href: '/erp-sad-integration',
    heroTagline: 'Ensuring your systems serve your finance function — not the other way around.',
    sections: [
      {
        heading: 'ERP Implementation Oversight',
        body: 'ERP implementations frequently fail to deliver their intended value because the finance function is engaged too late — after system design decisions have already been made. Vladimir embeds at the CFO level during ERP projects to ensure that financial reporting requirements, chart of accounts design, approval workflows, and control frameworks are built into the system from day one.',
      },
      {
        heading: 'SAP, Oracle & Microsoft Dynamics',
        body: 'Advisory experience spans the leading enterprise platforms — SAP S/4HANA, Oracle Fusion, and Microsoft Dynamics 365. The focus is not on technical implementation (that is the vendor\'s role) but on financial process ownership: ensuring that the system configuration reflects how the finance function actually operates, and that the outputs meet management and statutory reporting needs.',
      },
      {
        heading: 'SAD Process Integration',
        body: 'For businesses involved in international trade, integration of the Single Administrative Document (SAD) process into ERP and accounting systems is a common source of compliance risk. Vladimir has direct experience aligning SAD workflows with customs authorities\' requirements and ensuring accurate cost and duty treatment in financial records.',
      },
      {
        heading: 'Change Management & Finance Transition',
        body: 'ERP transitions are as much a people challenge as a technology one. Vladimir supports the finance team through process redesign, parallel-run planning, user acceptance testing, and go-live stabilisation — ensuring that the transition from legacy systems to the new platform does not compromise month-end reporting or regulatory deadlines.',
      },
    ],
    ctaLabel: 'Talk to us about your ERP project',
    ctaHref: 'mailto:contact@vladimgonda.com?subject=ERP/SAD Integration Enquiry',
  },
  {
    slug: 'cybercrime-risk',
    title: 'Cybercrime Risk',
    shortTitle: 'Cybercrime Risk',
    subtitle: 'Financial exposure assessment in the digital threat landscape',
    description:
      'CFO-perspective risk assessment for cyberattacks. Business continuity planning and financial impact containment, liaising with IT security on exposure mitigation.',
    href: '/cybercrime-risk',
    heroTagline: 'Understanding your financial exposure to digital threats.',
    sections: [
      {
        heading: 'Financial Risk Assessment',
        body: 'As cyberattacks become more sophisticated and frequent, the financial consequences — ransom payments, business interruption, regulatory fines, reputational damage, and litigation — can be existential for mid-market companies. Vladimir conducts CFO-level assessments of a company\'s financial exposure to cybercrime, translating technical threat landscapes into quantified financial risk.',
      },
      {
        heading: 'Business Continuity Planning',
        body: 'Effective business continuity planning requires the finance function to be a core participant — not an afterthought. Vladimir works with leadership teams to model the financial impact of various incident scenarios, establish liquidity reserves and insurance coverage requirements, and design recovery frameworks that maintain financial operations during and after a cyber incident.',
      },
      {
        heading: 'Incident Response: Financial Containment',
        body: 'In the event of a cybercrime incident, the immediate financial priorities are cash preservation, transaction monitoring, and regulatory notification. Vladimir provides rapid financial response advisory — working in parallel with IT security teams to contain the financial damage, maintain payments and payroll, and manage the cash and reporting obligations that continue regardless of the attack.',
      },
      {
        heading: 'IT Security Liaison',
        body: 'The dialogue between CFOs and CISOs is often impeded by a gap in shared language. Vladimir bridges that gap — translating IT security assessments into financial exposure language that boards and audit committees can act upon, and ensuring that cyber investment decisions are grounded in a clear understanding of financial risk and return.',
      },
    ],
    ctaLabel: 'Assess your cybercrime financial risk',
    ctaHref: 'mailto:contact@vladimgonda.com?subject=Cybercrime Risk Enquiry',
  },
  {
    slug: 'projects-integration',
    title: 'Projects Integration',
    shortTitle: 'Projects Integration',
    subtitle: 'Financial oversight across multi-stakeholder projects',
    description:
      'Budget control, milestone-based financial reporting, and PMO support across international projects spanning 4+ countries and multiple currencies.',
    href: '/projects-integration',
    heroTagline: 'Keeping complex projects financially on track.',
    sections: [
      {
        heading: 'Financial Oversight',
        body: 'Large-scale projects — whether technology implementations, infrastructure programmes, or cross-border expansion initiatives — require dedicated financial oversight that sits outside the day-to-day finance function. Vladimir provides the senior financial presence needed to ensure budgets are controlled, risks are quantified, and financial reporting accurately reflects project status.',
      },
      {
        heading: 'Budget Control & Cost Management',
        body: 'Project budgets erode through scope creep, change order mismanagement, and inadequate cost tracking. Vladimir establishes budget governance frameworks, implements change control processes with financial impact assessment, and provides regular variance analysis with clear explanations and corrective actions — keeping stakeholders informed and projects financially viable.',
      },
      {
        heading: 'Milestone-Based Financial Reporting',
        body: 'Investors, funders, and board sponsors require financial reporting that connects project milestones to capital deployment. Vladimir designs and delivers milestone-based reporting frameworks that satisfy governance requirements, support draw-down processes, and provide the financial narrative needed for stakeholder communication.',
      },
      {
        heading: 'International Project Experience',
        body: 'Project experience spans multiple countries and currencies — including multi-entity structures, intercompany recharges, and cross-border VAT and tax considerations. Vladimir brings the international financial perspective needed for projects that cross jurisdictions, ensuring that local compliance requirements are met without compromising the integrity of consolidated project reporting.',
      },
    ],
    ctaLabel: 'Explore project collaboration',
    ctaHref: 'mailto:contact@vladimgonda.com?subject=Projects Integration Enquiry',
  },
]
