import { useState, useRef, useEffect } from "react";

const LOGO = "data:image/jpeg;base64,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";

// ─────────────────────────────────────────────
// ESPECIFICAÇÕES — DNIT 031/2006-ES
// ─────────────────────────────────────────────
const PENEIRAS = [
  { id: "3_4", label: '3/4"', mm: 19.1 },
  { id: "1_2", label: '1/2"', mm: 12.7 },
  { id: "3_8", label: '3/8"', mm: 9.5 },
  { id: "n4", label: "nº 4", mm: 4.76 },
  { id: "n10", label: "nº 10", mm: 2.0 },
  { id: "n40", label: "nº 40", mm: 0.42 },
  { id: "n80", label: "nº 80", mm: 0.177 },
  { id: "n200", label: "nº 200", mm: 0.074 },
  { id: "1pol", label: '1"', mm: 25.4 },
  { id: "1.5pol", label: '1 1/2"', mm: 38.1 },
  { id: "2pol", label: '2"', mm: 50.8 },
];
const FAIXAS = {
  A: { "2pol": [100, 100], "1.5pol": [95, 100], "1pol": [75, 100], "3_4": [60, 90], "1_2": null, "3_8": [35, 65], n4: [25, 50], n10: [20, 40], n40: [10, 30], n80: [5, 20], n200: [1, 8] },
  B: { "2pol": null, "1.5pol": [100, 100], "1pol": [95, 100], "3_4": [80, 100], "1_2": null, "3_8": [45, 80], n4: [28, 60], n10: [20, 45], n40: [10, 32], n80: [8, 20], n200: [3, 8] },
  C: { "2pol": null, "1.5pol": null, "1pol": null, "3_4": [100, 100], "1_2": [80, 100], "3_8": [70, 90], n4: [44, 72], n10: [22, 50], n40: [8, 26], n80: [4, 16], n200: [2, 10] },
};
const ordemFaixa = (f) => PENEIRAS.filter((p) => FAIXAS[f][p.id] !== null).sort((a, b) => b.mm - a.mm);
const TOL_TRAB = (mm) => (mm >= 9.5 ? 7 : mm >= 2.0 ? 5 : mm >= 0.177 ? 3 : 2);
const TOL_TEOR = 0.3;
const TEMP_MIN = 150, TEMP_MAX = 177;

// ─────────────────────────────────────────────
// IDENTIDADE SOLOCONTROL
// ─────────────────────────────────────────────
const C = {
  navy: "#1E2B6E", navyDark: "#151F52", red: "#E32227",
  bg: "#F0F2F7", papel: "#FFFFFF", linha: "#D8DCE6", cinza: "#F4F5F9",
  texto: "#1A2038", sub: "#5A6178",
  ok: "#1E7B3C", nok: "#C0161B",
};
const F = {
  display: "'Montserrat', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'IBM Plex Mono', monospace",
};

const num = (v) => (v === "" || v === null || v === undefined || isNaN(parseFloat(v)) ? null : parseFloat(v));
const fmt = (v, d = 1) => (v === null ? "—" : v.toFixed(d).replace(".", ","));

// ─────────────────────────────────────────────
// ARMAZENAMENTO (window.storage no Claude.ai → localStorage na Vercel → memória)
// ─────────────────────────────────────────────
const memStore = {};
const store = {
  async set(k, v) {
    try { if (typeof window !== "undefined" && window.storage) { await window.storage.set(k, v); return true; } } catch {}
    try { localStorage.setItem(k, v); return true; } catch (e) { console.error(e); }
    memStore[k] = v; return true;
  },
  async get(k) {
    try { if (typeof window !== "undefined" && window.storage) { const r = await window.storage.get(k); if (r && r.value != null) return r.value; } } catch {}
    try { const v = localStorage.getItem(k); if (v !== null) return v; } catch {}
    return memStore[k] ?? null;
  },
  async list(prefix) {
    try { if (typeof window !== "undefined" && window.storage) { const r = await window.storage.list(prefix); if (r && r.keys) return r.keys; } } catch {}
    try { return Object.keys(localStorage).filter((k) => k.startsWith(prefix)); } catch {}
    return Object.keys(memStore).filter((k) => k.startsWith(prefix));
  },
};

// comprime e CARIMBA a foto: logo + data/hora + coordenadas UTM + descrição
const lerArquivo = (file) => new Promise((res) => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(file); });

// conversão lat/lon (WGS84) → UTM, formato "22K 777925 7646586"
function toUTM(lat, lon) {
  const a = 6378137, f = 1 / 298.257223563, k0 = 0.9996;
  const e2 = f * (2 - f), ep2 = e2 / (1 - e2);
  const zone = Math.floor((lon + 180) / 6) + 1;
  const lam0 = ((zone - 1) * 6 - 180 + 3) * Math.PI / 180;
  const phi = lat * Math.PI / 180, lam = lon * Math.PI / 180;
  const N = a / Math.sqrt(1 - e2 * Math.sin(phi) ** 2);
  const T = Math.tan(phi) ** 2, Cc = ep2 * Math.cos(phi) ** 2;
  const A = Math.cos(phi) * (lam - lam0);
  const M = a * ((1 - e2 / 4 - 3 * e2 * e2 / 64 - 5 * e2 ** 3 / 256) * phi
    - (3 * e2 / 8 + 3 * e2 * e2 / 32 + 45 * e2 ** 3 / 1024) * Math.sin(2 * phi)
    + (15 * e2 * e2 / 256 + 45 * e2 ** 3 / 1024) * Math.sin(4 * phi)
    - (35 * e2 ** 3 / 3072) * Math.sin(6 * phi));
  const E = k0 * N * (A + (1 - T + Cc) * A ** 3 / 6 + (5 - 18 * T + T * T + 72 * Cc - 58 * ep2) * A ** 5 / 120) + 500000;
  let Nn = k0 * (M + N * Math.tan(phi) * (A * A / 2 + (5 - T + 9 * Cc + 4 * Cc * Cc) * A ** 4 / 24 + (61 - 58 * T + T * T + 600 * Cc - 330 * ep2) * A ** 6 / 720));
  if (lat < 0) Nn += 10000000;
  const letter = "CDEFGHJKLMNPQRSTUVWX"[Math.floor((lat + 80) / 8)] || "";
  return `${zone}${letter} ${Math.round(E)} ${Math.round(Nn)}`;
}

function pegarPosicaoUTM() {
  return new Promise((res) => {
    if (!navigator.geolocation) return res(null);
    navigator.geolocation.getCurrentPosition(
      (p) => res(toUTM(p.coords.latitude, p.coords.longitude)),
      () => res(null),
      { enableHighAccuracy: true, timeout: 7000, maximumAge: 60000 }
    );
  });
}

