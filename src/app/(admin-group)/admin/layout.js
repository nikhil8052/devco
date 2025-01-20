import React from "react";
import './assets/css/admin.css'

const AdminLayout = ({ children }) => {
  return (
    <>
      <div class="wrapper d-flex align-items-stretch">
        <nav id="sidebar">
          <button type="button" id="sidebarCollapse" class="btn btn-primary">
            <i class="fa fa-bars"> Toggle</i>
            <span class="sr-only">Toggle Menu</span>
          </button>
          <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>
          <div class="p-4 pt-5">
            <ul class="list-unstyled components mb-5">
              <li>
                <a href="/admin/authors">Author </a>
              </li>
              <li>
                <a href="#">Blogs  </a>
              </li>

            </ul>
          </div>

        </nav>
        <div id="content" class="p-4 p-md-5">
          {children}
        </div>
      </div>
    </>


  );
};

export default AdminLayout;
