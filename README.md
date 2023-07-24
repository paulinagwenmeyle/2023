How to modify the image and text carousel

# Changing Images
Images are stored in the 'images' directory and are referenced from a JSON file (e.g., content.json).

To add a new image to the carousel, first upload the image file (.png or .jpeg format) to the 'images' directory.
Then, open the content.json file and add a new JSON object to the array in this file. The new object should look something like this:

{
  "image": "images/YOUR_IMAGE_NAME.png",
  "text": "text/YOUR_TEXT_FILE.txt"
}

Make sure to replace YOUR_IMAGE_NAME.png with the name of the image file you uploaded.

# Changing Text
Text displayed alongside the images in the carousel is stored in the 'text' directory and are also referenced from the content.json file.

To change the text displayed with an image, first create a new .txt file with your desired text in the 'text' directory.
Then, add or update a JSON object in content.json to reference your new text file. It should look like this:

{
  "image": "images/YOUR_IMAGE_NAME.png",
  "text": "text/YOUR_TEXT_FILE.txt"
}

Make sure to replace YOUR_TEXT_FILE.txt with the name of the text file you uploaded.

Carousel Order
The order of the carousel (both images and text) is determined by the order of the objects in the content.json file. The carousel starts with the first object in the array and proceeds in order.

# Refreshing the Page
After making changes to the images or text, make sure to refresh your webpage. This will ensure the new content is fetched and displayed in the carousel.

Remember, paths such as 'images/' and 'text/' are just examples. You should replace these with the actual paths to where your images and text files are stored on your server.

Also note, this README assumes that you have write access to the server and directories where the image, text, and JSON files are stored.

