<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# @nestjs/reflector

This package exposes the `Reflector` class which simplifies working with
metadata in Nest applications.  It is used internally by the framework and can
be installed independently when building custom tooling or platform adapters.

The utility lives in its own package to avoid circular dependencies between the
`@nestjs/common` and `@nestjs/core` packages and to make the reflection helpers
available to any runtime-specific implementation.

```bash
pnpm add @nestjs/reflector
```

