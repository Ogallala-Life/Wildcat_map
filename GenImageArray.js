
// Function to generate an array of image paths for a folder
function generateImagePaths(folderPath, numberOfImages, ttl) {
  const imagePaths = [];
  // Assuming image filenames follow a certain pattern, like image1.jpg, image2.jpg, etc.
  for (let i = 1; i <= numberOfImages; i++) {
      const imagePath = `${folderPath}/`+ttl+`_${i}.jpg`; // Adjust file extension as needed
      imagePaths.push(imagePath);
  }
  return imagePaths;
}

// Example naming convention
// S1D1_JAN_1
