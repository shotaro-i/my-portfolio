// プロジェクト情報のJSONリスト
const projects = [
  {
    title: "Project 1",
    description: "Project 1の説明。",
    image: "./images/photo-1543852786-1cf6624b9987.jpeg", // 必要なら画像パス
    link: "a", // 必要なら詳細ページ
  },
  {
    title: "Project 2",
    description: "Project 2の説明。",
    image: "./images/photo-1548802673-380ab8ebc7b7.jpeg", // 必要なら画像パス
    link: "a", // 必要なら詳細ページ
  },
  {
    title: "Project 3",
    description: "Project 3の説明。",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // 必要なら画像パス
    link: "a", // 必要なら詳細ページ
  },
  {
    title: "Project 4",
    description: "Project 4の説明。",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // 必要なら画像パス
    link: "", // 必要なら詳細ページ
  },
  {
    title: "Project 5",
    description: "Project 5の説明。",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // 必要なら画像パス
    link: "", // 必要なら詳細ページ
  },
  {
    title: "Project 6",
    description: "Project 6の説明。",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // 必要なら画像パス
    link: "", // 必要なら詳細ページ
  },
  {
    title: "Project 7",
    description: "Project 7の説明。",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // 必要なら画像パス
    link: "", // 必要なら詳細ページ
  },
  {
    title: "Project 8",
    description: "Project 8の説明。",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // 必要なら画像パス
    link: "", // 必要なら詳細ページ
  },
  {
    title: "Project 9",
    description: "Project 9の説明。",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // 必要なら画像パス
    link: "", // 必要なら詳細ページ
  },
  {
    title: "Project 10",
    description: "Project 10の説明。",
    image: "./images/photo-1560114928-40f1f1eb26a0.jpeg", // 必要なら画像パス
    link: "", // 必要なら詳細ページ
  },
];

// プロジェクトをHTMLに展開（画像・タイトル・説明・リンク付きグリッド）
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
