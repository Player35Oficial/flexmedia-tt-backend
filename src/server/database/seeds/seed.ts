import { componentesEletronicos } from "./local_database";

import { db } from "../../config";

export const seedDatabase = async () => {
  try {
    // Seed new data
    for (const componente of componentesEletronicos) {
      await db.collection("componentes_eletronicos").add(componente);
    }
    console.log("Database seeded successfully!");
    return true;
  } catch (error) {
    console.error("Error seeding database:", error);
    return false;
  }
};
