document.addEventListener("DOMContentLoaded", () => {
    const queueList = document.getElementById("queueList");
    const queue = JSON.parse(localStorage.getItem("queue")) || [];
  
    if (queue.length === 0) {
      queueList.innerHTML = "<p>ยังไม่มีรายการคิว</p>";
      return;
    }
  
    queue.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "queue-item";
      div.innerHTML = `
        <strong>#${index + 1}</strong> - ${item.name}<br>
        เวลา: ${item.time} | คน: ${item.people}
      `;
      queueList.appendChild(div);
    });
  });