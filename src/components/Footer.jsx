export default function Footer(props) {
    // receive information via 'prop'
    const {showModal, handleToggleModal, data} = props
    // destructure 
  return (
    <footer>
        <div className="bgGradient"></div>
        <div>
            <h1>NASA's Astronomy Picture of the Day</h1>
            <h2>{data?.title}</h2>
        </div>
        <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}
