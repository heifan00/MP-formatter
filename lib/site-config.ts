/** 站点与品牌常量（metadata、Json-Ld、robots、sitemap 共用） */

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const SITE_URL = configuredSiteUrl || "https://mp.json.ge";

export const SITE_HOST = new URL(SITE_URL).host;

export const SITE_BRAND =
  process.env.NEXT_PUBLIC_SITE_BRAND || "MP 排版助手";

export const SITE_PRODUCT_NAME = "Markdown 转微信公众号排版工具";

export const ORIGINAL_REPOSITORY_NAME = "mspringjade/wechat-formatter";

export const ORIGINAL_REPOSITORY_URL =
  "https://github.com/mspringjade/wechat-formatter";

/** 默认 <title>：突出免费在线工具定位与核心能力 */
export const SITE_TITLE_DEFAULT = `${SITE_BRAND}｜免费在线 Markdown 转微信排版工具 · 72 套精美模板 · AI 智能排版优化`;

export const SITE_DESCRIPTION = `${SITE_BRAND} 是免费在线 Markdown 转微信公众号排版工具，支持 AI 一键优化排版结构，提供新粗野、极简、商务、文艺、科技、节庆 6 大类共 72 套精美模板，并支持实时预览、样式微调与一键复制发布。`;

/** Open Graph site_name：品牌与产品名并列 */
export const SITE_OG_SITE_NAME = `${SITE_BRAND} · ${SITE_PRODUCT_NAME}`;
