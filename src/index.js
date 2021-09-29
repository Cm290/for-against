import "./index.scss";
import tabHeader from './components/tabHeader/tabHeader';

document.querySelectorAll('.no-js').forEach((element) => {
    element.style = '';
    element.classList.remove('no-js');
});

new tabHeader();