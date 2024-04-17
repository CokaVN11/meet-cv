export const Role = {
  staff: "staff",
  candidate: "candidate",
  company: "company",
} as const;

export const PageTitle = {
  company: {
    home: "Home",
    employee: "Employee",
    proposal: "Proposal",
    profile: "Profile",
    position: "Position",
    payment: "Payment",
    setting: "Setting"
  },
  candidate: {
    jobs: "Jobs",
    applied: "Applied"
  }
} as const;

export type CompanyPageTitle = ObjectValues<typeof PageTitle.company>;
export type CandidatePageTitle = ObjectValues<typeof PageTitle.candidate>;