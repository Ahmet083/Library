import { useSelector } from "react-redux";


function Header() {
  const auth = useSelector(state => state.auth)
  return (
    <div className="header ">
      
      <div className="d-flex flex-wrap justify-content-end py-3 mb-4 p-1 px-md-4 mb-4 bg-primary border-bottom box-shadow">
      <h5 className="text-light text-decoration-none">Api-3 Uygulamasi</h5>  
      <nav className="mx-2 align-items-end p-3 px-md-4 mb-3">
        
          <a className="m-3 py-2 text-light text-decoration-none" href="#/">Anasayfa</a>
          <a className="m-3 py-2 text-light text-decoration-none" href="#/categories">Kategori</a>
          <a className="btn btn-warning p-2 mx-2 text-dark text-decoration-none" href="#/Login">Giris Yap</a>
          <a className="btn btn-warning p-2 mx-2text-dark text-decoration-none" href="#/Register">Kayit ol</a>
        </nav>
        <a className="btn btn-outline-primary" href="#/">Sign up</a>
      </div>



    </div>

  );
}
export default Header;