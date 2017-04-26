'use strict'

export function handler (event, context) {
  const error = null
  context.done(error, { message: `This is a Lamba response! You sent the following in the myParam parameter: ${event.myParam}.` })
}
