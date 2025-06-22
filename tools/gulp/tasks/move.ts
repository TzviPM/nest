import { dest, src, task } from 'gulp';
import { join } from 'path';
import { samplePath } from '../config';
import { containsPackageJson, getDirs } from '../util/task-helpers';

const distFiles = src(['packages/**/*.js', 'packages/**/*.d.ts']);

/**
 * Moves the compiled nest files into the `samples/*` dirs.
 */
function moveToSamples() {
  const samplesDirs = getDirs(samplePath);

  /**
   * Flatten the sampleDirs
   * If a sample dir contains does not contain a package.json
   * Push the subDirs into the destinations instead
   */
  const flattenedSampleDirs: string[] = [];

  for (const sampleDir of samplesDirs) {
    if (containsPackageJson(sampleDir)) {
      flattenedSampleDirs.push(sampleDir);
    } else {
      flattenedSampleDirs.push(...getDirs(sampleDir));
    }
  }

  return flattenedSampleDirs.reduce(
    (distFile, dir) => distFile.pipe(dest(join(dir, '/node_modules/@nestjs'))),
    distFiles,
  );
}

task('move:samples', moveToSamples);
