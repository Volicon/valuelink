import * as React from 'react';
/**
 * Simple custom <Radio/> tag implementation. Can be easily styled.
 * Intended to be used with offhand bool link:
 *
 *    <Radio checkedLink={ linkToValue.equals( optionValue ) />
 */
export const Radio = ({ className = 'radio', checkedLink, children }) => (<div className={className + (checkedLink.value ? ' selected' : '')} onClick={checkedLink.action(() => true)}>
        {children}
    </div>);
/**
 * Simple custom <Checkbox /> tag implementation.
 * Takes any type of boolean link. Can be easily styled.
 *
 *     <Checkbox checkedLink={ boolLink } />
 */
export const Checkbox = ({ className = 'checkbox', checkedLink, children }) => (<div className={className + (checkedLink.value ? ' selected' : '')} onClick={checkedLink.action(x => !x)}>
        {children}
    </div>);