let logoImgCache = null;
const getLogoImg = () => new Promise((res) => {
  if (logoImgCache) return res(logoImgCache);
  const im = new window.Image();
  im.onload = () => { logoImgCache = im; res(im); };
  im.onerror = () => res(null);
  im.src = LOGO;
});

async function carimbarFoto(file, tag) {
  const [dataUrl, utm, logo] = await Promise.all([lerArquivo(file), pegarPosicaoUTM(), getLogoImg()]);
  return new Promise((res) => {
    const img = new window.Image();
    img.onload = () => {
      const max = 1050;
      const sc = Math.min(1, max / Math.max(img.width, img.height));
      const w = Math.round(img.width * sc), h = Math.round(img.height * sc);
      const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
      const ctx = cv.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      // logo no topo direito (com fundo branco arredondado próprio da arte)
      if (logo) {
        const lw = Math.round(w * 0.23), lh = Math.round(lw * (logo.height / logo.width));
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.4)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 2;
        ctx.drawImage(logo, w - lw - Math.round(w * 0.022), Math.round(w * 0.022), lw, lh);
        ctx.restore();
      }
      // carimbo de texto no rodapé direito
      const agora = new Date();
      const dataTxt = `${agora.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })} às ${agora.toLocaleTimeString("pt-BR")}`;
      const linhas = [dataTxt];
      if (utm) linhas.push(utm);
      if (tag && tag.trim()) linhas.push(tag.trim());
      const fs = Math.max(18, Math.round(w * 0.042));
      ctx.font = `600 ${fs}px Arial, Helvetica, sans-serif`;
      ctx.textAlign = "right";
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "rgba(0,0,0,0.85)"; ctx.shadowBlur = Math.round(fs * 0.38); ctx.shadowOffsetY = 1;
      linhas.forEach((l, i) => {
        ctx.fillText(l, w - Math.round(fs * 0.6), h - Math.round(fs * 0.6) - (linhas.length - 1 - i) * Math.round(fs * 1.28));
      });
      res(cv.toDataURL("image/jpeg", 0.7));
    };
    img.onerror = () => res(dataUrl);
    img.src = dataUrl;
  });
}

// ─────────────────────────────────────────────
// AVALIAÇÕES
// ─────────────────────────────────────────────
const tempOk = (t) => { const v = num(t); return v === null ? null : v >= TEMP_MIN && v <= TEMP_MAX; };
const teorOk = (proj, med) => { const p = num(proj), m = num(med); return p === null || m === null ? null : Math.abs(m - p) <= TOL_TEOR + 1e-9; };
function limites(faixa, p, proj) {
  const n = FAIXAS[faixa][p.id]; const pr = num(proj);
  let min = n ? n[0] : 0, max = n ? n[1] : 100;
  if (pr !== null) { const t = TOL_TRAB(p.mm); min = Math.max(min, pr - t); max = Math.min(max, pr + t); }
  return { min, max };
}
function granOk(faixa, p, proj, med) {
  const m = num(med); if (m === null) return null;
  const { min, max } = limites(faixa, p, proj);
  return m >= min - 1e-9 && m <= max + 1e-9;
}

