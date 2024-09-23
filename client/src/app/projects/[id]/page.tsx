"use client";

import { useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";
import BoardView from "../BoardView";
import ListView from "../ListView";

type ProjectProps = {
  params: { id: string };
};

const Project = ({ params }: ProjectProps) => {
  const { id } = params;

  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      {/* NEW TASK MODAL */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

      {activeTab === "List" && (
        <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};

export default Project;
