const { Gitlab } = require("@tomato-js/api");

//clone a group of projects
(async () => {
  try {
    const myGitlab = await Gitlab.create({
      baseUrl: "********",
      token: "**********",
    });
    const info = await myGitlab.cloneGroup({ id: 12343 });
    console.log(info);
  } catch (error) {
    console.error(error);
  }
})();
