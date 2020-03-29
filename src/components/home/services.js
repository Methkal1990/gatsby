import React from "react"
import Icon from "../icon"
import { Link } from "gatsby"

const data = [
    {
        icon: "cogs",
        title: "first service Title",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
    },
    {
        icon: "sphere",
        title: "second service Title",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
    },
    {
        icon: "trophy1",
        title: "third service Title",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
    },

]

const ServiceCard = (content) => {
    return (
        <div className="col-md-4 col-sm-12">
            <div className="s-card ">
                <Icon className="s-card-icon" icon={content.icon} size="4rem" color="var(--color-primary)" />
                <h4 className="s-card-title">{content.title}</h4>
                <p className="s-card-body">{content.body}</p>
                {/*use either a tag or link tag ..it depends on the purpose */}
                {/* <Link className="btn btn-outline-primary">
                    Read More
                </Link> */}
            </div>
        </div>

    )
}

const Services = () => {
    return (
        <section className="section services-section">
            <div className="container">
                <h2 className="secondary-header text-center">OUR SERVICES</h2>
                <div className="row">
                    {data.map(item => {
                        return (
                            <ServiceCard icon={item.icon} title={item.title} body={item.body} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;