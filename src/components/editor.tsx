import * as React from 'react'
import { EditorState, TextSelection } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import 'prosemirror-view/style/prosemirror.css'

type EditorProps = {
  onChange(
    state: EditorState,
    dispatch: typeof EditorView.prototype.dispatch
  ): any
  attributes?: any
  nodeViews?: any
  autoFocus?: boolean
  options: any
  render?({ editor: EditorState, view: EditorView }): React.ReactNode
}

export default class Editor extends React.Component<EditorProps> {
  view: EditorView
  editorRef: React.RefObject<HTMLDivElement>

  constructor(props) {
    super(props)
    this.editorRef = React.createRef()
    this.view = new EditorView(null, {
      state: EditorState.create(props.options),
      dispatchTransaction: transaction => {
        const { state, transactions } = this.view.state.applyTransaction(
          transaction
        )
        this.view.updateState(state)
        if (transactions.some(tr => tr.docChanged)) {
          this.props.onChange(state, this.view.dispatch)
        }
        this.forceUpdate()
      },
      attributes: this.props.attributes,
      nodeViews: this.props.nodeViews
    })
    this.props.onChange(this.view.state, this.view.dispatch)
  }

  componentDidMount() {
    this.editorRef.current.appendChild(this.view.dom)
    if (this.props.autoFocus) {
      this.view.focus()
    }
  }

  render() {
    const editor = <div ref={this.editorRef} />
    return this.props.render
      ? this.props.render({
          editor,
          view: this.view
        })
      : editor
  }
}
