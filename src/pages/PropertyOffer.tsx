import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, FileText, Upload } from "lucide-react";
import { z } from "zod";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import { propertyOfferCopy } from "@/i18n/propertyOffer";
import { supabase } from "@/integrations/supabase/client";
import germanyPropertyImage from "@/assets/aurelia-country-germany.jpg";
import turkeyPropertyImage from "@/assets/aurelia-country-turkey.jpg";

type Country = "germany" | "turkey";
type FormState = Record<string, string> & { privacy: string };
type UploadedFile = { name: string; path: string; size: number; type: string };
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const acceptedTypes = new Set(["application/pdf", "image/jpeg", "image/png", ""]);
const acceptedExtensions = new Set(["pdf", "jpg", "jpeg", "png"]);
const countryImages: Record<Country, string> = {
  germany: germanyPropertyImage,
  turkey: turkeyPropertyImage,
};
const initialForm: FormState = { firstName:"", lastName:"", phone:"", email:"", location:"", street:"", propertyType:"", area:"", units:"", rooms:"", yearBuilt:"", rented:"", ownerStatus:"", price:"", situation:"", details:"", province:"", district:"", tapu:"", ownerCount:"", ownerResidence:"", preferredLanguage:"", privacy:"" };
const schema = z.object({ firstName:z.string().trim().min(1).max(100), lastName:z.string().trim().min(1).max(100), phone:z.string().trim().min(5).max(50), email:z.string().trim().email().max(254), propertyType:z.string().trim().min(1).max(120) });
const safeFileName = (name:string) => name.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g,"-").slice(0,120);

