import { getActiveTabURL } from "./utilities.js";

document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getActiveTabURL();
    const queryParameters = activeTab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
  
    // const currentVideo = urlParameters.get("v");
  
    if (activeTab.url.includes("youtube.com/results")) {
      
    } else {
      const container = document.getElementsByClassName("container")[0];
  
      container.innerHTML = '<div class="title">This is not a youtube search page.</div>';
    }
  });