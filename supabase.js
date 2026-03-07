// Supabase Client Configuration
// Replace with your actual Supabase credentials

const SUPABASE_URL = "https://unjqvkbhrxpuszwrpkah.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuanF2a2JocnhwdXN6d3Jwa2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MTQxODAsImV4cCI6MjA4ODI5MDE4MH0.Tw0e_0Baxm6QlncOlldJE9iB8H1EPzrfGpvjZsBjW8Y";

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Function to save user name to Supabase
async function saveUserName(name) {
  try {
    const { data, error } = await supabase.from("friendship_responses").insert([
      {
        name: name,
        response: "pending",
      },
    ]);

    if (error) throw error;
    console.log("Name saved successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error saving name:", error.message);
    return { success: false, error: error.message };
  }
}

// Function to update user response in Supabase
async function updateUserResponse(name, response) {
  try {
    const { data, error } = await supabase
      .from("friendship_responses")
      .update({ response: response })
      .eq("name", name)
      .select();

    if (error) throw error;
    console.log("Response saved successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error saving response:", error.message);
    return { success: false, error: error.message };
  }
}