// ─────────────────────────────────────────────
// UI BÁSICA
// ─────────────────────────────────────────────
function Chip({ ok, textos }) {
  if (ok === null) return <span style={{ fontFamily: F.mono, fontSize: 11, color: "#9AA0B4" }}>pendente</span>;
  const [sim, nao] = textos || ["CONFORME", "NÃO CONFORME"];
  return (
    <span className="chip" style={{ fontFamily: F.display, fontWeight: 700, fontSize: 10.5, letterSpacing: "0.06em", padding: "3px 9px", borderRadius: 20, background: ok ? C.ok : C.nok, color: "#fff", whiteSpace: "nowrap" }}>
      {ok ? sim : nao}
    </span>
  );
}
function Sec({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "26px 0 12px" }}>
      <div style={{ width: 5, height: 22, background: C.red, borderRadius: 2 }} />
      <h2 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 17, color: C.navy, margin: 0, textTransform: "uppercase", letterSpacing: "0.03em" }}>{children}</h2>
      <div style={{ flex: 1, height: 1.5, background: C.linha }} />
    </div>
  );
}
function Field({ label, children, w }) {
  return (
    <label style={{ display: "block", minWidth: 0 }}>
      <div style={{ fontFamily: F.display, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: C.sub, marginBottom: 4 }}>{label}</div>
      {children}
    </label>
  );
}
const inp = { width: "100%", padding: "10px 12px", border: `1.5px solid ${C.linha}`, borderRadius: 8, fontFamily: F.mono, fontSize: 14, background: "#fff", color: C.texto, outline: "none", boxSizing: "border-box" };
const btn = (bg, color = "#fff") => ({ background: bg, color, border: "none", padding: "11px 18px", fontFamily: F.display, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", borderRadius: 8, cursor: "pointer" });

// título de seção dentro do relatório impresso
const secRel = { fontFamily: F.display, fontWeight: 800, fontSize: 13.5, textTransform: "uppercase", color: C.navy, margin: "18px 0 6px", borderLeft: `4px solid ${C.red}`, paddingLeft: 8, letterSpacing: "0.03em" };
const th = { border: `1px solid ${C.linha}`, padding: "5px 7px", background: C.cinza, fontFamily: F.display, fontSize: 10, textTransform: "uppercase", fontWeight: 700, color: C.navy };
const td = { border: `1px solid ${C.linha}`, padding: "5px 7px", fontFamily: F.mono, fontSize: 11.5, textAlign: "center" };

// ─────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────
export default function App() {
  const [aba, setAba] = useState("dia"); // dia | cargas | relatorio
  const [relTipo, setRelTipo] = useState("diario"); // diario | id da carga
  const hoje = new Date().toISOString().slice(0, 10);

  const [dia, setDia] = useState({
    obra: "", usina: "", fiscal: "", coordenador: "", data: hoje,
    capTipo: "CAP 50/70", faixa: "C", teorProjeto: "", fotoTag: "",
  });
  const [granProj, setGranProj] = useState(Object.fromEntries(PENEIRAS.map((p) => [p.id, ""])));
  const [lab, setLab] = useState({ teorMedido: "", metodo: "Rotarex (DNER-ME 053)", gran: Object.fromEntries(PENEIRAS.map((p) => [p.id, ""])), fotosTeor: [], fotosGran: [] });
  const [cargas, setCargas] = useState([]);
  const [nova, setNova] = useState({ placa: "", destino: "", temp: "", ton: "", obs: "", fotos: [] });
  const [obsDia, setObsDia] = useState("");
  const fileRef = useRef(null);

  // ── histórico de relatórios arquivados ──
  const [arquivados, setArquivados] = useState([]);
  const [vendoHistorico, setVendoHistorico] = useState(null); // data do relatório arquivado em exibição
  const [buscaData, setBuscaData] = useState("");
  const backupRef = useRef(null);

  const carregarLista = async () => {
    const ks = await store.list("rd:");
    setArquivados(ks.map((k) => k.slice(3)).sort().reverse());
  };
  useEffect(() => { carregarLista(); }, []);

  const arquivarDia = async () => {
    if (!cargas.length) { alert("Registre pelo menos uma carga antes de arquivar."); return; }
    const snap = { dia, lab, granProj, cargas, obsDia, emitidoEm: new Date().toISOString() };
    try {
      await store.set(`rd:${dia.data}`, JSON.stringify(snap));
      await carregarLista();
      alert(`✅ Relatório de ${dia.data.split("-").reverse().join("/")} arquivado! Consulte pelo Histórico quando quiser.`);
    } catch (e) {
      alert("Não foi possível arquivar (limite de armazenamento?). Tente com menos fotos.");
    }
  };

  const abrirHistorico = async (data) => {
    if (!data) return;
    const raw = await store.get(`rd:${data}`);
    if (!raw) { alert(`Nenhum relatório arquivado em ${data.split("-").reverse().join("/")}.`); return; }
    try {
      const s = JSON.parse(raw);
      if (!vendoHistorico) backupRef.current = { dia, lab, granProj, cargas, obsDia };
      setDia(s.dia); setLab(s.lab); setGranProj(s.granProj); setCargas(s.cargas); setObsDia(s.obsDia || "");
      setVendoHistorico(data); setRelTipo("diario"); setAba("relatorio");
    } catch { alert("Arquivo corrompido."); }
  };

  const voltarHoje = () => {
    const b = backupRef.current;
    if (b) { setDia(b.dia); setLab(b.lab); setGranProj(b.granProj); setCargas(b.cargas); setObsDia(b.obsDia); }
    setVendoHistorico(null);
  };

  // ── SALVAMENTO AUTOMÁTICO: restaura ao abrir e grava a cada alteração ──
  const carregouRef = useRef(false);
  useEffect(() => {
    (async () => {
      try {
        const raw = await store.get("dia-atual");
        if (raw) {
          const s = JSON.parse(raw);
          if (s.dia) setDia(s.dia);
          if (s.lab) setLab(s.lab);
          if (s.granProj) setGranProj(s.granProj);
          if (Array.isArray(s.cargas)) setCargas(s.cargas);
          if (s.obsDia) setObsDia(s.obsDia);
        }
      } catch {}
      carregouRef.current = true;
    })();
  }, []);

  useEffect(() => {
    if (!carregouRef.current || vendoHistorico) return; // não sobrescreve o dia atual enquanto vê histórico
    const t = setTimeout(() => {
      store.set("dia-atual", JSON.stringify({ dia, lab, granProj, cargas, obsDia })).catch(() => {});
    }, 500);
    return () => clearTimeout(t);
  }, [dia, lab, granProj, cargas, obsDia, vendoHistorico]);

  // ── iniciar um novo dia de trabalho (mantém obra/usina/nomes/traço) ──
  const novoDia = () => {
    if (cargas.length && !window.confirm("Iniciar novo dia? As cargas e ensaios atuais serão limpos.\n\nSe ainda não arquivou o relatório de hoje, cancele e toque em '💾 Arquivar dia' primeiro.")) return;
    setCargas([]); setObsDia("");
    setLab((s) => ({ ...s, teorMedido: "", gran: Object.fromEntries(PENEIRAS.map((p) => [p.id, ""])) }));
    setDia((s) => ({ ...s, data: new Date().toISOString().slice(0, 10) }));
    setRelTipo("diario");
  };

  const setD = (k, v) => setDia((s) => ({ ...s, [k]: v }));
  const faixa = dia.faixa;
  const peneirasF = ordemFaixa(faixa);

  // ── fotos da nova carga ──
  const onFotos = (e) => {
    Array.from(e.target.files || []).forEach(async (f) => {
      const url = await carimbarFoto(f, dia.fotoTag);
      setNova((s) => ({ ...s, fotos: [...s.fotos, { url, legenda: "", hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) }] }));
    });
    e.target.value = "";
  };

  // ── fotos dos ensaios de laboratório ──
  const fileTeorRef = useRef(null);
  const fileGranRef = useRef(null);
  const onFotosLab = (campo) => (e) => {
    Array.from(e.target.files || []).forEach(async (f) => {
      const url = await carimbarFoto(f, dia.fotoTag);
      setLab((s) => ({ ...s, [campo]: [...(s[campo] || []), { url, hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) }] }));
    });
    e.target.value = "";
  };
  const rmFotoLab = (campo, i) => setLab((s) => ({ ...s, [campo]: (s[campo] || []).filter((_, j) => j !== i) }));

  const FotosLab = ({ campo, refInput }) => (
    <div>
      <input ref={refInput} type="file" accept="image/*" capture="environment" multiple onChange={onFotosLab(campo)} style={{ display: "none" }} />
      <button onClick={() => refInput.current?.click()} style={{ width: "100%", marginTop: 10, padding: 11, border: `2px dashed ${C.navy}`, borderRadius: 8, background: "#F7F8FC", cursor: "pointer", fontFamily: F.display, fontWeight: 700, fontSize: 12.5, textTransform: "uppercase", color: C.navy }}>
        📷 Foto do ensaio ({(lab[campo] || []).length})
      </button>
      {(lab[campo] || []).length > 0 && (
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
          {(lab[campo] || []).map((f, i) => (
            <div key={i} style={{ position: "relative" }}>
              <img src={f.url} alt="" style={{ width: 74, height: 74, objectFit: "cover", borderRadius: 8, border: `1px solid ${C.linha}` }} />
              <button onClick={() => rmFotoLab(campo, i)} style={{ position: "absolute", top: -6, right: -6, width: 20, height: 20, borderRadius: 10, border: "none", background: C.nok, color: "#fff", fontSize: 11, cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const addCarga = () => {
    if (num(nova.temp) === null) { alert("Informe a temperatura da massa."); return; }
    const numero = cargas.length + 1;
    setCargas((s) => [...s, { id: Date.now(), numero, hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }), ...nova }]);
    setNova({ placa: "", destino: nova.destino, temp: "", ton: nova.ton, obs: "", fotos: [] });
  };
  const rmCarga = (id) => setCargas((s) => s.filter((c) => c.id !== id).map((c, i) => ({ ...c, numero: i + 1 })));

  // ── estatísticas ──
  const temps = cargas.map((c) => num(c.temp)).filter((v) => v !== null);
  const tMed = temps.length ? temps.reduce((a, b) => a + b, 0) / temps.length : null;
  const tMin = temps.length ? Math.min(...temps) : null;
  const tMax = temps.length ? Math.max(...temps) : null;
  const tonTotal = cargas.map((c) => num(c.ton)).filter((v) => v !== null).reduce((a, b) => a + b, 0);
  const liberadas = cargas.filter((c) => tempOk(c.temp) === true).length;
  const retidas = cargas.filter((c) => tempOk(c.temp) === false).length;
  const okTeor = teorOk(dia.teorProjeto, lab.teorMedido);
  const granResults = peneirasF.map((p) => ({ p, ok: granOk(faixa, p, granProj[p.id], lab.gran[p.id]) }));
  const granAval = granResults.filter((r) => r.ok !== null);
  const granForam = granAval.filter((r) => r.ok === false).map((r) => r.p.label);
  const granTodasOk = granAval.length > 0 && granForam.length === 0;
  const diaOk = retidas === 0 && okTeor !== false && granForam.length === 0 && cargas.length > 0;

  // ── análise técnica automática ──
  function analise() {
    const par = [];
    if (cargas.length) {
      par.push(`Foram produzidas e expedidas ${cargas.length} carga(s) de concreto asfáltico (${dia.capTipo}, Faixa ${faixa} — DNIT 031/2006-ES)${tonTotal > 0 ? `, totalizando aproximadamente ${fmt(tonTotal, 1)} t de massa` : ""}. Do total, ${liberadas} carga(s) foram liberadas e ${retidas} retida(s) por não conformidade de temperatura.`);
      if (tMed !== null) par.push(`As temperaturas de saída da usina variaram entre ${fmt(tMin)} °C e ${fmt(tMax)} °C, com média de ${fmt(tMed)} °C, ${retidas === 0 ? `mantendo-se integralmente dentro do intervalo especificado (${TEMP_MIN}–${TEMP_MAX} °C), o que assegura trabalhabilidade adequada para o espalhamento e a compactação na pista` : `sendo registradas ${retidas} ocorrência(s) fora do intervalo especificado (${TEMP_MIN}–${TEMP_MAX} °C)`}.`);
    }
    const p = num(dia.teorProjeto), m = num(lab.teorMedido);
    if (p !== null && m !== null) {
      const dv = m - p;
      par.push(`O teor de ligante determinado pelo método ${lab.metodo} foi de ${fmt(m, 2)}%, com desvio de ${dv >= 0 ? "+" : ""}${fmt(dv, 2)}% em relação ao teor de projeto (${fmt(p, 2)}%), ${okTeor ? "dentro" : "FORA"} da tolerância de ±0,3% estabelecida pela DNIT 031/2006-ES.`);
    }
    if (granAval.length) {
      par.push(granForam.length === 0
        ? `A análise granulométrica do agregado recuperado após extração manteve-se integralmente dentro da faixa de trabalho (projeto ± tolerâncias de 7/5/3/2%) e dos limites da Faixa ${faixa}, indicando estabilidade na dosagem dos silos frios e no processo de usinagem.`
        : `A análise granulométrica apresentou desvio(s) fora da faixa de trabalho na(s) peneira(s) ${granForam.join(", ")}, recomendando-se verificação da calibração das comportas dos silos frios e das condições dos agregados no estoque.`);
    }
    if (cargas.length) {
      par.push(diaOk
        ? `CONCLUSÃO: a produção do dia atende aos requisitos da especificação DNIT 031/2006-ES nos parâmetros verificados (temperatura, teor de ligante e granulometria), estando o material APTO para aplicação.`
        : `CONCLUSÃO: foram registradas não conformidades nos parâmetros verificados, conforme detalhado acima, com as devidas ações de retenção/notificação adotadas no ato.`);
    }
    return par;
  }

  const numRel = `RD-${dia.data.replaceAll("-", "")}`;
  const cargaSel = cargas.find((c) => String(c.id) === String(relTipo));

  // ═════════════════════════════════════════
  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: F.body, color: C.texto }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        input:focus, textarea:focus, select:focus { border-color: ${C.navy} !important; }
        select { -webkit-appearance: none; appearance: none;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="%231E2B6E" stroke-width="2" fill="none" stroke-linecap="round"/></svg>');
          background-repeat: no-repeat; background-position: right 10px center; padding-right: 30px !important; }
        input[type="date"], input[type="time"] { -webkit-appearance: none; appearance: none;
          min-height: 44px; min-width: 0; text-align: left; display: block; }
        .print-area table { table-layout: fixed; width: 100%; }
        .print-area th, .print-area td { word-wrap: break-word; overflow-wrap: break-word; }
        @media (max-width: 640px) {
          .print-area { padding: 16px 10px !important; }
          .print-area th, .print-area td { font-size: 9px !important; padding: 3px 2px !important; }
          .chip { font-size: 7.5px !important; padding: 2px 4px !important; letter-spacing: 0.02em !important; }
        }
        @media print {
          @page { size: A4; margin: 11mm; }
          body { background:#fff !important; }
          .no-print { display:none !important; }
          .print-area { box-shadow:none !important; margin:0 !important; max-width:100% !important; padding:0 !important; }
          main { padding:0 !important; }
          table, figure { break-inside: avoid; }
        }
      `}</style>

      {/* ── CABEÇALHO ── */}
      <header className="no-print" style={{ background: C.navy, paddingTop: "calc(env(safe-area-inset-top, 0px) + 8px)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "10px 16px 12px", display: "flex", alignItems: "center", gap: 14 }}>
          <img src={LOGO} alt="Solocontrol" style={{ height: 46, borderRadius: 8, background: "#fff", padding: 3 }} />
          <div>
            <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 17, color: "#fff", lineHeight: 1.1, textTransform: "uppercase" }}>Controle Tecnológico — Usina</div>
            <div style={{ fontFamily: F.mono, fontSize: 10.5, color: "#AEB8E8", marginTop: 2 }}>Solocontrol · Qualidade que constrói confiança</div>
          </div>
        </div>
        <nav style={{ maxWidth: 880, margin: "0 auto", padding: "0 16px", display: "flex", gap: 4 }}>
          {[["dia", "Dados do dia + Lab"], ["cargas", `Cargas (${cargas.length})`], ["relatorio", "Relatórios"]].map(([k, l]) => (
            <button key={k} onClick={() => setAba(k)} style={{
              flex: 1, padding: "11px 6px", border: "none", cursor: "pointer",
              fontFamily: F.display, fontWeight: 700, fontSize: 12.5, textTransform: "uppercase", letterSpacing: "0.04em",
              background: aba === k ? C.bg : "transparent", color: aba === k ? C.navy : "#AEB8E8",
              borderRadius: "10px 10px 0 0",
            }}>{l}</button>
          ))}
        </nav>
      </header>

      {/* ═════════ ABA 1 — DADOS DO DIA + LABORATÓRIO ═════════ */}
      {aba === "dia" && (
        <main className="no-print" style={{ maxWidth: 880, margin: "0 auto", padding: "6px 16px 60px" }}>
          <Sec>Identificação do dia</Sec>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))", gap: 12 }}>
            <Field label="Obra / Contrato"><input style={inp} value={dia.obra} onChange={(e) => setD("obra", e.target.value)} placeholder="Ex.: SP-326 km 108–115" /></Field>
            <Field label="Usina"><input style={inp} value={dia.usina} onChange={(e) => setD("usina", e.target.value)} placeholder="Ex.: Usina Jaboticabal" /></Field>
            <Field label="Fiscal de qualidade"><input style={inp} value={dia.fiscal} onChange={(e) => setD("fiscal", e.target.value)} placeholder="Seu nome" /></Field>
            <Field label="Coordenador"><input style={inp} value={dia.coordenador} onChange={(e) => setD("coordenador", e.target.value)} /></Field>
            <Field label="Data"><input type="date" style={inp} value={dia.data} onChange={(e) => setD("data", e.target.value)} /></Field>
            <Field label="Ligante">
              <select style={inp} value={dia.capTipo} onChange={(e) => setD("capTipo", e.target.value)}>
                <option>CAP 30/45</option><option>CAP 50/70</option><option>CAP 85/100</option>
              </select>
            </Field>
            <Field label="Faixa (DNIT 031)">
              <select style={inp} value={dia.faixa} onChange={(e) => setD("faixa", e.target.value)}>
                <option value="A">Faixa A</option><option value="B">Faixa B</option><option value="C">Faixa C</option>
              </select>
            </Field>
            <Field label="Teor de projeto (%)"><input type="number" step="0.1" inputMode="decimal" style={inp} value={dia.teorProjeto} onChange={(e) => setD("teorProjeto", e.target.value)} placeholder="Ex.: 5.0" /></Field>
            <Field label="Carimbo das fotos (usina / descrição)"><input style={inp} value={dia.fotoTag} onChange={(e) => setD("fotoTag", e.target.value)} placeholder="Ex.: #USINA AUTEM" /></Field>
          </div>

          <Sec>Ensaio — Teor de ligante</Sec>
          <div style={{ background: "#fff", border: `1.5px solid ${okTeor === false ? C.nok : C.linha}`, borderRadius: 10, padding: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, alignItems: "end" }}>
              <Field label="Teor medido (%)"><input type="number" step="0.01" inputMode="decimal" style={inp} value={lab.teorMedido} onChange={(e) => setLab((s) => ({ ...s, teorMedido: e.target.value }))} placeholder="Ex.: 5.08" /></Field>
              <Field label="Método">
                <select style={inp} value={lab.metodo} onChange={(e) => setLab((s) => ({ ...s, metodo: e.target.value }))}>
                  <option>Rotarex (DNER-ME 053)</option><option>Ignição (NBR 16972)</option><option>Refluxo / Soxhlet</option>
                </select>
              </Field>
              <div style={{ paddingBottom: 4 }}>
                <div style={{ fontFamily: F.mono, fontSize: 11.5, color: C.sub, marginBottom: 6 }}>Tolerância ±0,3% · Desvio: {num(dia.teorProjeto) !== null && num(lab.teorMedido) !== null ? `${num(lab.teorMedido) - num(dia.teorProjeto) >= 0 ? "+" : ""}${fmt(num(lab.teorMedido) - num(dia.teorProjeto), 2)}%` : "—"}</div>
                <Chip ok={okTeor} />
              </div>
            </div>
            <FotosLab campo="fotosTeor" refInput={fileTeorRef} />
          </div>

          <Sec>Ensaio — Granulometria (Faixa {faixa})</Sec>
          <div style={{ background: "#fff", border: `1.5px solid ${C.linha}`, borderRadius: 10, overflow: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr>
                {["Peneira", "Norma (%)", "Projeto (%)", "Medido (%)", "Situação"].map((h) => <th key={h} style={{ ...th, padding: "8px 8px" }}>{h}</th>)}
              </tr></thead>
              <tbody>
                {peneirasF.map((p, i) => {
                  const n = FAIXAS[faixa][p.id];
                  const ok = granOk(faixa, p, granProj[p.id], lab.gran[p.id]);
                  return (
                    <tr key={p.id} style={{ background: i % 2 ? "#FAFBFD" : "#fff" }}>
                      <td style={{ ...td, fontWeight: 600, textAlign: "left" }}>{p.label}</td>
                      <td style={td}>{n[0]}–{n[1]}</td>
                      <td style={td}><input type="number" inputMode="decimal" style={{ ...inp, width: 74, padding: "6px 8px", textAlign: "center" }} value={granProj[p.id]} onChange={(e) => setGranProj((s) => ({ ...s, [p.id]: e.target.value }))} placeholder="—" /></td>
                      <td style={td}><input type="number" inputMode="decimal" style={{ ...inp, width: 74, padding: "6px 8px", textAlign: "center", borderColor: ok === false ? C.nok : C.linha }} value={lab.gran[p.id]} onChange={(e) => setLab((s) => ({ ...s, gran: { ...s.gran, [p.id]: e.target.value } }))} placeholder="—" /></td>
                      <td style={td}><Chip ok={ok} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <FotosLab campo="fotosGran" refInput={fileGranRef} />

          <Sec>Observações do dia</Sec>
          <textarea rows={3} style={{ ...inp, fontFamily: F.body, resize: "vertical" }} value={obsDia} onChange={(e) => setObsDia(e.target.value)} placeholder="Clima, ajustes na usina, ocorrências, visitas..." />

          <button onClick={() => setAba("cargas")} style={{ ...btn(C.navy), width: "100%", marginTop: 24, padding: 15, fontSize: 15 }}>Ir para lançamento de cargas →</button>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontFamily: F.mono, fontSize: 11, color: C.ok }}>💾 Salvamento automático ativo — pode fechar o app sem medo</span>
            <button onClick={novoDia} style={{ ...btn("transparent", C.nok), border: `1.5px solid ${C.nok}`, padding: "8px 14px", fontSize: 11 }}>🧹 Iniciar novo dia</button>
          </div>
        </main>
      )}

      {/* ═════════ ABA 2 — CARGAS ═════════ */}
      {aba === "cargas" && (
        <main className="no-print" style={{ maxWidth: 880, margin: "0 auto", padding: "6px 16px 60px" }}>
          <Sec>Nova carga — nº {cargas.length + 1}</Sec>
          <div style={{ background: "#fff", border: `1.5px solid ${C.linha}`, borderRadius: 10, padding: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
              <Field label="Placa"><input style={{ ...inp, textTransform: "uppercase" }} value={nova.placa} onChange={(e) => setNova((s) => ({ ...s, placa: e.target.value.toUpperCase() }))} placeholder="ABC-1D23" /></Field>
              <Field label="Destino / Frente"><input style={inp} value={nova.destino} onChange={(e) => setNova((s) => ({ ...s, destino: e.target.value }))} placeholder="Ex.: km 110" /></Field>
              <Field label="Temp. massa (°C)">
                <input type="number" inputMode="decimal" style={{ ...inp, fontSize: 19, fontWeight: 600, borderColor: tempOk(nova.temp) === false ? C.nok : C.linha }} value={nova.temp} onChange={(e) => setNova((s) => ({ ...s, temp: e.target.value }))} placeholder="—" />
              </Field>
              <Field label="Massa (t)"><input type="number" inputMode="decimal" style={inp} value={nova.ton} onChange={(e) => setNova((s) => ({ ...s, ton: e.target.value }))} placeholder="Ex.: 27" /></Field>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
              <span style={{ fontFamily: F.mono, fontSize: 12, color: C.sub }}>Espec.: {TEMP_MIN}–{TEMP_MAX} °C</span>
              <Chip ok={tempOk(nova.temp)} textos={["LIBERAR", "RETER"]} />
            </div>
            <input ref={fileRef} type="file" accept="image/*" capture="environment" multiple onChange={onFotos} style={{ display: "none" }} />
            <button onClick={() => fileRef.current?.click()} style={{ width: "100%", marginTop: 12, padding: 13, border: `2px dashed ${C.navy}`, borderRadius: 8, background: "#F7F8FC", cursor: "pointer", fontFamily: F.display, fontWeight: 700, fontSize: 13, textTransform: "uppercase", color: C.navy }}>
              📷 Foto da carga ({nova.fotos.length})
            </button>
            {nova.fotos.length > 0 && (
              <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                {nova.fotos.map((f, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    <img src={f.url} alt="" style={{ width: 74, height: 74, objectFit: "cover", borderRadius: 8, border: `1px solid ${C.linha}` }} />
                    <button onClick={() => setNova((s) => ({ ...s, fotos: s.fotos.filter((_, j) => j !== i) }))} style={{ position: "absolute", top: -6, right: -6, width: 20, height: 20, borderRadius: 10, border: "none", background: C.nok, color: "#fff", fontSize: 11, cursor: "pointer", lineHeight: 1 }}>×</button>
                  </div>
                ))}
              </div>
            )}
            <Field label="Observação da carga"><input style={{ ...inp, marginTop: 4, fontFamily: F.body }} value={nova.obs} onChange={(e) => setNova((s) => ({ ...s, obs: e.target.value }))} placeholder="Opcional" /></Field>
            <button onClick={addCarga} style={{ ...btn(C.red), width: "100%", marginTop: 14, padding: 14, fontSize: 15 }}>+ Registrar carga (hora automática)</button>
          </div>

          {cargas.length > 0 && (
            <>
              <Sec>Cargas do dia — {liberadas} liberada(s) · {retidas} retida(s){tonTotal > 0 ? ` · ${fmt(tonTotal, 1)} t` : ""}</Sec>
              <div style={{ display: "grid", gap: 10 }}>
                {[...cargas].reverse().map((c) => {
                  const ok = tempOk(c.temp);
                  return (
                    <div key={c.id} style={{ background: "#fff", border: `1.5px solid ${ok === false ? C.nok : C.linha}`, borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 20, color: C.navy, minWidth: 44 }}>#{String(c.numero).padStart(2, "0")}</div>
                      <div style={{ flex: 1, minWidth: 150 }}>
                        <div style={{ fontFamily: F.mono, fontSize: 13, fontWeight: 600 }}>{c.hora} · {c.placa || "sem placa"} · <span style={{ color: num(c.temp) > TEMP_MAX || num(c.temp) < TEMP_MIN ? C.nok : C.navy }}>{c.temp} °C</span>{num(c.ton) ? ` · ${c.ton} t` : ""}</div>
                        <div style={{ fontFamily: F.body, fontSize: 12, color: C.sub }}>{c.destino || "—"} {c.fotos.length > 0 && `· 📷 ${c.fotos.length}`}</div>
                      </div>
                      <Chip ok={ok} textos={["LIBERADA", "RETIDA"]} />
                      <button onClick={() => { setRelTipo(String(c.id)); setAba("relatorio"); }} style={{ ...btn("#EDF0FA", C.navy), padding: "8px 12px", fontSize: 11 }}>Boletim</button>
                      <button onClick={() => rmCarga(c.id)} style={{ ...btn("transparent", C.nok), padding: "8px 6px", fontSize: 11, border: `1px solid ${C.nok}` }}>×</button>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </main>
      )}

      {/* ═════════ ABA 3 — RELATÓRIOS ═════════ */}
      {aba === "relatorio" && (
        <main style={{ padding: "14px 12px 60px" }}>
          <div className="no-print" style={{ maxWidth: 800, margin: "0 auto 10px", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <select style={{ ...inp, width: "auto", flex: 1, minWidth: 200 }} value={relTipo} onChange={(e) => setRelTipo(e.target.value)}>
              <option value="diario">📊 Relatório diário consolidado</option>
              {cargas.map((c) => <option key={c.id} value={c.id}>🚚 Boletim carga #{String(c.numero).padStart(2, "0")} — {c.placa || c.hora}</option>)}
            </select>
            {!vendoHistorico && <button onClick={arquivarDia} style={btn(C.navy)}>💾 Arquivar dia</button>}
            <button onClick={() => window.print()} style={btn(C.red)}>Exportar PDF</button>
          </div>

          {vendoHistorico && (
            <div className="no-print" style={{ maxWidth: 800, margin: "0 auto 10px", background: "#FFF6DE", border: "1.5px solid #E8C35A", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: 13, color: "#7A5A00" }}>
                📁 Você está vendo o relatório arquivado de {vendoHistorico.split("-").reverse().join("/")}
              </span>
              <button onClick={voltarHoje} style={{ ...btn("#7A5A00"), padding: "7px 14px", fontSize: 11, marginLeft: "auto" }}>← Voltar ao dia atual</button>
            </div>
          )}

          <div className="no-print" style={{ maxWidth: 800, margin: "0 auto 14px", background: "#fff", border: `1.5px solid ${C.linha}`, borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 12.5, textTransform: "uppercase", color: C.navy, marginBottom: 8 }}>🗂 Histórico de relatórios</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <input type="date" style={{ ...inp, width: "auto" }} value={buscaData} onChange={(e) => setBuscaData(e.target.value)} />
              <button onClick={() => abrirHistorico(buscaData)} style={btn(C.navy)}>Buscar</button>
              <span style={{ fontFamily: F.mono, fontSize: 11, color: C.sub }}>{arquivados.length} dia(s) arquivado(s)</span>
            </div>
            {arquivados.length > 0 && (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
                {arquivados.map((d) => (
                  <button key={d} onClick={() => abrirHistorico(d)} style={{
                    fontFamily: F.mono, fontSize: 12, padding: "6px 12px", borderRadius: 20, cursor: "pointer",
                    border: `1.5px solid ${vendoHistorico === d ? C.navy : C.linha}`,
                    background: vendoHistorico === d ? C.navy : "#F7F8FC", color: vendoHistorico === d ? "#fff" : C.navy, fontWeight: 600,
                  }}>{d.split("-").reverse().join("/")}</button>
                ))}
              </div>
            )}
          </div>

          <div className="print-area" style={{ maxWidth: 800, margin: "0 auto", background: "#fff", padding: "30px 36px", boxShadow: "0 2px 18px rgba(20,30,80,0.14)", borderRadius: 4 }}>
            {/* Cabeçalho institucional */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, borderBottom: `3px solid ${C.navy}`, paddingBottom: 12 }}>
              <img src={LOGO} alt="Solocontrol" style={{ height: 58 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 17, color: C.navy, textTransform: "uppercase", lineHeight: 1.15 }}>
                  {relTipo === "diario" ? "Relatório Diário de Controle Tecnológico" : `Boletim de Liberação de Carga #${cargaSel ? String(cargaSel.numero).padStart(2, "0") : ""}`}
                </div>
                <div style={{ fontFamily: F.mono, fontSize: 9.5, color: C.sub, marginTop: 3 }}>
                  Usina de asfalto · Ref. DNIT 031/2006-ES · DNER-ME 053 · DNER-ME 083
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: F.mono, fontSize: 10 }}>Documento nº</div>
                <div style={{ fontFamily: F.mono, fontWeight: 600, fontSize: 13 }}>{relTipo === "diario" ? numRel : `${numRel}-C${cargaSel ? String(cargaSel.numero).padStart(2, "0") : ""}`}</div>
                <div style={{ marginTop: 6, display: "inline-block", padding: "5px 12px", border: `2.5px solid ${(relTipo === "diario" ? diaOk : tempOk(cargaSel?.temp)) ? C.ok : C.nok}`, color: (relTipo === "diario" ? diaOk : tempOk(cargaSel?.temp)) ? C.ok : C.nok, fontFamily: F.display, fontWeight: 800, fontSize: 13, textTransform: "uppercase", borderRadius: 4, letterSpacing: "0.06em" }}>
                  {relTipo === "diario" ? (diaOk ? "Conforme" : "Com ressalvas") : (tempOk(cargaSel?.temp) ? "Carga liberada" : "Carga retida")}
                </div>
              </div>
            </div>

            {/* Identificação */}
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 12 }}>
              <tbody>
                {[
                  ["Obra / Contrato", dia.obra || "—", "Usina", dia.usina || "—"],
                  ["Fiscal de qualidade", dia.fiscal || "—", "Coordenador", dia.coordenador || "—"],
                  ["Data", dia.data.split("-").reverse().join("/"), "Ligante / Faixa", `${dia.capTipo} · Faixa ${faixa}`],
                  ...(cargaSel ? [["Hora de saída", cargaSel.hora, "Placa / Destino", `${cargaSel.placa || "—"} · ${cargaSel.destino || "—"}`]] : []),
                ].map((r, i) => (
                  <tr key={i}>
                    <td style={{ ...th, width: "17%", textAlign: "left" }}>{r[0]}</td><td style={{ ...td, width: "33%", textAlign: "left", fontFamily: F.body, fontSize: 11.5 }}>{r[1]}</td>
                    <td style={{ ...th, width: "17%", textAlign: "left" }}>{r[2]}</td><td style={{ ...td, width: "33%", textAlign: "left", fontFamily: F.body, fontSize: 11.5 }}>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ── RELATÓRIO DIÁRIO ── */}
            {relTipo === "diario" && (
              <>
                <div style={secRel}>1 · Resumo da produção</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
                  {[["Cargas", cargas.length], ["Liberadas", liberadas], ["Retidas", retidas], ["Temp. média", tMed !== null ? `${fmt(tMed)} °C` : "—"], ["Massa total", tonTotal > 0 ? `${fmt(tonTotal, 1)} t` : "—"]].map(([l, v]) => (
                    <div key={l} style={{ border: `1px solid ${C.linha}`, borderRadius: 6, padding: "8px 6px", textAlign: "center" }}>
                      <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 18, color: l === "Retidas" && v > 0 ? C.nok : C.navy }}>{v}</div>
                      <div style={{ fontFamily: F.display, fontSize: 9, textTransform: "uppercase", color: C.sub, fontWeight: 700 }}>{l}</div>
                    </div>
                  ))}
                </div>

                <div style={secRel}>2 · Registro de cargas expedidas</div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead><tr>{[["Nº", "8%"], ["Hora", "12%"], ["Placa", "16%"], ["Temp. (°C)", "13%"], ["Massa (t)", "12%"], ["Destino", "21%"], ["Situação", "18%"]].map(([h, w]) => <th key={h} style={{ ...th, width: w }}>{h}</th>)}</tr></thead>
                  <tbody>
                    {cargas.map((c) => (
                      <tr key={c.id}>
                        <td style={td}>{String(c.numero).padStart(2, "0")}</td>
                        <td style={td}>{c.hora}</td>
                        <td style={td}>{c.placa || "—"}</td>
                        <td style={{ ...td, fontWeight: 600, color: tempOk(c.temp) === false ? C.nok : C.texto }}>{c.temp}</td>
                        <td style={td}>{c.ton || "—"}</td>
                        <td style={{ ...td, fontFamily: F.body }}>{c.destino || "—"}</td>
                        <td style={td}><Chip ok={tempOk(c.temp)} textos={["LIBERADA", "RETIDA"]} /></td>
                      </tr>
                    ))}
                    {cargas.length === 0 && <tr><td colSpan={7} style={{ ...td, color: C.sub }}>Nenhuma carga registrada</td></tr>}
                  </tbody>
                </table>

                <div style={secRel}>3 · Ensaios de laboratório</div>
                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 8 }}>
                  <thead><tr>{[["Ensaio", "30%"], ["Projeto", "14%"], ["Tolerância", "14%"], ["Resultado", "14%"], ["Situação", "28%"]].map(([h, w]) => <th key={h} style={{ ...th, width: w }}>{h}</th>)}</tr></thead>
                  <tbody><tr>
                    <td style={{ ...td, textAlign: "left", fontFamily: F.body }}>Teor de ligante<div style={{ fontSize: 8.5, color: C.sub }}>{lab.metodo}</div></td>
                    <td style={td}>{dia.teorProjeto ? `${dia.teorProjeto}%` : "—"}</td>
                    <td style={td}>±0,3%</td>
                    <td style={{ ...td, fontWeight: 600 }}>{lab.teorMedido ? `${lab.teorMedido}%` : "—"}</td>
                    <td style={td}><Chip ok={okTeor} /></td>
                  </tr></tbody>
                </table>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead><tr>{[["Peneira", "13%"], ["Norma", "16%"], ["Projeto", "13%"], ["Limite aplicado", "23%"], ["Medido", "13%"], ["Situação", "22%"]].map(([h, w]) => <th key={h} style={{ ...th, width: w }}>{h}</th>)}</tr></thead>
                  <tbody>
                    {peneirasF.map((p) => {
                      const n = FAIXAS[faixa][p.id]; const l = limites(faixa, p, granProj[p.id]);
                      const ok = granOk(faixa, p, granProj[p.id], lab.gran[p.id]);
                      return (
                        <tr key={p.id}>
                          <td style={td}>{p.label}</td><td style={td}>{n[0]}–{n[1]}%</td>
                          <td style={td}>{granProj[p.id] ? `${granProj[p.id]}%` : "—"}</td>
                          <td style={td}>{fmt(l.min)}–{fmt(l.max)}%</td>
                          <td style={{ ...td, fontWeight: 600 }}>{lab.gran[p.id] ? `${lab.gran[p.id]}%` : "—"}</td>
                          <td style={td}><Chip ok={ok} /></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {((lab.fotosTeor || []).length > 0 || (lab.fotosGran || []).length > 0) && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 8, marginTop: 8 }}>
                    {(lab.fotosTeor || []).map((f, i) => (
                      <figure key={`t${i}`} style={{ margin: 0, border: `1px solid ${C.linha}`, borderRadius: 6, overflow: "hidden" }}>
                        <img src={f.url} alt="" style={{ width: "100%", height: 105, objectFit: "cover", display: "block" }} />
                        <figcaption style={{ fontFamily: F.mono, fontSize: 8.5, padding: "4px 7px", color: C.sub }}>Ensaio teor de ligante · {f.hora}</figcaption>
                      </figure>
                    ))}
                    {(lab.fotosGran || []).map((f, i) => (
                      <figure key={`g${i}`} style={{ margin: 0, border: `1px solid ${C.linha}`, borderRadius: 6, overflow: "hidden" }}>
                        <img src={f.url} alt="" style={{ width: "100%", height: 105, objectFit: "cover", display: "block" }} />
                        <figcaption style={{ fontFamily: F.mono, fontSize: 8.5, padding: "4px 7px", color: C.sub }}>Ensaio granulometria · {f.hora}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}

                <div style={secRel}>4 · Análise técnica</div>
                <div style={{ border: `1px solid ${C.linha}`, borderRadius: 6, padding: "10px 12px", fontFamily: F.body, fontSize: 11.5, lineHeight: 1.55 }}>
                  {analise().length ? analise().map((p, i) => <p key={i} style={{ margin: "0 0 7px" }}>{p}</p>) : <span style={{ color: C.sub }}>Preencha os dados para gerar a análise automática.</span>}
                  {obsDia && <p style={{ margin: "7px 0 0" }}><b>Observações do fiscal:</b> {obsDia}</p>}
                </div>

                {cargas.some((c) => c.fotos.length) && (
                  <>
                    <div style={secRel}>5 · Registro fotográfico</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8 }}>
                      {cargas.flatMap((c) => c.fotos.map((f, i) => (
                        <figure key={`${c.id}-${i}`} style={{ margin: 0, border: `1px solid ${C.linha}`, borderRadius: 6, overflow: "hidden" }}>
                          <img src={f.url} alt="" style={{ width: "100%", height: 115, objectFit: "cover", display: "block" }} />
                          <figcaption style={{ fontFamily: F.mono, fontSize: 8.5, padding: "4px 7px", color: C.sub }}>Carga #{String(c.numero).padStart(2, "0")} · {f.hora}{f.legenda ? ` — ${f.legenda}` : ""}</figcaption>
                        </figure>
                      )))}
                    </div>
                  </>
                )}
              </>
            )}

            {/* ── BOLETIM POR CARGA ── */}
            {relTipo !== "diario" && cargaSel && (
              <>
                <div style={secRel}>1 · Temperatura da massa na saída</div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead><tr>{[["Especificação", "40%"], ["Medido", "18%"], ["Massa (t)", "14%"], ["Situação", "28%"]].map(([h, w]) => <th key={h} style={{ ...th, width: w }}>{h}</th>)}</tr></thead>
                  <tbody><tr>
                    <td style={td}>{TEMP_MIN}–{TEMP_MAX} °C (nunca &gt; {TEMP_MAX} °C)</td>
                    <td style={{ ...td, fontWeight: 700, fontSize: 15 }}>{cargaSel.temp} °C</td>
                    <td style={td}>{cargaSel.ton || "—"}</td>
                    <td style={td}><Chip ok={tempOk(cargaSel.temp)} textos={["LIBERADA", "RETIDA"]} /></td>
                  </tr></tbody>
                </table>
                <div style={secRel}>2 · Ensaios de referência do dia</div>
                <div style={{ fontFamily: F.body, fontSize: 11.5, border: `1px solid ${C.linha}`, borderRadius: 6, padding: "8px 12px", lineHeight: 1.5 }}>
                  Teor de ligante do dia: <b>{lab.teorMedido ? `${lab.teorMedido}%` : "—"}</b> (projeto {dia.teorProjeto || "—"}%, ±0,3%) — <Chip ok={okTeor} />. Granulometria Faixa {faixa}: {granAval.length === 0 ? "não ensaiada" : granTodasOk ? "conforme em todas as peneiras" : `desvio em ${granForam.join(", ")}`}.
                </div>
                {cargaSel.fotos.length > 0 && (
                  <>
                    <div style={secRel}>3 · Registro fotográfico da carga</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8 }}>
                      {cargaSel.fotos.map((f, i) => (
                        <figure key={i} style={{ margin: 0, border: `1px solid ${C.linha}`, borderRadius: 6, overflow: "hidden" }}>
                          <img src={f.url} alt="" style={{ width: "100%", height: 120, objectFit: "cover", display: "block" }} />
                          <figcaption style={{ fontFamily: F.mono, fontSize: 8.5, padding: "4px 7px", color: C.sub }}>Foto {String(i + 1).padStart(2, "0")} · {f.hora}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </>
                )}
                {cargaSel.obs && <div style={{ marginTop: 10, fontFamily: F.body, fontSize: 11.5 }}><b>Observação:</b> {cargaSel.obs}</div>}
              </>
            )}

            {/* Assinaturas */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 46, marginTop: 44 }}>
              {[`Fiscal de qualidade${dia.fiscal ? ` — ${dia.fiscal}` : ""}`, `Coordenador${dia.coordenador ? ` — ${dia.coordenador}` : ""}`].map((t) => (
                <div key={t} style={{ textAlign: "center" }}>
                  <div style={{ borderTop: `1.5px solid ${C.texto}`, paddingTop: 5, fontFamily: F.mono, fontSize: 9.5 }}>{t}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 18, fontFamily: F.mono, fontSize: 8, color: "#9AA0B4", borderTop: `1px solid ${C.linha}`, paddingTop: 7, display: "flex", justifyContent: "space-between" }}>
              <span>Solocontrol — Qualidade que constrói confiança</span>
              <span>Valores de referência DNIT 031/2006-ES · confirmar com o projeto executivo</span>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
