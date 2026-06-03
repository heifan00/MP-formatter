import {
  ORIGINAL_REPOSITORY_NAME,
  ORIGINAL_REPOSITORY_URL,
  SITE_BRAND,
  SITE_HOST,
} from "@/lib/site-config";
import { GitFork } from "lucide-react";

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-(--neo-app-header) border-t-[3px] border-(--neo-ink) py-2 px-4 shrink-0">
      <div className="max-w-[1600px] mx-auto flex flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-black text-sm tracking-tighter uppercase text-(--neo-ink)">
            {SITE_BRAND}
          </span>
          <span className="hidden sm:inline text-[10px] font-medium text-(--neo-muted)">
            专注公众号的 Markdown 排版工具
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={ORIGINAL_REPOSITORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-button neo-button-ghost p-1 md:px-2 md:py-1 flex items-center gap-1.5"
            title={`开源来源 · ${ORIGINAL_REPOSITORY_NAME}`}
          >
            <GitFork className="w-3 h-3" />
            <span className="hidden md:inline text-[10px] font-black">开源来源</span>
            <span className="hidden lg:inline text-[10px] font-black">
              {ORIGINAL_REPOSITORY_NAME}
            </span>
          </a>
          <div className="h-4 w-[1px] bg-(--neo-ink) opacity-20 hidden md:block" />
          <div className="text-[10px] font-bold text-(--neo-muted) tracking-tight uppercase">
            © {currentYear} {SITE_HOST.toUpperCase()}
          </div>
        </div>
      </div>
    </footer>
  );
}
