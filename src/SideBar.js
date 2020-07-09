import React from 'react';


export default class Contents extends React.Component {
  render() {
    return (
      <div class="sidebar">
        <div class="tab-content h-100" role="tablist">
          



          <div class="tab-pane fade h-100 show active" id="tab-content-dialogs" role="tabpanel">
            <div class="d-flex flex-column h-100">

              <div class="hide-scrollbar">
                <div class="container-fluid py-6">


                  <h2 class="font-bold mb-6">Pluhg</h2>
                  <form class="mb-6">
                    <div class="input-group">
                      <input type="text" class="form-control form-control-lg"
                        placeholder="Search for messages or users..."
                        aria-label="Search for messages or users..." />
                      <div class="input-group-append">
                        <button class="btn btn-lg btn-ico btn-secondary btn-minimal"
                          type="submit">
                          <i class="fe-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>


                  


                  <nav class="nav d-block list-discussions-js mb-n6">

                    <a class="text-reset nav-link p-0 mb-6" href="chat-1.html">
                      <div class="card card-active-listener">
                        <div class="card-body">

                          <div class="media">


                            <div class="avatar mr-5">
                              <img class="avatar-img" src="assets/images/avatars/11.jpg"
                                alt="Bootstrap Themes" />
                            </div>

                            <div class="media-body overflow-hidden">
                              <div class="d-flex align-items-center mb-1">
                                <h6 class="text-truncate mb-0 mr-auto">/v1/test
                                                                </h6>
                                <p class="small text-muted text-nowrap ml-4">10:42 am
                                                                </p>
                              </div>
                              <div class="text-truncate">Anna Bridges: Hey, Maher! How are
                                                                you? The weather is great isn't it?</div>
                            </div>
                          </div>

                        </div>


                        <div
                          class="badge badge-circle badge-primary badge-border-light badge-top-right">
                          <span>3</span>
                        </div>

                      </div>
                    </a>
                  </nav>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
