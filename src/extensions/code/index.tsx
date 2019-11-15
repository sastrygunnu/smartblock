import * as React from 'react'
import { setBlockType } from 'prosemirror-commands'
import uuid from 'uuid'
import { Extension, ExtensionProps } from '../../types'
import CodeBlockView from './code-block-view';
import { blockActive } from '../../utils';

export default class Code extends Extension {

  constructor(props?: ExtensionProps) {
    super(props);
  }
  get name() {
    return 'code'
  }

  get group() {
    return 'block'
  }

  get showMenu() {
    return true
  }

  get schema() {
    if (this.customSchema) {
      return this.customSchema;
    }
    return {
      content: 'inline*',
      group: 'block',
      parseDOM: [
        {
          tag: 'code',
          getAttrs(dom) {
            return {
              id: dom.getAttribute('id') || uuid(),
              text: dom.textContent,
            }
          }
        }
      ],
      toDOM: node => {
        return [
          'pre',
          {
            id: node.attrs.id || uuid(),
            className: this.className
          },
          ['code', 0]
        ]
      },
      attrs: {
        id: { default: '' },
        text:  {default: ''}
      }
    }
  }

  get icon() {
    return 'C'
  }

  active(state) {
    return blockActive(state.schema.nodes.code)(state)
  }

  enable(state) {
    return setBlockType(state.schema.nodes.code)(state)
  }

  onClick(state, dispatch) {
    setBlockType(state.schema.nodes.code)(state, dispatch)
  }
  
  view(node, view, getPos) {
    return new CodeBlockView(node, view, getPos);
  }
}