const PropertyOffer = () => {
  const { language } = useLanguage();
  const c = propertyOfferCopy[language];
  const { toast } = useToast();
  const [params] = useSearchParams();
  const requested = params.get("land");
  const [country, setCountry] = useState<Country>(requested === "tuerkei" ? "turkey" : "germany");
  const [form, setForm] = useState<FormState>({ ...initialForm, preferredLanguage: c.languages[["de","tr","en","nl","it","es","fr"].indexOf(language)] ?? c.languages[0] });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { document.title = c.seoTitle; document.querySelector('meta[name="description"]')?.setAttribute("content", c.seoDescription); }, [c]);
  useEffect(() => setCountry(requested === "tuerkei" ? "turkey" : "germany"), [requested]);
  const update = (name:string, value:string) => { setForm(current => ({...current,[name]:value})); setErrors(current => ({...current,[name]:""})); };
  const validFiles = (list:File[]) => list.length <= 10 && list.every(file => file.size > 0 && file.size <= MAX_FILE_SIZE && acceptedTypes.has(file.type) && acceptedExtensions.has(file.name.split(".").pop()?.toLowerCase() ?? ""));
  const required = useMemo(() => country === "germany" ? ["firstName","lastName","phone","email","location","propertyType"] : ["firstName","lastName","phone","email","province","propertyType","preferredLanguage"], [country]);
  const validate = () => {
    const next:Record<string,string> = {};
    const parsed = schema.safeParse(form);
    if (!parsed.success) parsed.error.issues.forEach(issue => { next[String(issue.path[0])] = String(issue.path[0]) === "email" ? c.emailError : c.requiredError; });
    required.forEach(name => { if (!form[name]?.trim()) next[name] = c.requiredError; });
    if (form.yearBuilt && !/^\d{4}$/.test(form.yearBuilt)) next.yearBuilt = c.requiredError;
    if (form.ownerCount && !/^[1-9]\d{0,2}$/.test(form.ownerCount)) next.ownerCount = c.requiredError;
    if (form.privacy !== "yes") next.privacy = c.requiredError;
    if (!validFiles(files)) next.files = c.fileError;
    setErrors(next); return Object.keys(next).length === 0;
  };
  const uploadFiles = async () => {
    const uploaded:UploadedFile[] = [];
    for (const file of files) {
      const path = `${crypto.randomUUID()}/${safeFileName(file.name)}`;
      const { error } = await supabase.storage.from("turkey-property-documents").upload(path, file, { cacheControl:"3600", upsert:false, contentType:file.type || undefined });
      if (error) throw error;
      uploaded.push({ name:file.name, path, size:file.size, type:file.type || "application/octet-stream" });
    }
    return uploaded;
  };
  const buildMessage = (uploaded:UploadedFile[]) => [
    `Immobilienanfrage – ${country === "germany" ? "Deutschland" : "Türkei"}`,
    `Vorname: ${form.firstName}`, `Nachname: ${form.lastName}`, `Telefon: ${form.phone}`, `E-Mail: ${form.email}`,
    country === "germany" ? `Ort / PLZ: ${form.location}` : `Provinz / Stadt: ${form.province}`,
    form.street && `Straße / Lage: ${form.street}`, form.district && `Bezirk / Stadtteil: ${form.district}`,
    `Immobilienart: ${form.propertyType}`, form.area && `Fläche: ${form.area}`, form.units && `Einheiten: ${form.units}`,
    form.rooms && `Zimmer: ${form.rooms}`, form.yearBuilt && `Baujahr: ${form.yearBuilt}`, form.rented && `Vermietet: ${form.rented}`,
    form.ownerStatus && `Eigentümerstatus: ${form.ownerStatus}`, form.tapu && `Tapu vorhanden: ${form.tapu}`,
    form.ownerCount && `Anzahl Eigentümer: ${form.ownerCount}`, form.price && `Preisvorstellung: ${form.price}`,
    form.situation && `Besondere Situation: ${form.situation}`, form.ownerResidence && `Wohnsitz Eigentümer: ${form.ownerResidence}`,
    `Bevorzugte Sprache: ${form.preferredLanguage}`, `Dateien: ${uploaded.length ? uploaded.map(file => file.name).join(", ") : "Keine"}`,
    "", "Weitere Informationen:", form.details || "Keine zusätzlichen Angaben."
  ].filter(Boolean).join("\n").slice(0,4900);
  const submit = async (event:FormEvent) => {
    event.preventDefault(); setSuccess(false); if (!validate()) { toast({title:c.errorTitle,description:c.requiredError,variant:"destructive"}); return; }
    setSubmitting(true);
    try {
      const uploaded = await uploadFiles(); const message = buildMessage(uploaded); const propertyType = country === "germany" ? "Immobilie in Deutschland" : "Immobilie in der Türkei";
      const { error:insertError } = await supabase.from("contact_submissions").insert({ first_name:form.firstName.trim(), last_name:form.lastName.trim(), email:form.email.trim(), phone:form.phone.trim(), property_type:propertyType, subject:form.propertyType, message, callback_requested:true });
      if (insertError) throw insertError;
      const { data, error } = await supabase.functions.invoke("send-contact-email", { body:{ name:`${form.firstName.trim()} ${form.lastName.trim()}`, email:form.email.trim(), phone:form.phone.trim(), property_type:propertyType, subject:form.propertyType, message, language, preferred_language:form.preferredLanguage || language, form_type:country === "germany" ? "germany_property" : "turkey_property", privacy_consent:true, files:uploaded } });
      if (error || !data?.success || !data?.internalMailResult?.accepted) throw error ?? new Error("Internal email was not accepted");
      const accepted = data.customerConfirmationResult?.accepted === true; setConfirmationSent(accepted); setSuccess(true); setFiles([]); setForm({...initialForm, preferredLanguage:c.languages[["de","tr","en","nl","it","es","fr"].indexOf(language)] ?? c.languages[0]}); if(inputRef.current) inputRef.current.value="";
      toast({title:c.successTitle,description:accepted ? c.successText : c.confirmationWarning});
    } catch (error) { console.error("Property offer submission failed", error); toast({title:c.errorTitle,description:c.errorText,variant:"destructive"}); }
    finally { setSubmitting(false); }
  };
  const fieldClass = (name:string) => `mt-2 w-full rounded-sm border bg-background px-4 py-3 text-[0.92rem] outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 ${errors[name] ? "border-destructive" : "border-border"}`;
  const labelClass = "text-[0.76rem] font-semibold uppercase tracking-[0.11em] text-primary";
  const Field = ({name,label,type="text",requiredField=false}:{name:string;label:string;type?:string;requiredField?:boolean}) => <label className={labelClass}>{label}{requiredField && " *"}<input type={type} value={form[name]} onChange={e=>update(name,e.target.value)} className={fieldClass(name)} aria-invalid={Boolean(errors[name])}/>{errors[name] && <span className="mt-1 block normal-case tracking-normal text-destructive">{errors[name]}</span>}</label>;
  const Select = ({name,label,options,requiredField=false}:{name:string;label:string;options:string[];requiredField?:boolean}) => <label className={labelClass}>{label}{requiredField && " *"}<select value={form[name]} onChange={e=>update(name,e.target.value)} className={fieldClass(name)}><option value="">—</option>{options.map(option=><option key={option}>{option}</option>)}</select>{errors[name] && <span className="mt-1 block normal-case tracking-normal text-destructive">{errors[name]}</span>}</label>;

  return <Layout><main className="bg-gradient-warm pt-28 md:pt-36"><section className="container-premium pb-10 text-center md:pb-14"><p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">{c.kicker}</p><h1 className="mt-4 font-heading text-4xl font-semibold text-primary md:text-5xl">{c.title}</h1><p className="mx-auto mt-5 max-w-3xl text-[0.98rem] leading-[1.85] text-muted-foreground">{c.intro}</p></section>
  <section className="container-premium pb-20 md:pb-28"><form onSubmit={submit} noValidate className="mx-auto max-w-5xl rounded-sm border border-border bg-card p-5 shadow-sm sm:p-8 md:p-12">
    <fieldset><legend className="font-heading text-2xl font-semibold text-primary">{c.countryQuestion}</legend><div className="mt-5 grid gap-4 sm:grid-cols-2">{(["germany","turkey"] as Country[]).map(item=><label key={item} className={`group cursor-pointer overflow-hidden rounded-sm border bg-background transition-colors ${country===item ? "border-accent ring-2 ring-accent/20" : "border-border"}`}><span className="relative block aspect-[16/9] overflow-hidden"><img src={countryImages[item]} alt="" loading="lazy" width={1280} height={800} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.015]"/><span className="absolute inset-0 bg-primary/10" aria-hidden="true"/></span><span className={`flex min-h-14 items-center gap-3 px-5 py-4 font-semibold ${country===item ? "bg-secondary text-primary" : "text-muted-foreground"}`}><input type="radio" name="country" checked={country===item} onChange={()=>setCountry(item)} className="h-4 w-4 accent-primary"/>{item==="germany"?c.germany:c.turkey}</span></label>)}</div></fieldset>
    <p className="mt-5 text-sm text-muted-foreground">{c.requiredHint}</p><div className="my-8 h-px bg-border"/>
    <div className="grid gap-6 md:grid-cols-2"><Field name="firstName" label={c.firstName} requiredField/><Field name="lastName" label={c.lastName} requiredField/><Field name="phone" label={c.phone} type="tel" requiredField/><Field name="email" label={c.email} type="email" requiredField/>
    {country==="germany" ? <><Field name="location" label={c.location} requiredField/><Field name="street" label={c.street}/></> : <><Field name="province" label={c.province} requiredField/><Field name="district" label={c.district}/></>}
    <Select name="propertyType" label={c.propertyType} options={c.propertyTypes} requiredField/><Field name="area" label={c.area}/>{country==="germany"&&<Field name="units" label={c.units}/>}<Field name="rooms" label={c.rooms}/><Field name="yearBuilt" label={c.yearBuilt}/><Select name="rented" label={c.rented} options={[c.yes,c.no]}/>
    {country==="germany" ? <><Select name="ownerStatus" label={c.ownerStatus} options={c.ownerStatuses}/><Select name="situation" label={c.situation} options={c.situations}/></> : <><Select name="tapu" label={c.tapu} options={[c.yes,c.no]}/><Field name="ownerCount" label={c.ownerCount}/><Field name="ownerResidence" label={c.ownerResidence}/><Select name="preferredLanguage" label={c.preferredLanguage} options={c.languages} requiredField/></>}<Field name="price" label={c.price}/></div>
    <label className={`${labelClass} mt-6 block`}>{c.details}<textarea value={form.details} onChange={e=>update("details",e.target.value)} rows={5} maxLength={1800} className={fieldClass("details")}/></label>
    <div className="mt-6"><label className={labelClass}>{c.files}<span className="mt-2 flex cursor-pointer items-center justify-center gap-3 rounded-sm border border-dashed border-accent/60 bg-secondary px-5 py-7 normal-case tracking-normal text-primary"><Upload size={18}/>{files.length ? `${files.length} Datei(en)` : c.uploadHelp}<input ref={inputRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="sr-only" onChange={e=>{const next=Array.from(e.target.files??[]);setFiles(validFiles(next)?next:[]);setErrors(current=>({...current,files:validFiles(next)?"":c.fileError}));}}/></span></label>{errors.files&&<p className="mt-2 text-sm text-destructive">{errors.files}</p>}{files.map(file=><p key={`${file.name}-${file.size}`} className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><FileText size={14}/>{file.name}</p>)}</div>
    <label className="mt-7 flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted-foreground"><input type="checkbox" checked={form.privacy==="yes"} onChange={e=>update("privacy",e.target.checked?"yes":"")} className="mt-1 h-4 w-4 accent-primary"/><span>{c.privacy} <Link to="/datenschutz" className="font-semibold text-primary underline">Datenschutz</Link></span></label>{errors.privacy&&<p className="mt-1 text-sm text-destructive">{errors.privacy}</p>}
    {success&&<div className="mt-7 flex gap-3 rounded-sm bg-secondary p-5 text-primary"><CheckCircle2 className="mt-0.5 shrink-0 text-accent"/><p>{confirmationSent?c.successText:c.confirmationWarning}</p></div>}
    <Button type="submit" disabled={submitting} size="lg" className="mt-8 min-h-12 w-full rounded-sm uppercase tracking-[0.12em] sm:w-auto">{submitting?c.submitting:c.submit}</Button>
  </form></section></main></Layout>;
};
export default PropertyOffer;
