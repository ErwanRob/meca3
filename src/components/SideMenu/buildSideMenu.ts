/* import { Section } from "@/types/leconTypes";
import { SideMenuItem } from "@/types/sideMenuItemTypes";

export function buildSideMenu(
  sections: Section[],
  basePath: string,
): SideMenuItem[] {
  return sections.map((sec) => ({
    title: sec.title,
    href: `${basePath}#${sec.slug}`,
    children: sec.children ? buildSideMenu(sec.children, basePath) : undefined,
  }));
}
 */
