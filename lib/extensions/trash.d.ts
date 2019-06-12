/// <reference types="react" />
import { Extension } from '../types';
export default class Trash implements Extension {
    readonly name: string;
    readonly group: string;
    readonly showMenu: boolean;
    readonly icon: JSX.Element;
    readonly btnColor: 'black';
    onClick(state: any, dispatch: any): void;
}
