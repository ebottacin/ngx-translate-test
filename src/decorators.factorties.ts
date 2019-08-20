export function Kml(config: {name?}) {
  // tslint:disable-next-line: only-arrow-functions
  return function <T extends any>(target: T): T & {kmlName: string}  {
    target.prototype.kmlName = config && typeof config.name !== 'undefined' ? config.name : 'name';
    return target as T & {kmlName: string};
    };
  }
