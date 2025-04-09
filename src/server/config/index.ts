import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import admin from "firebase-admin";
import path from "path";

export const firebaseApp = initializeApp({
  credential: admin.credential.cert(
    path.resolve(__dirname, "credentials.json")
  ),
  projectId: "flexmedia-tt-backend",
});

// enable ignoreUndefinedProperties
admin.firestore().settings({
  ignoreUndefinedProperties: true,
});

export const db = getFirestore(firebaseApp);
