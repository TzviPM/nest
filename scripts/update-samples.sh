for d in ./sample/*/ ; do (cd "$d" && printf $d\\n && ncu -u && pnpm install --lockfile-only); done
