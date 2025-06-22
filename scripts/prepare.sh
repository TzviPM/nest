# 1. Build fresh packages used by integration tests
pnpm run build &>/dev/null

# 2. Start docker containers to perform integration tests
pnpm run test:docker:up
