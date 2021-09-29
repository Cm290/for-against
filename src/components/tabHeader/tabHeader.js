class tabHeader {
    constructor() {
        this.tabHeaderFor = document.querySelector('.tabHeader__button--for');
        this.tabHeaderAgainst = document.querySelector('.tabHeader__button--against');
        this.contributorFor = document.querySelector('.contributors--for');
        this.contributorAgainst = document.querySelector('.contributors--against');

        this.tabHeaderFor.classList.add('clicked');
        this.contributorAgainst.classList.add('hide');

        this.tabHeaderFor.addEventListener('click', () => {
            this.tabHeaderFor.classList.add('clicked');
            this.tabHeaderAgainst.classList.remove('clicked');
            this.contributorFor.classList.remove('hide');
            this.contributorAgainst.classList.add('hide');
        });

        this.tabHeaderAgainst.addEventListener('click', () => {
            this.tabHeaderFor.classList.remove('clicked');
            this.tabHeaderAgainst.classList.add('clicked');
            this.contributorFor.classList.add('hide');
            this.contributorAgainst.classList.remove('hide');
        });
    }
}

export default tabHeader;