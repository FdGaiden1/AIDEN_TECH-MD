"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "✨", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/FdGaiden1/AIDEN_TECH-MD';
  const img = 'https://telegra.ph/file/91f19cc651f26f523280a.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow whatsaap user
this is* *AIDEN_TECH-MD.*\n support our channel *by*,  https://whatsapp.com/channel/0029VaefFGr77qVUzcS6ad0t

🗼 *REPOSITORY:* ${data.html_url}
🌟 *STARS:* ${repoInfo.stars}
🧧 *FORKS:* ${repoInfo.forks}
📅 *RELEASE DATE:* ${releaseDate}
🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
👨‍💻 *OWNER:* *AIDEN_TECH-MD*
💞 *THEME:* *AIDEN_TECH-MD*
🥰*MY REALLY NAME IS FREDRICK!👑*
__________________________________
            *Made With Boniphace Tech*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
