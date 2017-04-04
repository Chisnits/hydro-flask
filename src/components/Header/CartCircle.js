import React, { Component } from 'react';
import '../../styles/Header.css';

class CartCircle extends Component {
    render() {
        return (
            <svg className="cart-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 334 334">
<path fill="#ffffff" d="M158.2 320.5v-.3c0-6.2 5-11.3 11.3-11.4 6.3-.1 11.6 4.9 11.7 11.3v.3c0 6.2-5 11.3-11.3 11.4h-.2c-6.3 0-11.4-5-11.5-11.3zm-51.8-.2c-4.5-1.8-7.3-6.1-7.3-10.7 0-1.4.3-2.8.8-4.2 2.3-5.9 9-8.8 14.9-6.5 4.5 1.8 7.3 6.1 7.3 10.7 0 1.4-.2 2.8-.8 4.2-1.8 4.5-6.1 7.3-10.7 7.3-1.4 0-2.8-.2-4.2-.8zm111.3-8.4c-.7-1.5-1-3.1-1-4.6 0-4.4 2.5-8.7 6.9-10.6 5.8-2.6 12.6.1 15.2 5.9.7 1.5 1 3.1 1 4.6 0 4.4-2.5 8.7-6.9 10.6-1.5.7-3.1 1-4.6 1-4.5 0-8.7-2.6-10.6-6.9zm-165.5-26.4c-2.3-2.2-3.5-5.2-3.5-8.2 0-2.9 1.1-5.8 3.2-8 4.4-4.6 11.7-4.7 16.3-.3 2.3 2.2 3.5 5.2 3.5 8.2 0 2.9-1.1 5.8-3.2 8-2.3 2.3-5.3 3.5-8.3 3.5-2.9 0-5.8-1.1-8-3.2zm217.3-4.4c-2.4-2.3-3.6-5.3-3.6-8.3 0-2.9 1.1-5.7 3.2-7.9 4.4-4.6 11.7-4.8 16.3-.4 2.4 2.3 3.5 5.3 3.5 8.3 0 2.8-1.1 5.7-3.2 7.9-2.3 2.4-5.3 3.5-8.3 3.5-2.9.1-5.7-.9-7.9-3.1zm-254-48.6c-.7-1.5-1-3.1-1-4.6 0-4.4 2.6-8.6 6.9-10.5 5.8-2.5 12.6.1 15.1 6 .7 1.5 1 3.1 1 4.6 0 4.4-2.6 8.6-6.9 10.5-1.5.7-3 1-4.6 1-4.4-.1-8.7-2.7-10.5-7zm289.9.4c-4.5-1.8-7.3-6.1-7.3-10.7 0-1.4.2-2.8.8-4.2 2.3-5.9 9-8.8 14.9-6.5 4.5 1.8 7.3 6.1 7.3 10.7 0 1.4-.2 2.8-.8 4.2-1.8 4.5-6.1 7.3-10.7 7.3-1.4 0-2.8-.3-4.2-.8zm-303.8-63.4v-.3c0-6.2 5-11.3 11.3-11.4 6.4-.1 11.6 4.9 11.7 11.2v.3c0 6.2-5 11.3-11.3 11.4h-.2c-6.2.1-11.3-4.9-11.5-11.2zm307-6.2v-.3c0-6.2 5-11.3 11.3-11.4 6.3-.1 11.6 4.9 11.7 11.3v.3c0 6.2-5 11.3-11.3 11.4h-.2c-6.3 0-11.4-5-11.5-11.3zm-289.2-42.4c-4.5-1.8-7.3-6.1-7.3-10.7 0-1.4.2-2.8.8-4.2 2.3-5.9 9-8.9 14.9-6.6 4.5 1.8 7.3 6.1 7.4 10.7 0 1.4-.2 2.8-.8 4.2-1.8 4.6-6.1 7.3-10.7 7.3-1.5.1-2.9-.1-4.3-.7zm277.3-11.8c-.7-1.5-1-3.1-1-4.6 0-4.4 2.6-8.6 6.9-10.5 5.8-2.5 12.6.1 15.1 6 .6 1.5 1 3.1 1 4.6 0 4.4-2.6 8.6-6.9 10.5-1.5.6-3 1-4.6 1-4.4-.1-8.6-2.7-10.5-7zm-248.9-41.2c-2.4-2.3-3.6-5.3-3.6-8.3 0-2.9 1.1-5.7 3.2-7.9 4.4-4.6 11.7-4.8 16.3-.4 2.4 2.3 3.6 5.3 3.6 8.3 0 2.9-1.1 5.7-3.2 7.9-2.3 2.4-5.3 3.6-8.3 3.6-2.9-.1-5.8-1.1-8-3.2zm217.3-4.5c-2.3-2.2-3.5-5.2-3.5-8.2 0-2.9 1.1-5.8 3.2-8 4.4-4.6 11.7-4.7 16.3-.3 2.3 2.2 3.5 5.2 3.5 8.2 0 2.9-1.1 5.8-3.2 8-2.2 2.3-5.2 3.5-8.3 3.5-2.9 0-5.8-1-8-3.2zm-170.8-33.7c-.7-1.5-1-3.1-1-4.6 0-4.4 2.5-8.7 6.9-10.6 5.8-2.6 12.6.1 15.2 5.9.7 1.5 1 3.1 1 4.6 0 4.4-2.5 8.7-6.9 10.6-1.5.7-3.1 1-4.6 1-4.5 0-8.7-2.6-10.6-6.9zm124.1 3.7h-.1c-4.5-1.8-7.3-6.1-7.3-10.7 0-1.4.3-2.8.8-4.2 2.3-5.9 9-8.8 14.9-6.5.1 0 .1 0 .2.1 5.9 2.3 8.8 9 6.5 14.9-1.8 4.5-6.1 7.3-10.7 7.3-1.5-.1-2.9-.4-4.3-.9zm-66.5-21.1v-.3c0-6.2 5-11.3 11.3-11.4 6.3-.1 11.6 4.9 11.7 11.2v.3c0 6.2-5 11.3-11.2 11.5h-.2c-6.3-.1-11.5-5.1-11.6-11.3z">
</path></svg>
        )
    }
}

export default CartCircle