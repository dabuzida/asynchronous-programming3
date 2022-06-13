async function f() {
  async function d() {
    function s() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(" resolved ok!");
        }, 1000);
      });
    }
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("completed");
      }, 1000);
    });
    console.log(p);
    p.then((resolve) => console.log(">>", resolve));
    await s();
    p.then((resolve) => console.log(">>>", resolve));
    console.log(p);
  }
  async function e() {
    function s() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(" resolved ok!");
        }, 1000);
      });
    }
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("completed");
      }, 1000);
    });
    console.log(p);
    p.then((resolve) => console.log(">>", resolve));
    // await s();
    p.then((resolve) => console.log(">>>", resolve));
    console.log(p);
  }
  console.log(1);
  await d();
  console.log(2);
  await e();
  console.log(3);
}
f();
