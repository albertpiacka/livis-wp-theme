export function returnDOMel(el){
    const str = el.textContent.toLowerCase().toString();
    const parsed = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');

    return document.getElementById(parsed);
}

export default {returnDOMel};