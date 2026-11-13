# Global Cabinets Hub

Static client website adapted from the supplied UltraMax 7 Pro Premium starter. The design, pages, business details, imagery, PWA and two WhatsApp enquiry flows are included. No external dependencies, tracking scripts, API keys or build step are required.

## Hosting

Import this repository into Vercel with the **Other** framework preset, repository root and no build command. The checked-in Vercel configuration enables clean URLs. On other hosts, map extensionless routes to their matching HTML documents.

## Maintenance

- Business details, the service explorer, gallery metadata and process steps are in `site-config.js`.
- Static page and search metadata live in the HTML files, `robots.txt` and `sitemap.xml`. Update these when moving to a custom domain.
- Update the precache list and cache version in `sw.js` when changing release assets. The web manifest controls app names and icons.
- Enquiries are composed in browser memory. The site opens WhatsApp with a prefilled message, and visitors must press Send themselves.
- The gallery combines supplied images and design references. No client reviews, completed-project counts or unconfirmed locations are claimed.
