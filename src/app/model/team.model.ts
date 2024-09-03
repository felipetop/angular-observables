export interface TeamMember {
  id: number;
  name: string;
  image: string;
}

export interface Team {
  coordinator: TeamMember | undefined;
  scrumMaster: TeamMember;
  productOwner: TeamMember; 
  developerOne: TeamMember;
  developerTwo: TeamMember;
  developerThree: TeamMember;
  qualityAssuranceOne: TeamMember;
  qualityAssuranceTwo: TeamMember;
  pet: TeamMember;
}
