import React from 'react';

export default function Contact() {
  return (
    <><div className="myForm">
      <form id="email-form" action="https://formspress.io/xknqqwdl" method="POST">
        <div className="form-group">
          <label for="form-name">Name</label>
          <input type="text" name="name" className="form-control" id="form-name" placeholder="Your Name"></input>
        </div>
        <div className="form-group">
          <label for="form-email">Email</label>
          <input type="email" name="replyEmail" className="form-control" id="form-email" placeholder="email@you.com"></input>
        </div><div className="form-group">
          <label for="message">Message</label>
          <textarea className="form-control" name="messageBody" id="form-body" rows="3"></textarea>
        </div>
      </form>
      <center><button type="submit" className="btn btn-secondary btn-sm" id="submit">SUBMIT</button></center>
      <p id="form-status"></p>
    </div><div className="row">
        <div className="row">
          <div className="col-sm-12 text-center fluid">
            <h5 className="email">
              scottmatthewsiegel@gmail.com
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm" />
          <div className="col-sm text-center">
            <a href="https://www.https://github.com/scoven2" target="blank">
              <i class="fab fa-github-square fa-3x" />
            </a>
            <a href="https://www.https://www.linkedin.com/in/scottsiegel2/" target="_blank" rel="noreferrer">
              <i class="fab fa-linkedin fa-3x" />
            </a>
          </div>
          <div className="col-sm" />
        </div>
      </div></>
    // <div>
    //   <h1>Contact Page</h1>
    //   <p>
    //     Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
    //     molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
    //     magna a ultrices. Aenean pellentesque placerat lacus imperdiet
    //     efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
    //     mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
    //     posuere, eget tristique dui dapibus. Maecenas fermentum elementum
    //     faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
    //     ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
    //     dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
    //     conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
    //     rhoncus. Etiam vel condimentum magna, quis tempor nulla.
    //   </p>
    // </div>
  );
}
