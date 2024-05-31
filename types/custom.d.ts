declare module '*.json' {
  const value: {
    [key: string]: Record<string, string>;
  };
  export default value;
}
