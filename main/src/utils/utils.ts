export const removeL2MainCss = (window:Window)=>{
    const shadowRoot = window.$wujie.shadowRoot;
    if (shadowRoot && shadowRoot.querySelectorAll) {
        const styles = Array.from(shadowRoot.querySelectorAll('style'));
        styles.forEach((styleEl) => {
            const devId = styleEl?.getAttribute('data-vite-dev-id');
            if (devId === 'D:/B08_VITE/src/assets/main.css') {
                console.log('移除 style 元素:', styleEl);
                styleEl?.remove();
            }
        });
    } else {
        console.warn('无法访问 Shadow DOM 或未找到 style 元素');
    }
}

export const L2Jump = (child:string,path:string)=>{
    const l2Window = (window.document.querySelector(`iframe[name=${child}]`) as HTMLIFrameElement | undefined)?.contentWindow
    if(!l2Window)return
    l2Window.location.href = l2Window.location.origin + path
}