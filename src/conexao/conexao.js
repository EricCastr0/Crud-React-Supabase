import { createClient } from "@supabase/supabase-js";


export const supabase= createClient(
   "https://iezjhqzxkkoasyenofyb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllempocXp4a2tvYXN5ZW5vZnliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzMDgxMDUsImV4cCI6MTk4NDg4NDEwNX0.VBJBXYHqFuMaRIPNfYBMx1gJ87fBb7NJXLTGD5hIZEo"
    )