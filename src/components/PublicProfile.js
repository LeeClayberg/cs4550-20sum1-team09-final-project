import React from 'react'
import ProfileCover from "./ProfileCover";
import ProfileReview from "./ProfileReview";
import {Link} from "react-router-dom";

class PublicProfile extends React.Component {

    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    render() {
        return (
            <span>
                <div className="row wbdv-public-profile wbdv-profile-field-labels">
                    <span className="col-lg-2 wbdv-public-profile-col">
                        <img className="wbdv-public-profile-picture"
                             src={"https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg"}
                             alt="Card image cap"/>
                    </span>
                    <span
                        className="col-lg-5 wbdv-public-profile-col wbdv-profile-field-labels">
                        <div className="">
                            Username
                            <input type="text"
                                   className="form-control wbdv-profile-field wbdv-username"
                                   value="John Wigner"
                                   placeholder="username" readOnly/>
                        </div>
                        <div className="row wbdv-public-profile-row wbdv-profile-field-group">
                            <span className="col-6 wbdv-profile-left-col">
                                Role
                                <input type="text"
                                       className="form-control wbdv-profile-field wbdv-added-info"
                                       value="Collector" readOnly/>
                            </span>
                            <span className="col-6 wbdv-profile-right-col">
                                Level
                                <input type="text"
                                       className="form-control wbdv-profile-field wbdv-added-info"
                                       value="Beginner" readOnly/>
                            </span>
                        </div>
                        <div className="row wbdv-public-profile-row wbdv-profile-field-group">
                            <span className="col-6 wbdv-profile-left-col">
                                Active Since
                                <input type="text"
                                       className="form-control wbdv-profile-field wbdv-added-info"
                                       value="1970-01-01" readOnly/>
                            </span>
                            <span className="col-6 wbdv-profile-right-col">
                                ID Number
                                <input type="text"
                                       className="form-control wbdv-profile-field wbdv-added-info"
                                       value="87437537" readOnly/>
                            </span>
                        </div>
                    </span>
                    <span className="col-lg-5 wbdv-public-profile-col">
                        <div>
                            Bio
                            <textarea
                                rows="6"
                                maxlength="220"
                                className="form-control wbdv-profile-field wbdv-profile-textarea"
                                placeholder="I am a ..."
                                readOnly/>
                        </div>
                    </span>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <Link to={`/profile/collection`}>
                            <div className="wbdv-profile-collection overflow-hidden">
                                <div className="wbdv-profile-collection-header">
                                    John Wigner's Collection
                                </div>
                                <div className="row row-cols-5 wbdv-cover-row">
                                    <ProfileCover/><ProfileCover/><ProfileCover/>
                                    <ProfileCover/><ProfileCover/><ProfileCover/>
                                    <ProfileCover/><ProfileCover/><ProfileCover/>
                                    <ProfileCover/><ProfileCover/><ProfileCover/>
                                    <ProfileCover/><ProfileCover/><ProfileCover/>
                                    <ProfileCover/><ProfileCover/><ProfileCover/>
                                    <ProfileCover/><ProfileCover/>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <Link to={`/profile/reviews`}>
                            <div className="wbdv-profile-reviews overflow-hidden">
                                <div className="wbdv-profile-review-header">
                                    John Wigner's Reviews
                                </div>
                                <ProfileReview
                                    cover={require("../TempCover.png")}
                                    name={"John Wigner"}
                                    stars={3}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                                <ProfileReview
                                    cover={require("../TempCover.png")}
                                    name={"John Wigner"}
                                    stars={5}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                                <ProfileReview
                                    cover={require("../TempCover.png")}
                                    name={"John Wigner"}
                                    stars={4}
                                    text={"Mephisto finally reveals his plan to the Surfer and shows him the image of, lost among billions on Earth, freezing and starving. If the Surfer pledges himself to Mephisto he will reunite them. The Surfer gives in and as a test Mephisto tells him"}/>
                            </div>
                        </Link>
                    </div>
                </div>
            </span>
        )
    }
}

export default PublicProfile;