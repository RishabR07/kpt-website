-- Create a function to check if an email should be admin
CREATE OR REPLACE FUNCTION public.is_initial_admin(email_address TEXT)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
AS $$
    SELECT email_address = 'shettyrishab10@gmail.com'
$$;

-- Modify the handle_new_user function to check for initial admin
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (user_id, email, full_name)
    VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
    
    -- Check if this is the initial admin email
    IF public.is_initial_admin(NEW.email) THEN
        INSERT INTO public.user_roles (user_id, role)
        VALUES (NEW.id, 'admin');
    ELSE
        INSERT INTO public.user_roles (user_id, role)
        VALUES (NEW.id, 'user');
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;