// utils/auth.ts

// Import the supabase client
import supabase from "../lib/supabase"; // Assuming you have configured the Supabase client

// Function to sign in with Facebook
export async function signInWithFacebook() {
  try {
    // Call signInWithOAuth() with 'facebook' as the provider
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });

    if (error) {
      throw error;
    }

    // You can handle the user data returned upon successful login here
    console.log(data);
  } catch (error: any) {
    console.error("Error signing in with Facebook:", error.message);
  }
}

// Function to sign in with Google
export async function signInWithGoogle() {
  try {
    // Call signInWithOAuth() with 'google' as the provider
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      throw error;
    }

    // You can handle the user data returned upon successful login here
    console.log(data);
  } catch (error: any) {
    console.error("Error signing in with Google:", error.message);
  }
}

// Function to sign up with email and password
// Function to sign up with email and password
export async function signUpWithEmail(email: string, password: string) {
  try {
    // Call signUp() with email and password
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    // Check if user exists in the response
    if (data) {
      // User signed up successfully
      console.log("User signed up successfully:", data);
    } else {
      // This should not happen, but handle the case where user is not returned
      throw new Error("User not returned after sign up");
    }
  } catch (error: any) {
    console.error("Error signing up with email and password:", error.message);
  }
}

// Function to sign out
export async function signOut() {
  try {
    // Call signOut() to remove the user from the browser session
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    // You can perform any additional actions after sign out here
    console.log("User signed out successfully");
  } catch (error: any) {
    console.error("Error signing out:", error.message);
  }
}
