import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
// Adjust path as needed

export default function usePost() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define a Firestore query to get all documents in the "posts" collection
    const postsCollectionRef = collection(db, "posts");
    const q = query(postsCollectionRef);

    // Subscribe to Firestore updates
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        // Clear the loading state
        setLoading(false);
        // Map Firestore documents to an array
        const postsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Set posts state
        setPosts(postsArray);
      },
      (error) => {
        // Handle any errors
        setLoading(false);
        setError(error.message);
      }
    );

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);

  return { posts, loading, error };
}
