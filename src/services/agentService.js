import agentsData from "../data/agentsData";

// classes introduce oop, could also be functions
class AgentService {
  // this is a property, that could populated from a API request
  agents = agentsData;

  findAgents(sizePreference, attributePreference) {
    // simulate async network request via a promise and setTimeout
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // filter vs for loop is a matter of preference - filter is more functional
        const matchingAgents = this.agents.filter(
          (agent) => agent.businessSize === sizePreference
          && agent[attributePreference] >= 5,
        );

        if (matchingAgents.length > 0) {
          resolve(matchingAgents);
        } else {
          reject(new Error("No matching agent found"));
        }
      }, 2000);
    });
  }
}

export default new AgentService();
