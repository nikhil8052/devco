import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <html lang="en">
    <head></head>
    <body>
      <div className="admin-wrapper">
        <div className="admin-content">
          {children}
        </div>
      </div>
    </body>
  </html>
  );
};

export default AdminLayout;
