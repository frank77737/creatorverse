import { createClient } from '@supabase/supabase-js';

const URL = 'https://ohqqpdygesjwrobocdde.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ocXFwZHlnZXNqd3JvYm9jZGRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwMTYwMDUsImV4cCI6MjAzOTU5MjAwNX0.We1bKwCxJp9inPHd2Pr4XMT-C6WdLRhtoI-f7bOSXe4';

export const supabase = createClient(URL, API_KEY);
