import React from 'react'

export default function Footer() {
  return (
    <div className="w-full bg-banner-bg bg-center">
    <div
      style={{
        backgroundImage:
          "url(https://images.ctfassets.net/lsw6afd8rv2d/53rdyaarPZ0ndGlEipzlLG/e777209d5d4f25677d3a55625dc79166/footer.jpg?h=250)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
      }}
    >
    <div className="w-full text-white bg-gradient-to-b from-stone-950 to-transparent ">
        Footer
      </div>
    </div>
  </div>
  )
}
