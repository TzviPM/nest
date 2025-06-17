# 1. Build fresh packages and move them integration dit
pnpm run build &>/dev/null

# 2. Start docker containers to perform integration tests
pnpm run test:docker:up

# 3. Run integration tests
pnpm run test:integration
