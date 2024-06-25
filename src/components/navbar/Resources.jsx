import React, { useState } from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";

function Resources() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <MenuButton as={Box} p="2" borderRadius="md" className="my-0">
            <p className="hover:text-green-500">Resources</p>
          </MenuButton>
          <MenuList>
            <div className="-my-7 py-11 grid grid-cols-2 gap-6 px-10">
              <div>
                <h1 className="font-light my-2">Products</h1>
                <p className="">Screen</p>
                <p className="font-normal">Save time and accelerate your hiring.</p>
                <p className="mt-2">Interview</p>
                <p className="font-normal">Conduct stellar technical interviews.</p>
                <p className="mt-2">Engage</p>
                <p className="font-normal">Promote your tech brand.</p>
                <p className="mt-2">SkillUp</p>
                <p className="font-normal">Mobilize your tech talent.</p>
              </div>
              <div>
                <h1 className="font-light my-2">Features</h1>
                <p>Certified Assessments</p>
                <p className="font-normal">Launch standardized, role-based tests in minutes.</p>
                <p className="mt-2">Plagiarism Detection</p>
                <p className="font-normal">Ensure fairness with AI-powered plagiarism detection.</p>
                <p className="mt-2">Real World Questions</p>
                <p className="font-normal">Assess technical hires with real-world coding questions.</p>
                <p className="mt-2">Integrations</p>
                <p className="font-normal">Seamlessly connect with your favorite tools.</p>
              </div>
            </div>
          </MenuList>
        </div>
      </Menu>
    </div>
  )
}

export default Resources
