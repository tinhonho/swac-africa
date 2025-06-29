function showDetergentImages() {
  document.getElementById('detergentModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('detergentModal').style.display = 'none';
}

// Optional: Close when clicking outside modal
window.onclick = function(event) {
  const modal = document.getElementById('detergentModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
function showTractorModal() {
  document.getElementById('tractorModal').style.display = 'block';
}

function closeTractorModal() {
  document.getElementById('tractorModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('tractorModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};