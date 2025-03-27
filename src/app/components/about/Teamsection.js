"use client";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

export default function Teamsection({ teamData = [] }) {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <div className="team_section py-20">
        {/* Section Heading */}
        <div className="team_section_head">
          <div className="container">
            <div className="head_grid ml-32">
              <div className="head_text_col">
                <h2>The Team</h2>
                <div className="texty_div">
                  <p>
                    With the software engineering support of onshore,
                    nearshore, and offshore teams, our development capabilities
                    are as broad as they are deep. Our full-stack teams provide
                    the front-end and back-end support your software projects
                    deserve.
                  </p>
                </div>
              </div>
              <div className="head_media_col">
                <img
                  className="team_thumb"
                  src="/images/team_head-img.png"
                  alt="Team Overview"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="team_block">
          <div className="container mx-auto">
            <div className="team_grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamData.map((member, index) => (
                <div
                  key={index}
                  className="team_col"
                  onClick={() => openModal(member)} // Open modal on click
                >
                  <div className="team_box cursor-pointer">
                    {/* Default Info */}
                    <div className="team_firt-info">
                      <div className="team_info">
                        <div className="team_thumb">
                          <img
                            className="team_thumb"
                            src={member.imageSrc}
                            alt={member.name}
                          />
                        </div>
                        <div className="team_desc">
                          <h4 className="team-title">{member.name}</h4>
                        </div>
                      </div>
                    </div>

                    {/* Hover Info */}
                    <div className="team_hover-info z-1">
                      <div className="team_info">
                        <div className="team_thumb">
                          <img
                            className="team_thumb"
                            src={member.imageSrc}
                            alt={member.name}
                          />
                        </div>
                        <div className="team_desc">
                          <h4 className="team-title">{member.name}</h4>
                          <p className="team-designation">
                            {member.designation}
                          </p>
                        </div>
                        {member.linkedin && (
                          <div className="team_social">
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`LinkedIn profile of ${member.name}`}
                              className="text-customwhite hover:text-blue-500"
                            >
                              <FaLinkedin size={20} />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed p-5 inset-0 z-50 bg-black bg-opacity-75 flex md:items-center justify-center transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-[700px] w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation to close modal
          >
            <button
              className="absolute top-2 right-2 text-black hover:text-red-500"
              onClick={closeModal}
            >
              ✖
            </button>
            <div className="team_modal_content">
              <img
                src={selectedMember.imageSrc}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                {selectedMember.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedMember.designation}
              </p>
              <div className="team_description">
                {selectedMember.description?.map((para, index) => (
                  <p key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: para }}>
                    
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
