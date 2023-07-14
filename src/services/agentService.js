// classes introduce oop, could also be functions
// classes can be instantiated, functions cannot, easier to test
class AgentService {
  agents = [
    {
      id: 1,
      name: "John Smith",
      localKnowledge: 8,
      bestOutcome: 9,
      patienceUnderstanding: 7,
      trustworthinessReliability: 8,
      businessSize: 10,
    },
    {
      id: 2,
      name: "Jane Doe",
      localKnowledge: 7,
      bestOutcome: 8,
      patienceUnderstanding: 8,
      trustworthinessReliability: 7,
      businessSize: 20,
    },
    {
      id: 3,
      name: "Bob Johnson",
      localKnowledge: 9,
      bestOutcome: 10,
      patienceUnderstanding: 8,
      trustworthinessReliability: 9,
      businessSize: 30,
    },
    {
      id: 4,
      name: "Mike Williams",
      localKnowledge: 6,
      bestOutcome: 7,
      patienceUnderstanding: 7,
      trustworthinessReliability: 6,
      businessSize: 20,
    },
    {
      id: 5,
      name: "Emma Johnson",
      localKnowledge: 10,
      bestOutcome: 9,
      patienceUnderstanding: 10,
      trustworthinessReliability: 10,
      businessSize: 10,
    },
  ];

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
