// import styled from 'styled-components'

// function allowDrop(ev) {
//   ev.preventDefault()
// }

// function drag(ev) {
//   ev.dataTransfer.setData('text', ev.target.id)
// }

// function drop(ev) {
//   ev.preventDefault()
//   var data = ev.dataTransfer.getData('text')
//   ev.target.appendChild(document.getElementById(data))
// }
// const TeamDraftSR = () => {
//   return (
//     <>
//       <div>
//         <button>Home</button>
//         <h1>Team Draft</h1>
//         <p>Summoner's Rift</p>
//       </div>
//       <div>
//         <button>Roll Captains</button>
//         <button type='submit'>Go</button>
//       </div>
//       <div>
//         <div>
//           <h3>Team 1</h3>
//           <div ondrop='drop(event)' ondragover='allowDrop(event)'></div>
//         </div>
//         <div>
//           <h3>Players</h3>
//           <div ondrop='drop(event)' ondragover='allowDrop(event)'></div>
//         </div>
//         <div>
//           <h3>Team 2</h3>
//           <div ondrop='drop(event)' ondragover='allowDrop(event)'></div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default TeamDraftSR
