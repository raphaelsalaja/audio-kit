import type { ReactNode } from "react";
import { MobileHeader } from "@/components/mobile-header";
import {
  SidebarAside,
  SidebarHeader,
  SidebarNav,
  SidebarRoot,
  SidebarTree,
} from "@/components/sidebar";
import { source } from "@/lib/source";
import styles from "./layout.module.css";

export default function DocsLayout({ children }: { children: ReactNode }) {
  const tree = source.getPageTree();

  return (
    <div className={styles.layout}>
      <SidebarRoot>
        <SidebarAside>
          <SidebarHeader>
            <span>Audio Kit</span>
          </SidebarHeader>
          <SidebarNav>
            <SidebarTree tree={tree} />
          </SidebarNav>
        </SidebarAside>
      </SidebarRoot>
      <MobileHeader tree={tree} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
