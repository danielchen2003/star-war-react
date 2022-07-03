import React from "react"

export default function Pagination(props) {
  console.log(props.toNextPage, props.toPreviousPage)
  return (
    <div className="buttons">
      {/* <button>PreviousPage</button>
  <button>NextPage</button> */}
      {/* put onClick EVENt inside */}
      {!props.prevPageUrl ? null : (
        <a onClick={props.toPreviousPage} className="button buttonPrev">
          PreviousPage
        </a>
      )}

      {props.toNextPage && (
        <a onClick={props.toNextPage} className="button buttonpNext">
          NextPage
        </a>
      )}
    </div>
  )
}
