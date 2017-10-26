import React from 'react'
import { TextField } from 'material-ui'

export const TextInput = field => (
  <TextField
    hintText="Please input item title"
    id="itemTitle"
    {...field.input}
    />
)

export const TextArea = field => (
  <TextField
    required
    hintText="Please input item desc"
    id="itemDescription"
    {...field.input}
    />
)