import './css/style.scss';
import { IState, initState, dirtyFlag$ } from './state';
import './components';

const storageKey = 'io-celin-e1p-base';

/**
 * App
 */

 class ViewModel {
    constructor(public state: IState) { }
}

// Storage Read
const state = JSON.parse(sessionStorage.getItem(storageKey) || '{}') || initState;

const viewModel = new ViewModel(state);

ko.applyBindings(viewModel);

// Storage Save
dirtyFlag$.subscribe(dirty => {
    if (dirty) {
        sessionStorage.setItem(storageKey, JSON.stringify(viewModel.state));
        dirtyFlag$(false);
    }
});
