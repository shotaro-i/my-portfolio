// Toggle the adjacent .hidden-project when a representative-projects li is clicked
document.addEventListener("DOMContentLoaded", () => {
  const repLis = document.querySelectorAll(".representative-projects li");
  repLis.forEach((li) => {
    const hidden = li.querySelector(".hidden-project");
    if (li && hidden) {
      li.addEventListener("click", (e) => {
        e.preventDefault();
        hidden.style.display =
          hidden.style.display === "block" ? "none" : "block";
      });
    }
  });
});

// JSON list of project information
const projects = [
  {
    title: "Project 1",
    description: "description",
    image: "./images/photo-1543852786-1cf6624b9987.jpeg", // 必要なら画像パス
    link: "a", // details page link if available
  },
  {
    title: "Project 2",
    description: "description",
    image: "./images/photo-1548802673-380ab8ebc7b7.jpeg", // image path if needed
    link: "a", // details page link if available
  },
  {
    title: "Project 3",
    description: "description",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // image path if needed
    link: "a", // details page link if available
  },
  {
    title: "Project 4",
    description: "description",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // image path if needed
    link: "", // details page link if available
  },
  {
    title: "Project 5",
    description: "description",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // image path if needed
    link: "", // details page link if available
  },
  {
    title: "Project 6",
    description: "description",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // image path if needed
    link: "", // details page link if available
  },
  {
    title: "Project 7",
    description: "description",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // image path if needed
    link: "", // details page link if available
  },
  {
    title: "Project 8",
    description: "description",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // 必要なら画像パス
    link: "", // 必要なら詳細ページ
  },
  {
    title: "Project 9",
    description: "description",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // 必要なら画像パス
    link: "", // 必要なら詳細ページ
  },
  {
    title: "Project 10",
    description: "description",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // 必要なら画像パス
    link: "", // 必要なら詳細ページ
  },
];

// Render projects to HTML (grid with image, title, description and optional link)
const projectList = document.getElementById("project-list");
if (projectList) {
  projects.forEach((project) => {
    let content = `
      <img src="${
        project.image || "https://placehold.co/400x300?text=No+Image"
      }" alt="${project.title}" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    let wrapper;
    if (project.link) {
      wrapper = document.createElement("a");
      wrapper.href = project.link;
      wrapper.target = "_blank";
      wrapper.rel = "noopener";
      wrapper.className = "project-item";
      wrapper.innerHTML = content;
    } else {
      wrapper = document.createElement("div");
      wrapper.className = "project-item";
      wrapper.innerHTML = content;
    }
    projectList.appendChild(wrapper);
  });
}
