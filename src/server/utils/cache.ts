interface ImageCache {
  [key: string]: boolean;
}

const cache: ImageCache = {};

const inCache = function (filepath: string): boolean {
  return cache[filepath] && true;
};

const storeInCache = function (filepath: string): void {
  cache[filepath] = true;
};

export { cache, inCache, storeInCache };
