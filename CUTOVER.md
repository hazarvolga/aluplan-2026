# Aluplan Next.js Migration - Cutover Plan

## 1. Pre-Deployment Verification
- [x] **Content Check**: Verify critical pages (Home, Products, Solutions) against the legacy site. (Completed via automated script verify-pages.js)
- [x] **Functionality Check**: Test forms (Contact), dynamic routes (Products), and 3D viewers. (Verified via Playwright and Manual Testing)
- [ ] **SEO Check**: Verify `robots.txt`, `sitemap.xml`, and meta tags.
- [ ] **Performance**: Ensure Lightouse score is green (>90) for Performance and SEO.

## 2. Deployment (Docker/Container)
- [ ] Build Docker image: `docker build -t aluplan-next ./next`
- [ ] Push to registry (if applicable).
- [ ] Deploy to staging environment.
- [ ] Verify staging URL.

## 3. DNS & Traffic Switch
- [ ] Lower TTL for `aluplan.com.tr` DNS records (e.g., to 60s).
- [ ] Update DNS A/CNAME record to point to the new load balancer / server IP.
- [ ] Monitor logs for 404s or 500s.

## 4. Rollback Strategy
- If critical errors occur (e.g., white screen, broken navigation):
    - Revert DNS records to the legacy server IP.
    - Flush DNS cache if possible.
    - Investigate logs.

## 5. Post-Migration
- [ ] Monitor analytics for traffic drops.
- [ ] Check Google Search Console for indexing errors.
- [ ] Decommission legacy infrastructure after 1-2 weeks of stability.
