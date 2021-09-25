import React from 'react';
import projects from '../../projects.json';

function TechListItem(props) {
  return props.techItems.map(technology => {
      return <li className="techUsed">{technology}</li>
  })
}

function Project2() {
  function checkRepoLink(project) {
    console.log("inside repo function")
    if (project.repo !== null) {
      return (
        <div className="row">
          <div className="col-sm text-center">
            <a className="repoLink" href={project.repo} target="_blank" rel="noreferrer">
              <button type="button" className="btn btn-info repoBtn">
                Code
              </button>
            </a>
          </div>
          <div className="col-sm text-center">
            <a className="siteLink" href={project.site} target="_blank" rel="noreferrer">
              <button type="button" className="btn btn-info siteBtn">
                Website
              </button>
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-sm">
            <a className="siteLink" href={project.site} target="_blank" rel="noreferrer">
							<button type="button" className="btn btn-info siteBtn">
								Website
							</button>
						</a>
          </div>
        </div>
      );
    }
  };

  return projects.map((project) => {
    return ( 
    <div className="row">
      <div className="card mb-5 projectCard">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 my-auto">
              <img
                src={project.image}
                alt={project.title}
                width="200px"
                className="card-img img-fluid logo"
              />
            </div>
            <div className="col-md-9">
              <h4 className="card-title">{project.title}</h4>
              <div className="row card-text">
                <p>{project.about}</p>
                <ul className="technologies">
									<TechListItem techItems={project.technologies}></TechListItem>
                </ul>
              </div>
							{checkRepoLink(project)}
            </div>
          </div>
        </div>
      </div>
    </div>
		);
	});
}

export default function Project() {
  return (
    <div className="viewTwo" id="projects">
      <div className="row">
        <div className="col-md">
          <h3 className="viewTitle" id="projectTitle">Projects</h3>
        </div>
      </div>
      <div className="row">
        <Project2 />
      </div>
    </div>
    // <div>
    //   <h1>Blog Page</h1>
    //   <p>
    //     Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
    //     Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
    //     dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
    //     sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
    //     sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
    //     vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
    //     libero. Class aptent taciti sociosqu ad litora torquent per conubia
    //     nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
    //     lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    //     Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
    //     in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
    //     bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
    //     est ligula suscipit velit, sed bibendum turpis dui in sapien.
    //   </p>
    // </div>
  );
}
