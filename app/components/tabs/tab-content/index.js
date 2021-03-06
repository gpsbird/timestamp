/* global document, customElements, BaseElement, TabEvent */

class TabContent extends BaseElement {
    constructor() {
        super().fetchTemplate();

        TabEvent.on('switch', e => this.onSwitch(e));
    }

    /**
     * Listen for the tab switch event and set the active state on the
     * according tab content.
     *
     * @param {TabEvent} e The original tab event.
     * @return {TabContent}
     */
    onSwitch({ detail: { tab } }) {
        if (tab === this.tab) {
            this.setAttribute('active', '');
        } else {
            this.removeAttribute('active');
        }

        return this;
    }

    /**
     * Returns the tab target of this tab content.
     *
     * @return {string}
     */
    get tab() {
        return this.getAttribute('tab');
    }

    /**
     * Sets the tab target of this tab content.
     */
    set tab(tab) {
        this.setAttribute('tab', tab);
    }
}

// Remember document from import scope. Needed for accessing elements inside
// the imported html…
TabContent.ownerDocument = document.currentScript.ownerDocument;

// @see https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/define
customElements.define('tab-content', TabContent);
