/**
 * ============================================================
 *  ARQUIVO DE CONFIGURAÇÃO — LANDING PAGE CORINGA
 *  Edite apenas este arquivo para personalizar a página
 *  para o seu cliente.
 * ============================================================
 */

const CONFIG = {

  // ─── IDENTIDADE DA EMPRESA ───────────────────────────────
  COMPANY_NAME:        "[NOME DA EMPRESA]",
  PRODUCT_NAME:        "[NOME DO PRODUTO]",
  PRODUCT_DESCRIPTION: "[DESCRIÇÃO DO PRODUTO]",
  TAGLINE:             "[FRASE DE IMPACTO DO NEGÓCIO]",

  // ─── PREÇOS ──────────────────────────────────────────────
  PRODUCT_PRICE_ORIGINAL: "R$ [PREÇO ORIGINAL]",
  PRODUCT_PRICE_CURRENT:  "R$ [PREÇO ATUAL]",
  PRODUCT_INSTALLMENTS:   "[X]x de R$ [PARCELA]",

  // ─── LINKS ───────────────────────────────────────────────
  WHATSAPP_NUMBER:  "5500000000000",
  WHATSAPP_MESSAGE: "Olá! Gostaria de saber mais sobre [NOME DO PRODUTO].",
  PURCHASE_LINK:    "#comprar",
  INSTAGRAM_LINK:   "https://instagram.com/",
  FACEBOOK_LINK:    "https://facebook.com/",
  TIKTOK_LINK:      "https://tiktok.com/",
  YOUTUBE_LINK:     "https://youtube.com/",

  // ─── ESTATÍSTICAS ────────────────────────────────────────
  CLIENTS_COUNT:    "+2.500",
  YEARS_EXP:        "5+",
  SATISFACTION_PCT: "98%",
  GUARANTEE_DAYS:   "30",

  // ─── SEO ─────────────────────────────────────────────────
  SEO_TITLE:       "[TÍTULO SEO] — [NOME DA EMPRESA]",
  SEO_DESCRIPTION: "[DESCRIÇÃO SEO — descreva o produto/serviço e o principal benefício em até 160 caracteres]",

  // ─── INFORMAÇÕES LEGAIS ──────────────────────────────────
  CNPJ:            "[XX.XXX.XXX/XXXX-XX]",
  COMPANY_ADDRESS: "[ENDEREÇO DA EMPRESA]",
  YEAR:            new Date().getFullYear(),

  // ─── CORES ───────────────────────────────────────────────
  PRIMARY_COLOR:   "#6C63FF",
  SECONDARY_COLOR: "#FF6B6B",
  ACCENT_COLOR:    "#00D4AA",
  DARK_BG:         "#0A0A14",
  CARD_BG:         "#12121F",
};

CONFIG.WHATSAPP_LINK = "https://wa.me/" + CONFIG.WHATSAPP_NUMBER + "?text=" + encodeURIComponent(CONFIG.WHATSAPP_MESSAGE);

window.CONFIG = CONFIG;
