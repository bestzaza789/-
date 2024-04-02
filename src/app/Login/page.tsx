"use client";
// Import necessary modules
import { useState } from "react";
import { createClient } from "../utils/supabase/client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { signInWithFacebook } from "../auth/auth";
import { signOut } from "../auth/auth";

// Create Supabase client instance
const supabase = createClient();

export default function Login() {
  // State to handle loading state
  const [loading, setLoading] = useState(false);

  // Function to handle login with Facebook
  const handleLoginWithFacebook = async () => {
    try {
      setLoading(true); // Set loading to true while processing login

      // Call signInWithFacebook function to handle Facebook login
      await signInWithFacebook();

      // Redirect to dashboard or another page upon successful login
      // You can perform additional actions here if needed
    } catch (error: any) {
      console.error("Facebook login error:", error.message);
    } finally {
      setLoading(false); // Set loading back to false after login attempt
    }
  };

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      setLoading(true); // Set loading to true while processing sign out

      // Call signOut function to handle user sign out
      await signOut();

      // Optionally, you can redirect the user to a different page after sign out
    } catch (error: any) {
      console.error("Sign out error:", error.message);
    } finally {
      setLoading(false); // Set loading back to false after sign out attempt
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      {/* Display the Auth component for login and sign up */}
      <div>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["facebook", "google"]} // Include "email" provider for sign-up
        />
      </div>

      {/* Optionally, you can provide a separate button for Facebook login */}
      {/* <button onClick={handleLoginWithFacebook} disabled={loading}>
        {loading ? "Logging in..." : "Login with Facebook"}
      </button> */}

      {/* Optionally, you can provide a separate button for sign out */}
      {/* <button onClick={handleSignOut} disabled={loading}>
        {loading ? "Signing out..." : "Sign Out"}
      </button> */}
    </div>
  );
}
