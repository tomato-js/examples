const { Gitlab } = require("@tomato-js/api");
// only clone one project directly by project id and path 
(async () => {
  try {
    const myGitlab = await Gitlab.create({
      baseUrl: "**********",
      token: "**********",
    });
    console.log(await myGitlab.cloneProject({ id: 49427, path:'./xixi/about' }));
  } catch (error) {
    console.error(error);
  }
})();