export function pick<
  Object extends object,
  Prop extends keyof Object
>(object: Object, props: Prop[]): Pick<Object, Prop> {
  const pickedObject = {} as Pick<Object, Prop>;
  for (const prop of props) {
    if (prop in object) {
      pickedObject[prop] = object[prop];
    }
  }
  return pickedObject;
}
