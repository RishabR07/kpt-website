-- Fix the is_initial_admin function with proper search_path
CREATE OR REPLACE FUNCTION public.is_initial_admin(email_address TEXT)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT email_address = 'shettyrishab10@gmail.com'
$$;