import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Info({ card }) {
  return (
    <>
      <div className="card-layout">
        {card &&
          card.map((element, key) => {
            return (
              <div key={key} className="card-layout__item shadow">
                <img className="char-img" src={`${element.image}`} />

                <div className="status-img-cont">
                  <div className="char-status-cont">
                    <div className="char-status">
                      <div
                        className="dot-status"
                        style={{
                          backgroundColor:
                            element.status === "Dead"
                              ? "#ff3838"
                              : element.status === "Alive"
                              ? "#26d77f"
                              : "grey",
                        }}
                      ></div>
                      {element.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="char-info">
                    <div className="char-name">{element.name}</div>
                    <div className="char-gender">
                      <span className="char-label">Gender:</span>{" "}
                      {element.gender}
                    </div>
                    <div className="char-species">
                      <span className="char-label">Species:</span>{" "}
                      {element.species}
                    </div>
                    <div className="char-location">
                      <span className="char-label">Location:</span>{" "}
                      {element.location.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
