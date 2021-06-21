import { connect, useSelector } from 'react-redux'

// function Counter({ count, hola, something, other, order }) {
  // console.log(hola)
  // console.log(something)
  // console.log(other)
  // console.log(order)

const hola = 'mundo'

function Counter() {
  const { count } = useSelector(state => {
    return {
      count: state.count
    }
  })

  return (
    <p>{count}</p>
  )
}

export default Counter

// function mapStateToProps(state) {
//   return {
//     count: state.count,
//     hola: 'mundo',
//     order: '2'
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     other: 'otro',
//     order: '3'
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

// function connect(mapStateToProps, mapDispatchToProps) {
//   const state = store.getState()
//   const dispatch = store.dispatch()

//   const stateProps = mapStateToProps(state)
//   const dispatchProps = mapDispatchToProps(dispatch)

//   return function (Component) {
//     return function (props) {
//       return (
//         <Component
//           {...props}
//           {...stateProps}
//           {...dispatchProps}
//         />
//       )
//     }
//   }
// }
