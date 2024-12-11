export const toOuterHTML = (items) => items.reduce((html, item) => (html += item.outerHTML), '');
