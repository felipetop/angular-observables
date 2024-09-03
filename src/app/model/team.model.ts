export interface TeamMember {
  id: number;
  name: string;
  image: string;
}

export interface Team {
  manager: TeamMember | undefined
  coordinator: TeamMember | undefined;
  scrumMaster: TeamMember | undefined;
  productOwner: TeamMember | undefined; 
  developerOne: TeamMember | undefined;
  developerTwo: TeamMember | undefined;
  developerThree: TeamMember | undefined;
  qualityAssuranceOne: TeamMember | undefined;
  qualityAssuranceTwo: TeamMember | undefined;
  pet: TeamMember | undefined;
}
