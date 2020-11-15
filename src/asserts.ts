import { error } from './error';
import { isNull, isUndefined } from './primitive-type';

export function assertsNotNullOrUndefined<T>(x: T): asserts x is NonNullable<T> {
    if (isNull(x)) error('not null', x)
    if (isUndefined(x)) error('not undefined', x)
}

export function assertsRequiredObjectPropertiesOf<P extends PropertyKey>(target: object, property: P[]): asserts target is { [K in P]: unknown } {
    property.forEach(p => {
        if (!(p in target)) error(`required property: ${p}`, 'missing property')
    });
}
