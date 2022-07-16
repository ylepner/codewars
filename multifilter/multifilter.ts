export function multiFilter(...filters: Array<(el: number) => boolean>) {
  return function (el: number) {
    return filters.every((filter: any) => {
      return filter(el)
    });
  };
};
