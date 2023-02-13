export default function classNames(...args) {
  // ...args thi no convert sang mang
  // vi du
  // function demo(..args){console.log(args)}
  // demo(1,2,3,4) => [1,2,3,4]
  return args
    .reduce((acc, val) => {
      if (typeof val === "string") {
        return acc.concat(val.split(" "));
      }
      return acc.concat(Object.values(val));
    }, [])
    .join(" ");
}
