import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BUCKET = "turkey-property-documents";
type Status = "offen" | "abgeschlossen" | "aufbewahren";
interface FileRow { id: string; object_path: string; file_name: string }
interface Row {
  id: string; created_at: string; form_type: string | null; country: string | null;
  first_name: string; last_name: string | null; email: string; phone: string | null;
  property_type: string | null; subject: string | null; message: string;
  status: Status; closed_at: string | null; last_contact_at: string | null;
  submission_files: FileRow[];
}

/** Keeps the admin area out of search engines. */
export const useNoIndex = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots"; meta.content = "noindex, nofollow, noarchive";
    document.head.appendChild(meta);
    const prevTitle = document.title; document.title = "Verwaltung";
    return () => { meta.remove(); document.title = prevTitle; };
  }, []);
};

const formTypeLabel = (r: Row) => {
  const ft = r.form_type ?? ((r.property_type ?? "").startsWith("Kaufinteresse") ? "buyer_interest"
    : (r.property_type ?? "").includes("Türkei") ? "turkey_property"
    : (r.property_type ?? "").startsWith("Immobilie in") ? "germany_property" : "general_contact");
  return ({ buyer_interest: "Kaufinteresse", turkey_property: "Immobilienangebot", germany_property: "Immobilienangebot", general_contact: "Kontaktformular" } as Record<string, string>)[ft] ?? ft;
};
const countryOf = (r: Row) => {
  if (r.country) return r.country;
  const pt = (r.property_type ?? "").match(/^Immobilie in (?:der )?(.+)$/i);
  if (pt) return pt[1];
  const loc = r.message.match(/befindet sich in:\s*([^\n]+)/i);
  return loc ? loc[1].trim() : "–";
};
const fmt = (d: string | null) => d ? new Intl.DateTimeFormat("de-DE", { dateStyle: "medium", timeStyle: d.length > 10 ? "short" : undefined, timeZone: "Europe/Berlin" }).format(new Date(d)) : "–";

const LoginForm = () => {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(""); const [busy, setBusy] = useState(false);
  const login = async (e: FormEvent) => {
    e.preventDefault(); setBusy(true); setMsg("");
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setBusy(false); if (error) setMsg("Anmeldung fehlgeschlagen.");
  };
  const reset = async () => {
    if (!email.trim()) { setMsg("Bitte zuerst die E-Mail-Adresse eingeben."); return; }
    await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo: `${window.location.origin}/verwaltung/passwort` });
    setMsg("Falls ein Zugang besteht, wurde eine E-Mail zum Zurücksetzen gesendet.");
  };
  return (
    <form onSubmit={login} className="mx-auto mt-24 max-w-sm space-y-4 rounded-sm bg-card p-8 shadow-sm">
      <h1 className="font-heading text-2xl text-primary">Verwaltung</h1>
      <Input type="email" autoComplete="username" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Input type="password" autoComplete="current-password" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <Button type="submit" className="w-full" disabled={busy}>Anmelden</Button>
      <button type="button" onClick={reset} className="text-sm text-muted-foreground underline">Passwort vergessen</button>
      {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
    </form>
  );
};

const Detail = ({ row, onSaved }: { row: Row; onSaved: () => void }) => {
  const [status, setStatus] = useState<Status>(row.status);
  const [lastContact, setLastContact] = useState(row.last_contact_at ?? "");
  const [msg, setMsg] = useState("");
  useEffect(() => { setStatus(row.status); setLastContact(row.last_contact_at ?? ""); setMsg(""); }, [row]);
  const save = async () => {
    const { error } = await supabase.from("contact_submissions").update({ status, last_contact_at: lastContact || null }).eq("id", row.id);
    setMsg(error ? "Speichern fehlgeschlagen." : "Gespeichert."); if (!error) onSaved();
  };
  const open = async (path: string) => {
    const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(path, 60);
    if (error || !data) { setMsg("Dokument konnte nicht geöffnet werden."); return; }
    window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="space-y-5 rounded-sm bg-card p-6 shadow-sm">
      <dl className="grid grid-cols-[10rem_1fr] gap-x-4 gap-y-2 text-sm">
        <dt className="text-muted-foreground">Eingang</dt><dd>{fmt(row.created_at)}</dd>
        <dt className="text-muted-foreground">Formularart</dt><dd>{formTypeLabel(row)}</dd>
        <dt className="text-muted-foreground">Name</dt><dd>{[row.first_name, row.last_name].filter((v) => v && v !== "-").join(" ")}</dd>
        <dt className="text-muted-foreground">E-Mail</dt><dd>{row.email}</dd>
        <dt className="text-muted-foreground">Telefon</dt><dd>{row.phone || "–"}</dd>
        <dt className="text-muted-foreground">Land</dt><dd>{countryOf(row)}</dd>
        <dt className="text-muted-foreground">Thema</dt><dd>{row.property_type || "–"}</dd>
        <dt className="text-muted-foreground">Anliegen</dt><dd>{row.subject || "–"}</dd>
        <dt className="text-muted-foreground">Abschlussdatum</dt><dd>{fmt(row.closed_at)}</dd>
      </dl>
      <div>
        <p className="mb-1 text-sm text-muted-foreground">Nachricht / Objektinformationen</p>
        <pre className="max-h-96 overflow-auto whitespace-pre-wrap rounded-sm bg-secondary p-4 font-sans text-sm text-foreground">{row.message}</pre>
      </div>
      <div>
        <p className="mb-1 text-sm text-muted-foreground">Dokumente</p>
        {row.submission_files.length === 0 ? <p className="text-sm">Keine</p> : (
          <ul className="space-y-1 text-sm">{row.submission_files.map((f) => (
            <li key={f.id}><button type="button" className="text-primary underline" onClick={() => open(f.object_path)}>{f.file_name}</button></li>
          ))}</ul>
        )}
      </div>
      <div className="flex flex-wrap items-end gap-4">
        <label className="text-sm">Status<br />
          <select value={status} onChange={(e) => setStatus(e.target.value as Status)} className="mt-1 h-10 rounded-sm border border-input bg-background px-3">
            <option value="offen">offen</option><option value="abgeschlossen">abgeschlossen</option><option value="aufbewahren">aufbewahren</option>
          </select>
        </label>
        <label className="text-sm">Letzter relevanter Kontakt<br />
          <Input type="date" value={lastContact} onChange={(e) => setLastContact(e.target.value)} className="mt-1" />
        </label>
        <Button type="button" onClick={save}>Speichern</Button>
        {msg && <span className="text-sm text-muted-foreground">{msg}</span>}
      </div>
    </div>
  );
};

