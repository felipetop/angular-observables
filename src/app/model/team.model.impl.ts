import { Team, TeamMember } from './team.model'; 

export class TeamImpl implements Team {
  manager: TeamMember | undefined;
  coordinator: TeamMember | undefined;
  scrumMaster: TeamMember | undefined;
  productOwner: TeamMember | undefined; 
  developerOne: TeamMember | undefined;
  developerTwo: TeamMember | undefined;
  developerThree: TeamMember | undefined;
  qualityAssuranceOne: TeamMember | undefined;
  qualityAssuranceTwo: TeamMember | undefined;
  pet: TeamMember | undefined;

  constructor() {
    this.manager = undefined;
    this.coordinator = undefined;
    this.scrumMaster = undefined;
    this.productOwner = undefined;
    this.developerOne = undefined;
    this.developerTwo = undefined;
    this.developerThree = undefined;
    this.qualityAssuranceOne = undefined;
    this.qualityAssuranceTwo = undefined;
    this.pet = undefined;
  }
}