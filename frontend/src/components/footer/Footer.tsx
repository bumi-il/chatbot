import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <div style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          <p style={{marginRight: "30px"}}>
            Built With love by Bumi 🫶
          </p>
          <p>
            Credit -
            <Link
              style={{ color: "gold", marginLeft: "-10px", fontFamily: "monospace"}}
              className="nav-link"
              to={"https://youtube.com/indiancoders"}
              >
              Indian_Coders
              {/* <img src="indian_coders.jpg" alt="indian_coders" style={{ width: "30px", borderRadius: "50%", marginLeft: "10px" }}/> */}
              <img src="indian_coders2.png" alt="indian_coders" style={{ width: "30px", borderRadius: "50%", marginLeft: "10px" }}/>
            </Link>
          </p>
          <p>
            Powered By -
            <Link
              style={{ color: "gold", marginLeft: "-10px", fontFamily: "monospace"}}
              className="nav-link"
              to={"https://openai.com"}
              >
              OpenAi
              <img className="image-inverted" src="openai.png" alt="openai" style={{ width: "30px", borderRadius: "50%", marginLeft: "10px" }}/>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer