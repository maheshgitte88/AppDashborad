import React from 'react'

export default function Sidebar() {


  return (
    <>
      <div className="wrapper">
    <nav id="sidebar">
        <div className="sidebar-header">
            <h3>BBBOOTSTRAP</h3>
            <hr/>
        </div>
        <ul className="list-unstyled components">
            <p>MENUS</p>
            <li> <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                    className="dropdown-toggle">Dashboard</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li> <a href="#">Dashboard1</a> </li>
                    <li> <a href="#">Dashboard2</a> </li>
                    <li> <a href="#">Dashboard3</a> </li>
                </ul>
            </li>
            <li> <a href="#">Users</a> </li>
            <li> <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                    className="dropdown-toggle">Subscribers</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li> <a href="#">Active</a> </li>
                    <li> <a href="#">Idle</a> </li>
                    <li> <a href="#">Non Active</a> </li>
                </ul>
            </li>
            <li> <a href="#">Timeline</a> </li>
            <li> <a href="#">Live Chat</a> </li>
            <li> <a href="#">Likes</a> </li>
            <li> <a href="#">Comments</a> </li>
        </ul>
        <ul className="list-unstyled CTAs">
            <li> <a href="#" className="download">Subscribe</a> </li>
        </ul>
    </nav>
    <div className="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button type="button" id="sidebarCollapse" className="btn btn-info">	<i className="fa fa-align-justify"></i>	</button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"> <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span></a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#">Features</a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#">Pricing</a> </li>
                    <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li>
                </ul>
            </div>
        </nav>
        <div className="content-wrapper">
            <h2>Collapsible Sidebar Using Bootstrap 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu. Eget nulla facilisi etiam dignissim
                diam quis enim. Et netus et malesuada fames ac turpis egestas integer eget. Tortor at risus viverra
                adipiscing at in tellus. Cras adipiscing enim eu turpis. Malesuada nunc vel risus commodo viverra. Enim
                nulla aliquet porttitor lacus luctus accumsan tortor posuere. Ac placerat vestibulum lectus mauris
                ultrices eros. In arcu cursus euismod quis viverra nibh cras. Non quam lacus suspendisse faucibus
                interdum posuere lorem ipsum. In fermentum posuere urna nec tincidunt praesent semper. Ultricies mi quis
                hendrerit dolor. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Praesent tristique
                magna sit amet purus gravida quis. Enim nunc faucibus a pellentesque sit amet porttitor.
                Amet justo donec enim diam vulputate. Aliquet eget sit amet tellus cras. Tincidunt arcu non sodales
                neque. Semper auctor neque vitae tempus quam. In massa tempor nec feugiat nisl pretium fusce id. Fames
                ac turpis egestas integer eget aliquet. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.
                Ut sem nulla pharetra diam. Vitae tempus quam pellentesque nec nam aliquam sem. Eget duis at tellus at
                urna condimentum mattis. Tellus orci ac auctor augue mauris. Eget sit amet tellus cras adipiscing enim
                eu turpis. Nam aliquam sem et tortor. Ac tincidunt vitae semper quis lectus. Mollis nunc sed id semper
                risus in hendrerit. Tincidunt id aliquet risus feugiat. Massa eget egestas purus viverra accumsan in
                nisl.
                Quis enim lobortis scelerisque fermentum. Ut diam quam nulla porttitor massa. Nunc sed id semper risus
                in. Mattis pellentesque id nibh tortor. Ac orci phasellus egestas tellus rutrum. Congue nisi vitae
                suscipit tellus mauris a diam. Facilisis volutpat est velit egestas. Quam viverra orci sagittis eu
                volutpat odio. Etiam dignissim diam quis enim lobortis. Sollicitudin nibh sit amet commodo nulla
                facilisi nullam vehicula. Sit amet luctus venenatis lectus. Mi eget mauris pharetra et ultrices neque.
                Sit amet cursus sit amet dictum sit amet. Eget lorem dolor sed viverra. Neque egestas congue quisque
                egestas diam. Vestibulum lectus mauris ultrices eros in cursus turpis. Et leo duis ut diam quam nulla.
                Egestas sed tempus urna et pharetra. Aliquam sem et tortor consequat id. Sollicitudin tempor id eu nisl
                nunc mi.
                .</p>
            <div className="line"></div>
        </div>
    </div>
</div>
    </>
  )
}
