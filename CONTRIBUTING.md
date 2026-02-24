# Contributing

Hi, and thanks for taking the time to contribute.

## Ground rules

- Keep changes focused and small.
- Prefer clear code over clever code.
- Keep UI behavior and content tone consistent with the existing site.

## Development workflow

1. Create a branch from `main`.
2. Make your changes.
3. Run checks:
   - `npm run lint`
   - `npm run test`
   - `npm run build`
4. Open a pull request with:
   - what changed
   - why it changed
   - screenshots if UI was touched

## Commit conventions

Use conventional prefixes:

- `feat:` new functionality
- `fix:` bug fix
- `refactor:` internal restructuring without behavior change
- `docs:` documentation only
- `ci:` workflow/automation changes
- `chore:` maintenance tasks

## Notes

- Keep dependencies minimal.
- Do not commit `dist/`.
