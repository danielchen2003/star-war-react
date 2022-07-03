import React from "react"

export default function Pagination(props) {
  // console.log(props.toNextPage, props.toPreviousPage)
  return (
    <div className="buttons">
      {/* <button>PreviousPage</button>
  <button>NextPage</button> */}
      {/* put onClick EVENt inside */}
      <a onClick={props.toPreviousPage} className="button buttonPrev">
        PreviousPage
      </a>
      <a onClick={props.toNextPage} className="button buttonpNext">
        NextPage
      </a>
    </div>
  )
}
