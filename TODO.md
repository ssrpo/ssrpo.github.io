# Website Improvement TODO

This checklist tracks code quality, structure, and GitHub Pages best practices.

## Phase 1: Deployment and GitHub standards

- [x] Move to root-site setup (`ssrpo.github.io` target) with `base: '/'`
- [x] Keep GitHub Pages deployment workflow aligned with root path
- [x] Add CI workflow for pull requests (`lint` + `build`) before deploy on `main`
- [ ] Prepare custom domain handoff (`CNAME`) once DNS is ready

## Phase 2: Performance and metadata

- [x] Replace heavy static assets (especially `public/phd.jpg`) with optimized formats
- [x] Improve HTML metadata (`title`, description, social preview, favicon)

## Phase 3: Code structure and maintainability

- [x] Split `src/App.tsx` into smaller components
- [x] Move static content data into a dedicated module
- [x] Add explicit shared types for sections/content items

## Phase 4: Cleanup and dead-code removal

- [x] Remove unused `home` state path and unreachable UI branches
- [x] Remove unused CSS selectors and keep stylesheet focused
- [x] Keep docs consistent with real code structure

## Phase 5: Optional hardening

- [x] Add lightweight tests (render smoke test and one interaction test)
- [x] Add repository hygiene docs (`CONTRIBUTING`, `CODEOWNERS`) if needed
