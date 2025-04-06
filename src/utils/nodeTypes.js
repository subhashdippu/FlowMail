import LeadSourceNode from "../../../email-sequence-builder copy/CustomNodes/LeadSourceNode";
import ColdEmailNode from "../../../email-sequence-builder copy/CustomNodes/ColdEmailNode";
import WaitDelayNode from "../../../email-sequence-builder copy/CustomNodes/WaitDelayNode";

const nodeTypes = {
  addLeadSource: LeadSourceNode,
  coldEmail: ColdEmailNode,
  waitDelay: WaitDelayNode,
};

export default nodeTypes;
