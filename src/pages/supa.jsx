import { createClient } from '@supabase/supabase-js';
const supabaseUrl ="https://udmtmyzexwnrnggeugit.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkbXRteXpleHducm5nZ2V1Z2l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MzM3NTIsImV4cCI6MjAyODEwOTc1Mn0.UkflMXNLJugRiAAlpTqkV0gt_Ir2BOXKmGKTCtrosYQ";

export const supabase = createClient(supabaseUrl, supabaseKey);