import React, { Component } from 'react'
import { ErrorMessage } from '../error/error'
import { Auth } from '@/modules'

export class SettingsPage extends Component {
  /**
    * Class constructor.
    *
    * @param {Object} props for this component
    */
  constructor(props) {
    super(props)

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
      },
    }

    this.processForm = ::this.processForm
  }

  /**
    * Process the form.
    *
    * @param {object} event - the JavaScript event object
    */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault()

    // TODO: finish logout implementation by sending a request to /auth/logout
    if (Auth.isUserAuthenticated()) {
      Auth.deauthenticateUser()
    }
    this.props.history.push('/auth/login')

    // create a string for an HTTP body message
    // const formData = ``

    // create an AJAX request
    /*const xhr = new XMLHttpRequest()
    xhr.open('post', '/auth/logout')
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // Display logout message
        alert(xhr.response.message)

        localStorage.removeItem('user')

        // Make a redirect
        this.props.history.replace('/auth/login')
      } else {
        // failure

        // change the component state
        this.setState({
          errors: xhr.response
            ? xhr.response.errors
            : { message: '🚧 Server unavailable 🚧' },
        })
      }
    })
    xhr.addEventListener('error', function() {
      this.setState({
        errors: { message: '🚧 Server unavailable 🚧' },
      })
    })
    xhr.send(formData)*/
  }

  /**
    * Render the component.
    *
    * @returns {Component} returns Component
    */
  render() {
    return (
      <div className="row s12">
        {this.state.errors &&
          this.state.errors.message && (
            <ErrorMessage message={this.state.errors.message} />
          )}

        <form
          action="/auth/logout/jwt"
          method="POST"
          onSubmit={this.processForm}
          className="col s12"
        >
          <div className="input-field col s12 center-align">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    )
  }
}
