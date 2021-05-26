const parsePath = {
  name(filepath: string): string {
    const segments = filepath.split('/');
    const pre = segments[segments.length - 1];
    return pre.split('.')[0];
  },
  extension(path: string): string {
    const segments = path.split('.');
    return segments[segments.length - 1];
  },
};

export default parsePath;
