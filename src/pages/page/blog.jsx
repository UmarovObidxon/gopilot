import React, { Component } from 'react'
import Blogheader from '../../pricing/blogs/Blog & News/blogheader'
import { Blog } from '../../pricing/AP/user'
export default class blog extends Component {
  render() {
    return (
      <div>
        <Blogheader data={Blog}/>
      </div>
    )
  }
}
