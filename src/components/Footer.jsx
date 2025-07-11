import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-blue-950 text-white py-4 mt-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PicFix. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Made with ❤️ by Huzaifa Ali
          </p>
        </div>
      </footer>
    )
}

export default Footer