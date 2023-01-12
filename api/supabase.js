import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jmmjkzyczoscuylktlya.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbWprenljem9zY3V5bGt0bHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIxNTk4NDUsImV4cCI6MTk4NzczNTg0NX0.ViyVnHXkyLYqvLUaYIdap-lB0Y4VGqyd10dNGtxv4KM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
