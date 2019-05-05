/*
Main file linking actions, state and view in order to produce content of the document.body
No need to change it for now.
 */

import { app } from 'hyperapp'

import actions from './app/actions'
import state from './app/state'
import view from './app/components/views/overview'

app(
  state,
  actions,
  view,
  document.body
)