const Dashboard = ({ session }: { session: Session }) => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [rows, setRows] = useState<Row[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<"alle" | Status>("alle");
  const load = useCallback(async () => {
    const { data } = await supabase.from("contact_submissions")
      .select("id,created_at,form_type,country,first_name,last_name,email,phone,property_type,subject,message,status,closed_at,last_contact_at,submission_files(id,object_path,file_name)")
      .order("created_at", { ascending: false });
    setRows((data ?? []) as unknown as Row[]);
  }, []);
  useEffect(() => {
    supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle()
      .then(({ data }) => { setIsAdmin(Boolean(data)); if (data) load(); });
  }, [session.user.id, load]);
  const shown = useMemo(() => rows.filter((r) => filter === "alle" || r.status === filter), [rows, filter]);
  const current = rows.find((r) => r.id === selected) ?? null;

  if (isAdmin === null) return <p className="p-10 text-muted-foreground">Wird geladen …</p>;
  if (!isAdmin) return (
    <div className="p-10"><p>Kein Zugriff.</p><Button className="mt-4" onClick={() => supabase.auth.signOut()}>Abmelden</Button></div>
  );
  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-heading text-2xl text-primary">Anfragen ({rows.length})</h1>
        <div className="flex items-center gap-3">
          <select value={filter} onChange={(e) => setFilter(e.target.value as typeof filter)} className="h-10 rounded-sm border border-input bg-background px-3 text-sm">
            <option value="alle">Alle</option><option value="offen">offen</option><option value="abgeschlossen">abgeschlossen</option><option value="aufbewahren">aufbewahren</option>
          </select>
          <Button variant="outline" onClick={() => supabase.auth.signOut()}>Abmelden</Button>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="overflow-auto rounded-sm bg-card shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary text-muted-foreground"><tr>
              <th className="p-3">Eingang</th><th className="p-3">Formular</th><th className="p-3">Name</th><th className="p-3">Land</th><th className="p-3">Dok.</th><th className="p-3">Status</th>
            </tr></thead>
            <tbody>{shown.map((r) => (
              <tr key={r.id} onClick={() => setSelected(r.id)} className={`cursor-pointer border-t border-border hover:bg-secondary ${selected === r.id ? "bg-secondary" : ""}`}>
                <td className="p-3 whitespace-nowrap">{fmt(r.created_at)}</td>
                <td className="p-3">{formTypeLabel(r)}</td>
                <td className="p-3">{[r.first_name, r.last_name].filter((v) => v && v !== "-").join(" ")}</td>
                <td className="p-3">{countryOf(r)}</td>
                <td className="p-3">{r.submission_files.length || ""}</td>
                <td className="p-3">{r.status}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <div>{current ? <Detail row={current} onSaved={load} /> : <p className="text-muted-foreground">Anfrage auswählen.</p>}</div>
      </div>
    </div>
  );
};

const AdminArea = () => {
  useNoIndex();
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    return () => sub.subscription.unsubscribe();
  }, []);
  return (
    <main className="min-h-screen bg-background">
      {session === undefined ? null : session ? <Dashboard session={session} /> : <LoginForm />}
    </main>
  );
};

export default AdminArea;
