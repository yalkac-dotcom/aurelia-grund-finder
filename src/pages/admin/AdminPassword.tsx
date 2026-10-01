import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNoIndex } from "./AdminArea";

/** Set a password from an invitation or reset link. */
const AdminPassword = () => {
  useNoIndex();
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [pw, setPw] = useState(""); const [pw2, setPw2] = useState(""); const [msg, setMsg] = useState("");
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => { if (s) setReady(true); });
    supabase.auth.getSession().then(({ data }) => { if (data.session) setReady(true); });
    return () => sub.subscription.unsubscribe();
  }, []);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (pw.length < 12) { setMsg("Mindestens 12 Zeichen."); return; }
    if (pw !== pw2) { setMsg("Passwörter stimmen nicht überein."); return; }
    const { error } = await supabase.auth.updateUser({ password: pw });
    if (error) { setMsg("Passwort konnte nicht gespeichert werden (ggf. zu schwach oder Link abgelaufen)."); return; }
    navigate("/verwaltung", { replace: true });
  };
  return (
    <main className="min-h-screen bg-background">
      <form onSubmit={submit} className="mx-auto mt-24 max-w-sm space-y-4 rounded-sm bg-card p-8 shadow-sm">
        <h1 className="font-heading text-2xl text-primary">Passwort festlegen</h1>
        {!ready ? <p className="text-sm text-muted-foreground">Bitte den Link aus der E-Mail verwenden.</p> : <>
          <Input type="password" autoComplete="new-password" placeholder="Neues Passwort" value={pw} onChange={(e) => setPw(e.target.value)} />
          <Input type="password" autoComplete="new-password" placeholder="Passwort wiederholen" value={pw2} onChange={(e) => setPw2(e.target.value)} />
          <Button type="submit" className="w-full">Speichern</Button>
        </>}
        {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
      </form>
    </main>
  );
};

export default AdminPassword;
