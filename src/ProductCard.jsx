import React from 'react'
import "./productcard.css";
import Tag from 'rsuite/Tag';
import TagGroup from 'rsuite/TagGroup';
function ProductCard({ tags }) {
    return (
        <div className="row">
            <div className="col l4 m8 s12 offset-m2 offset-l4">
                <div className="product-card">
                    <div className="card  z-depth-4">
                        <div className="card-image">

                            <img
                                src="https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg"
                                alt="product-img"
                                width={300}
                                height={300}
                            />
                            <span className="card-title">
                                <span>Macaron</span>
                            </span>
                        </div>
                        <div className="card-content">
                            <div className="row">
                                <div className="col s12">
                                    <p>
                                        <strong>Description:</strong> <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur ornare auctor metus vel mollis.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <TagGroup>
                                        {tags.map((t) => {
                                            return (
                                                <Tag size="lg" color="black">{t}</Tag>
                                            )
                                        })}
                                    </TagGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductCard