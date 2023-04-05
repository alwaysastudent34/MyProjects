for (let i = 1; i <= 199; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("TriPenta");
    } else if (i % 3 === 0) {
      console.log("Tri");
    } else if (i % 5 === 0) {
      console.log("Penta");
    } else {
      console.log(i);
    }
  }
  