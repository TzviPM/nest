# 1. Build fresh packages and move them to sample and integration directories
pnpm run build &>/dev/null

# 2. Start docker containers to perform integration tests
pnpm run test:docker:up
