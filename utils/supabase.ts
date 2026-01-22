import { createClient } from "@supabase/supabase-js";
import "expo-sqlite/localStorage/install";

const supabaseUrl = "https://xxynguuwveyixifdjkic.supabase.co";
const supabasePublishableKey = "sb_publishable_Z57lt0y1KBFFFlxaQ5FRDQ_4r3iGwOW";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
