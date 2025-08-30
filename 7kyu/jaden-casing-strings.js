Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     return this.replace(/(^|\s)(\S)/g, (_, space, ch) => space + ch.toUpperCase());
   }
  }
);