import { useEffect, useState, useCallback } from "react";

const ANALYTICS_KEY = "aurelia-analytics-consent";
const GA_MEASUREMENT_ID = "G-GEJRNFNMBX";

const isDiagMode = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    return new URLSearchParams(window.location.search).get("_ga_diag") === "1";
  } catch {
    return false;
  }
};

interface DiagState {
  consentRaw: string | null;
  consentBool: boolean;
  gtagLoaded: boolean;
  clarityLoaded: boolean;
  gaInitialized: boolean;
  lastEventName: string;
  lastEventTime: string;
  lastEventSent: boolean;
}

const readState = (): DiagState => {
  let consentRaw: string | null = null;
  try {
    consentRaw = localStorage.getItem(ANALYTICS_KEY);
  } catch {}
  const w = window as unknown as {
    gtag?: unknown;
    __ga4Loaded?: boolean;
    __clarityLoaded?: boolean;
    __gaDiagLastEvent?: { name: string; time: string; sent: boolean };
  };
  const last = w.__gaDiagLastEvent;
  return {
    consentRaw,
    consentBool: consentRaw === "true",
    gtagLoaded: typeof w.gtag === "function",
    clarityLoaded: !!w.__clarityLoaded,
    gaInitialized: !!w.__ga4Loaded,
    lastEventName: last?.name ?? "—",
    lastEventTime: last?.time ?? "—",
    lastEventSent: last?.sent ?? false,
  };
};

const GaDiagPanel = () => {
  const [enabled] = useState(isDiagMode);
  const [state, setState] = useState<DiagState>(() =>
    typeof window === "undefined"
      ? {
          consentRaw: null,
          consentBool: false,
          gtagLoaded: false,
          clarityLoaded: false,
          gaInitialized: false,
          lastEventName: "—",
          lastEventTime: "—",
          lastEventSent: false,
        }
      : readState(),
  );

  const refresh = useCallback(() => setState(readState()), []);

  useEffect(() => {
    if (!enabled) return;
    const id = window.setInterval(refresh, 1000);
    window.addEventListener("consent-change", refresh);
    return () => {
      window.clearInterval(id);
      window.removeEventListener("consent-change", refresh);
    };
  }, [enabled, refresh]);

  const sendEvent = useCallback((name: string) => {
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      __gaDiagLastEvent?: { name: string; time: string; sent: boolean };
    };
    const time = new Date().toLocaleTimeString();
    if (typeof w.gtag === "function") {
      try {
        w.gtag("event", name, {
          debug_mode: true,
          page_path: window.location.pathname + window.location.search,
          page_title: document.title,
          page_location: window.location.href,
          diag_ts: Date.now(),
        });
        w.__gaDiagLastEvent = { name, time, sent: true };
      } catch {
        w.__gaDiagLastEvent = { name, time, sent: false };
      }
    } else {
      w.__gaDiagLastEvent = { name, time, sent: false };
    }
    refresh();
  }, [refresh]);

  if (!enabled) return null;

  const Row = ({ label, value, ok }: { label: string; value: string; ok?: boolean }) => (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "2px 0" }}>
      <span style={{ opacity: 0.75 }}>{label}</span>
      <span style={{ color: ok === undefined ? "#fff" : ok ? "#4ade80" : "#f87171", fontWeight: 600 }}>
        {value}
      </span>
    </div>
  );

  return (
    <div
      style={{
        position: "fixed",
        bottom: 12,
        right: 12,
        zIndex: 99999,
        width: 320,
        background: "rgba(10,15,25,0.96)",
        color: "#fff",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 11,
        lineHeight: 1.45,
        padding: 12,
        borderRadius: 6,
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      }}
      role="dialog"
      aria-label="GA4 Diagnose Panel"
    >
      <div style={{ fontWeight: 700, marginBottom: 8, letterSpacing: 0.5 }}>
        GA4 DIAGNOSE (?_ga_diag=1)
      </div>

      <Row label="consent (raw)" value={state.consentRaw ?? "null"} ok={state.consentBool} />
      <Row label="consent erkannt" value={state.consentBool ? "true" : "false"} ok={state.consentBool} />
      <Row label="gtag.js geladen" value={state.gtagLoaded ? "Ja" : "Nein"} ok={state.gtagLoaded} />
      <Row label="Clarity geladen" value={state.clarityLoaded ? "Ja" : "Nein"} />
      <Row label="GA initialisiert" value={state.gaInitialized ? "Ja" : "Nein"} ok={state.gaInitialized} />
      <Row label="Measurement ID" value={GA_MEASUREMENT_ID} />
      <Row label="letztes Event" value={state.lastEventName} />
      <Row label="letzte Uhrzeit" value={state.lastEventTime} />
      <Row
        label="Event gesendet"
        value={state.lastEventName === "—" ? "—" : state.lastEventSent ? "Ja" : "Nein"}
        ok={state.lastEventName === "—" ? undefined : state.lastEventSent}
      />

      <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
        <button
          type="button"
          onClick={() => sendEvent("page_view")}
          style={{
            flex: 1,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "6px 8px",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          page_view senden
        </button>
        <button
          type="button"
          onClick={() => sendEvent("ga_probe")}
          style={{
            flex: 1,
            background: "#0d9488",
            color: "#fff",
            border: "none",
            padding: "6px 8px",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          ga_probe senden
        </button>
      </div>
      <div style={{ marginTop: 6, opacity: 0.6, fontSize: 10 }}>
        Nur sichtbar mit ?_ga_diag=1
      </div>
    </div>
  );
};

export default GaDiagPanel;
