class tabHeader {
    constructor() {
        this.forTabHeaders = document.querySelectorAll('.tabHeader__button--for');
        this.tabHeaders = document.querySelectorAll('.tabHeader__button');

        this.contributorAgainst = document.querySelector('.contributor--against');
        this.contributors = document.querySelectorAll('.contributor');

        this.setUpInitialState()

        this.tabHeaders.forEach((tabHeader) => tabHeader.addEventListener('click', (e) => this.tabHeaderClicked(e)))
    }

    setUpInitialState() {
        this.forTabHeaders.forEach((forHeader) => forHeader.classList.add('clicked'));
        this.contributorAgainst.classList.add('hide');
        document.querySelector(`.tabHeader__button--for.tabHeader__button--header`).querySelector('.off-screen').innerHTML = ' argument. Button active, text has been loaded below';
        document.querySelector(`.tabHeader__button--for.tabHeader__button--footer`).querySelector('.off-screen').innerHTML = ' argument. Button active, text has been loaded above';
        document.querySelectorAll(`.tabHeader__button--against`).forEach((inactiveButton) => {
            inactiveButton.querySelector('.off-screen').innerHTML = ' argument. Button inactive';
        });
    }

    tabHeaderClicked(e) {
        this.tabHeaders.forEach((tabHeader) => tabHeader.classList.toggle('clicked'));
        this.contributors.forEach((contributor) => contributor.classList.toggle('hide'));

        this.altText(e.target.classList.contains('tabHeader__button--for'));
    }

    altText(forArgument) {
        const argument = forArgument ? 'for' : 'against';
        const oppArgument = !forArgument ? 'for' : 'against';
        document.querySelector(`.tabHeader__button--${argument}.tabHeader__button--header`).querySelector('.off-screen').innerHTML = ' argument. Button active, text has been loaded below';
        document.querySelector(`.tabHeader__button--${argument}.tabHeader__button--footer`).querySelector('.off-screen').innerHTML = ' argument. Button active, text has been loaded above';
        document.querySelectorAll(`.tabHeader__button--${oppArgument}`).forEach((inactiveButton) => {
            inactiveButton.querySelector('.off-screen').innerHTML = ' argument. Button inactive';
        });
    }
}

export default tabHeader;